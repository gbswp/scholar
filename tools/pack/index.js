let glob = require('glob');
let path = require('path');
let fs = require('fs-extra');
let execSync = require('child_process').execSync;
let crypto = require('crypto');
let _ = require('lodash');
let PromisePool = require('es6-promise-pool');
let ProgressBar = require('progress');
let getTransformer = require('./transform.js');
let config = require('../config');
let settings = require(path.join(config.projectPath, config.settingsFile));

let t = {
    get now() { return new Date().getTime(); },
    pastSec(sec) { return `${((t.now - sec) / 1000).toFixed(2)}` }
};

// png的附属文件类型
let appendixExt = ['.st', '.json', '.sk', '.atlas'];
// 打包信息文件
let packFile = 'packInfo.cache.json';
//图集中的资源
let _atlasMap = {};

/**
 * 增量打包工具入口
 * @param md5Enabled 是否开启md5改名
 * @param repack 是否全部重新打包
 */
function pack(md5Enabled, repack) {
    let { readFile, readFileSync, existsSync, unlinkSync, outputFileSync, outputFile } = fs;
    let sourceAssetsPath = path.join(config.projectPath, config.assetsPath);
    let destAssetsPath = path.join(config.projectPath, config.packedAssetsPath);
    let appendixGlob = `**/*@(${appendixExt.join("|")})`;
    let thumbGlob = '**/Thumbs.db';

    // ●●●计算需要增加，删除，更改的文件列表
    let recordTime = t.now;
    console.log("●计算需要增加，删除，更改的文件列表中...");
    let NO_MD5_FILES = []; // 不需要md5加密的所有文件列表
    let listMd5; // 增加的文件列表，这里面的需要文件名md5加密（且不会包含st,atlas等这类附属文件）
    let listNoMd5; // 增加的文件列表， 这里面的不需要Md5加密
    let listDel; // 需要删除的文件列表
    let repackMode; // 是否重新打包模式（设置成重新打包模式，或者是没有之前版本信息，都会被判定为此模式）
    // 以下开始计算缓存信息
    let cachedPackInfo = {}; // 之前打包的信息（打包的git版本号，之前打包的MD5信息）
    let newCacheInfo = {}; // 这次新打包创造的内容
    let packInfoFile = path.join(config.projectPath, config.packedResPath, packFile);
    if (existsSync(packInfoFile)) {
        cachedPackInfo = JSON.parse(readFileSync(packInfoFile, 'utf-8'));
    }
    // 得到当前最新的版本号
    let cmd = `git log --oneline -1 ${config.assetsPath}`;
    let output = execSync(cmd, { cwd: config.projectPath, encoding: 'utf8' });
    let headVersionInfo = /^\w+/.exec(output);
    let headVersion = _.head(headVersionInfo);
    if (!headVersion) {
        throw new Error(`目录${config.assetsPath}没有找到版本号`);
    }
    console.log(`目录${config.assetsPath}版本号：${headVersion}`);
    let recordVersion = cachedPackInfo['version'];
    let recordMd5Excludes = cachedPackInfo['md5Excludes'] || [];
    let md5Excludes = settings['md5Excludes'];
    let setChanged = recordMd5Excludes.sort().join("") != md5Excludes.sort().join("");
    let manifestMd5Map = {};
    for (let i = 0; i < md5Excludes.length; ++i) {
        let list = glob.sync(md5Excludes[i], {
            cwd: sourceAssetsPath,
            nodir: true,
            ignore: [thumbGlob],
        });
        NO_MD5_FILES = [...NO_MD5_FILES, ...list];
    }
    // 元数据文件列表（这类文件是每次都需要重新生成的）
    let metaList = settings["metaResources"];
    // 如果没有packedVersion信息的话， 那么就会全部重新打包
    repackMode = repack || !recordVersion || setChanged;
    if (repackMode) {
        // 忽略Thumbs.db, 信息文件，和配置中配置的忽略文件
        let ignoreList = [thumbGlob, appendixGlob, ...md5Excludes];
        listMd5 = glob.sync('**', {
            cwd: sourceAssetsPath,
            nodir: true,
            ignore: ignoreList,
        });
        listMd5 = _.filter(listMd5, file => filterDynamic(file));
        listNoMd5 = _.filter(NO_MD5_FILES, file => filterDynamic(file));
        listDel = [];
        // 输出重新打包的提示
        if (repack) {
            console.log('设置为重新打包模式， 开始完全重新打包');
        } else if (!recordVersion) {
            console.log('没有packInfo.cache.json或没有在该文件中找到之前的git版本号， 开始完全重新打包');
        }
    } else { // 如果有记录的版本号， 那么就找版本差异， 做增量改变
        console.log(`上次的版本号：${recordVersion}`);
        cmd = `git diff ${recordVersion} ${headVersion} --name-status ${config.assetsPath}`;
        output = execSync(cmd, { cwd: config.projectPath, encoding: 'utf8' });
        console.log(cmd); // 命令打印出来
        console.log(output.trim()); // 输出也打印出来
        listMd5 = [];
        listNoMd5 = [];
        listDel = [];
        let list = output.split('\n');
        list.forEach(str => {
            let match = /^(\w)\w*\s+(\S+)(\s+(\S+))?$/.exec(str);
            if (!match) return;

            let [, op, param1, , param2] = match;
            if (op === 'D' || op === 'M' || op === 'R') {
                let file = param1.replace(slashSuffix(config.assetsPath), '');
                listDel.push(file);
            }
            if (op === 'A' || op === 'M' || op === 'R') {
                let file = op === 'R' ? param2 : param1;
                file = file.replace(slashSuffix(config.assetsPath), '');
                if (NO_MD5_FILES.includes(file)) {
                    listNoMd5.push(file);
                } else {
                    // 加进去的如果是png的附属文件，那么只存对应的png文件
                    let ext = getExt(file);
                    if (appendixExt.includes(ext)) {
                        let pngFile = replaceExt(file, '.png');
                        // 如果确实存在对应的png文件， 那么才需要将其对应的png文件保存， 不然存原来的文件
                        if (existsSync(path.join(config.projectPath, config.assetsPath, pngFile))) {
                            file = pngFile;
                        }
                    }
                    listMd5.push(file);
                }
            }
            if (!['R', 'A', 'D', 'M'].includes(op)) {
                console.error(`Unrecognized operation: ${str}`);
                throw new Error(`无法识别的GIT操作：${op}，请做支持后重新再重跑脚本`);
            }
        });
        // 只需要过滤出来动态的(.d,.e)的文件
        listMd5 = _.filter(listMd5, file => filterDynamic(file));
        listNoMd5 = _.filter(listNoMd5, file => filterDynamic(file));


        // 读取md5记录文件， 保存到map中
        let packedResPath = path.join(config.projectPath, config.packedResPath);
        let cachedManifest = cachedPackInfo["manifest"];
        let manifestFile = cachedManifest ? `manifest_${cachedManifest}.json` : null;
        if (!manifestFile) {
            // 如果没有之前的信息， 那么就取最大的那个
            let md5MapFileList = glob.sync('manifest_*.json', { cwd: packedResPath, nodir: true }) || [];
            let maxVersion = 0;
            for (let file of md5MapFileList) {
                let [versionMatch] = /\d+(\.\d+)?/.exec(file);
                if (+versionMatch > maxVersion) {
                    maxVersion = +versionMatch;
                    manifestFile = file;
                    console.log(maxVersion, manifestFile);
                }
            }
        }
        let manifestPath = path.join(config.projectPath, config.packedResPath, manifestFile);
        if (!manifestFile || !existsSync(manifestPath)) {
            console.error(`没有找到md5信息文件：manifest_[version].json文件！`);
            throw new Error(`增量模式下，manifest_[version].json必须存在。如果要重新打包，请设置成完全重新打包模式`);
        }
        manifestMd5Map = JSON.parse(readFileSync(manifestPath, 'utf-8'));
        console.log(`manifest文件：${manifestFile}`);
    }

    // 需要把被git ignore的目录也都另外加进来（因为他们不会出现在git diff中）
    let ignoreList = glob.sync(`@(${settings['gitIgnores'].join('|')})/**/*.png`, {
        cwd: sourceAssetsPath,
        nodir: true,
    }) || [];
    listMd5 = listMd5.concat(ignoreList);
    console.log(`sheets内容单独加入（git diff无法得到），共${ignoreList.length}个`);
    listMd5 = _.uniq(listMd5);  // 这个列表里会有重复。所以要去重
    console.log(`计算需要增加，删除，更改的文件列表完成，耗时${t.pastSec(recordTime)}秒`);

    // ●●●记录相关信息文件(st|json|sk|atlas)
    console.log(`●记录相关附属文件(${appendixExt.join(",")})信息中...`);
    recordTime = t.now;
    let appendixFiles = glob.sync(appendixGlob, {
        cwd: sourceAssetsPath,
        nodir: true,
    }) || [];
    let infoFileMap = {};
    appendixFiles.forEach(appendixFile => {
        let pngFile = replaceExt(appendixFile, '.png');
        // 如果是不存在对应的png文件， 那么这些文件是要增加的
        if (!existsSync(path.join(config.projectPath, config.assetsPath, pngFile))) {
            if (repackMode) {
                // 重新打包模式下，这些文件都要另外加进去，不然会不被加进去的
                listMd5.push(appendixFile);
                // map.json 是没有问题的，其他这类文件输出下核对是否有问题
                if (!/map\d*.json/.test(appendixFile)) {
                    console.warn(`${appendixFile}没有对应png文件`);
                }
            }
        } else if (!infoFileMap[pngFile]) {
            infoFileMap[pngFile] = [appendixFile];
        } else {
            infoFileMap[pngFile].push(appendixFile);
        }
    });
    console.log(`记录相关附属文件(${appendixExt.join(",")})信息完成，耗时${t.pastSec(recordTime)}秒`);

    // ●●●操作之前计算出来的增加，删除的文件列表
    recordTime = t.now;
    console.log("●增量打包之前计算出来的增加，删除的文件列表中...");
    // 重新打包模式是要删除多余文件的
    let sourceMap = {};
    let destMap = {};
    for (let file in cachedPackInfo) {
        let sourceFile = file || '';
        let destMd5 = cachedPackInfo[sourceFile][1]; // 数组第二个值是输出文件的md5
        let destFile = replaceFileName(sourceFile, destMd5);
        destMap[sourceFile] = destFile;
        sourceMap[destFile] = sourceFile;
    }
    // 非附属文件都取出来
    let destList = glob.sync('**', {
        cwd: destAssetsPath,
        nodir: true,
        ignore: [thumbGlob, appendixGlob],
    }) || [];
    // 然后还要取出json等文件中非附属文件部分
    destList.push(...getConfigFiles(appendixGlob, destAssetsPath));
    destList = destList.map(f => sourceMap[f] || f);

    if (repackMode) {
        // 如果有缓存信息， 那么就可以对比， 将来源目录已经不存在的文件，
        // 在输出目录（就是res/assets目录）下，筛选出来删掉
        if (!_.isEmpty(cachedPackInfo)) {
            console.log('--完全打包模式下，计算输出目录多余的文件中...');
            let deleteTime = t.now;
            let sourceList = [...listMd5, ...listNoMd5, ...getConfigFiles(appendixGlob, sourceAssetsPath)];
            let removeList = _.difference(destList, sourceList); // 取出存在于destList列表，而不存在于sourceList列表的数组
            console.log(`--计算输出目录多余的文件完成，耗时${t.pastSec(deleteTime)}s`);
            if (removeList.length > 0) {
                let removeExtraTime = t.now;
                console.log(`--删除多余文件中，共${removeList.length}个...`);
                console.log('--完全打包模式下， 比对出来需要删除的文件列表如下：');
                console.log(removeList.join('\n'));
                removeList.forEach(removeFile => {
                    let realRemoveFile = destMap[removeFile] || removeFile;
                    let file = path.join(destAssetsPath, realRemoveFile);
                    existsSync(file) && unlinkSync(file);
                    delete cachedPackInfo[removeFile]; // 这个也要同时删掉
                });
                console.log(`--删除多余文件完成，耗时${t.pastSec(removeExtraTime)}s`);
            } else {
                console.log('--没有遗留冗余文件');
            }
        } else { // 重新打包模式下， 而且又没有缓存信息， 那么整个res目录就删掉（因为会重新生成）
            console.log(`--完全打包模式下，没有缓存文件，会删除整个${destAssetsPath}目录...`);
            let deleteTime = t.now;
            deleteDir(destAssetsPath);
            console.log(`--删除整个目录完成，耗时${t.pastSec(deleteTime)}s`);
        }
    }

    //删除忽略MD5配置 对应的文件
    let removeList = _.filter(destList, file => {
        return recordMd5Excludes.includes(file) ^ md5Excludes.includes(file);
    })
    removeList.forEach(removeFile => {
        let realRemoveFile = destMap[removeFile] || removeFile;
        let file = path.join(destAssetsPath, realRemoveFile);
        existsSync(file) && unlinkSync(file);
        delete cachedPackInfo[removeFile]; // 这个也要同时删掉
    });

    let destMetaList = [];
    // 先将删除列表中的文件删除
    return doTaskList(() => {
        // 如果列表为空了， 就会进行到下一步
        if (listDel.length <= 0) {
            return null;
        }
        let file = listDel.shift();
        // let md5Name = manifestMd5Map[file];
        let md5Name = getMd5NameByManifest(file, manifestMd5Map);
        if (!!md5Name) {
            file = replaceFileName(file, md5Name);
        }
        let fileFullPath = path.join(config.projectPath, config.packedAssetsPath, file);
        if (existsSync(fileFullPath)) {
            unlinkSync(fileFullPath);
        } else {
            console.warn(`[删除]没有找到文件：${fileFullPath}`);
        }
        // 对应信息也得删除
        // delete manifestMd5Map[file];
        deleteFileByManifest(file, manifestMd5Map);
        delete cachedPackInfo[file];

        return Promise.resolve();
    }).then(() => {
        // 这里开始处理需要增加的文件, 显示一个进度条

        let total = listMd5.length + listNoMd5.length + metaList.length;
        console.log(`增加新文件中，共${total}个，（其中必要文件${metaList.length}个）..`);
        let progressBar = new ProgressBar(':bar :percent', {
            complete: '█',
            total: total,
            width: 60,
        });
        let transformExcludes = settings["transformExcludes"];
        return doTaskList(() => {
            let currentFile = null;
            let isMd5Mode = false;
            let isMeta = false;
            if (listMd5.length > 0) {
                currentFile = listMd5.shift();
                isMd5Mode = md5Enabled;
            } else if (listNoMd5.length > 0) {
                currentFile = listNoMd5.shift();
            } else if (metaList.length > 0) {
                currentFile = metaList.shift();
                isMd5Mode = md5Enabled;
                isMeta = true;
            }
            if (!currentFile) return null;

            let fileList = [currentFile];
            let needTransform = !transformExcludes.includes(currentFile);
            if (infoFileMap[currentFile]) {
                fileList.push(...infoFileMap[currentFile]);
            }

            // 如果是完全打包模式，是需要计算MD5是否变化（跟缓存记录比较）。没有变化，就直接跳过
            if (!NO_MD5_FILES.includes(currentFile)) {
                let cachedInfo = cachedPackInfo[currentFile];
                let cachedMd5 = _.head(cachedInfo);
                if (cachedMd5) { // 有缓存记录的才需要比较
                    let bufMap = {};
                    let resPath = isMeta ? config.resourcePath : config.assetsPath;
                    for (let file of fileList) {
                        let filePath = path.join(config.projectPath, resPath, file);
                        if (!existsSync(filePath)) continue;
                        bufMap[filePath] = readFileSync(filePath);
                    }
                    let destFileName = destMap[currentFile]
                    let outputPath = isMeta ? config.packedResPath : config.packedAssetsPath;
                    let destPath = path.join(config.projectPath, outputPath, destFileName);
                    let md5 = getFilesMd5(bufMap);
                    if (existsSync(destPath) && cachedMd5 === md5) { // 如果一样的话， 直接就跳过了
                        // manifestMd5Map[currentFile] = cachedInfo[1];
                        saveMd5NameByManifest(currentFile, cachedInfo[1], manifestMd5Map);
                        progressBar.tick();
                        isMeta && destMetaList.push(destFileName);
                        return Promise.resolve();
                    }
                }
            }

            let destBufMap = {};
            let sourceBufMap = {};
            let tmpList = fileList.concat();
            return doTaskList(() => {
                if (tmpList.length <= 0) return null;

                let file = tmpList.shift();
                let transformer = getTransformer(needTransform ? getExt(file) : '');
                let filePath = path.join(config.projectPath, isMeta ? config.resourcePath : config.assetsPath, file);
                return readFile(filePath).then(buf => {
                    sourceBufMap[file] = buf;
                    return transformer(buf);
                }).then(buf => {
                    destBufMap[file] = buf;
                });
            }).then(() => {
                let outputMap = {};
                // 先算出输出的文件名
                if (isMd5Mode) {
                    let sourceMd5Name = getFilesMd5(sourceBufMap);
                    let destMd5Name = getFilesMd5(destBufMap);
                    // 记录到map中， 最终会输出到json文件中保存起来
                    // manifestMd5Map[currentFile] = destMd5Name;
                    saveMd5NameByManifest(currentFile, destMd5Name, manifestMd5Map);
                    newCacheInfo[currentFile] = [sourceMd5Name, destMd5Name];
                    for (let file of fileList) {
                        outputMap[file] = replaceFileName(file, destMd5Name);
                    }
                }

                // 这里开始输出文件
                return doTaskList(() => {
                    if (fileList.length <= 0) return null;

                    let file = fileList.shift();
                    let destFileName = outputMap[file] || file;
                    let buf = destBufMap[file];
                    let outputPath = isMeta ? config.packedResPath : config.packedAssetsPath;
                    let destPath = path.join(config.projectPath, outputPath, destFileName);
                    isMeta && destMetaList.push(destFileName);
                    return outputFile(destPath, buf);
                });
            }).then(() => {
                progressBar.tick();
            });
        });
    }).then(() => {
        let packedResPath = path.join(config.projectPath, config.packedResPath);
        // 先删除之前的一级目录下的除了新生成的文件外的所有文件
        let oldMetaList = glob.sync('*', { cwd: packedResPath, nodir: true, ignore: destMetaList }) || [];
        oldMetaList.forEach(file => {
            let filePath = path.join(packedResPath, file);
            unlinkSync(filePath);
        });
        // 创建新的manifest文件
        let codeVersion = config.projectConfig.getResVersion();
        let newManifestPath = path.join(packedResPath, `manifest_${codeVersion}.json`);
        let newManifestContent = JSON.stringify(manifestMd5Map);
        outputFileSync(newManifestPath, newManifestContent);
        // 创建打包信息文件（有这次打包的git版本号记录）
        newCacheInfo['version'] = headVersion;
        newCacheInfo['manifest'] = codeVersion;
        newCacheInfo['timestamp'] = Date.now();
        newCacheInfo['md5Excludes'] = md5Excludes;
        if (repackMode && _.isEmpty(cachedPackInfo)) {
            cachedPackInfo = newCacheInfo;
        } else {
            cachedPackInfo = _.assign(cachedPackInfo, newCacheInfo);
        }
        let packPath = path.join(packedResPath, packFile);
        let packContent = JSON.stringify(cachedPackInfo);
        outputFileSync(packPath, packContent);
    }).then(() => {
        console.log(`增量打包之前计算出来的增加，删除的文件列表完成，耗时${t.pastSec(recordTime)}秒`);
    });
}

/** 取得扩展名 **/
function getExt(file) {
    let extInfo = /\.\w+$/.exec(file);
    return extInfo ? extInfo[0] : "";
}

/** 替换扩展名 **/
function replaceExt(file, ext) {
    return file.replace(/\.\w+$/, ext);
}

/** 替换文件名 **/
function replaceFileName(file, newName) {
    return file.replace(/[^\\\/]+(?=\.\w+$)/, newName);
}

function slashSuffix(str) {
    return (str.length <= 0 || str.endsWith('/')) ? str : `${str}/`;
}

function doTaskList(handler, concurrencyNum = 1) {
    return new PromisePool(handler, concurrencyNum).start();
}

function getMd5(buf) {
    let hash = crypto.createHash('md5');
    hash.update(buf);
    return hash.digest('hex');
}

function getFilesMd5(bufMap) {
    let md5List = [];
    for (let buf of _.values(bufMap)) {
        md5List.push(getMd5(buf));
    }
    // 多个文件的话， 要算出多文件联合md5的值
    let fileMd5Name = md5List.length > 1 ? getMd5(md5List.join()) : _.head(md5List);
    fileMd5Name = fileMd5Name || ''; // 防空对象
    fileMd5Name = fileMd5Name.substr(0, 12); // 与之前保持一致，只留12位
    return fileMd5Name;
}

/** 排除在图集中的文件 **/
function filterDynamic(file) {
    if (!_.size(_atlasMap)) {
        _atlasMap = collectAtlasMap();
    }
    return !_atlasMap[file];
}

// laya原生的图集格式
function collectAtlasMap() {
    var atlasMap = {};
    var atlasPath = path.join(config.projectPath, config.atlasPath);
    var files = glob.sync('**/*.st', { cwd: atlasPath });
    _.each(files, file => {
        let dirname = path.basename(file, ".st");
        var content = fs.readFileSync(path.join(atlasPath, file), 'utf8');
        var obj = JSON.parse(content);
        var prefix = dirname + (!obj.meta ? "" : obj.meta.prefix || '');
        _.keys(obj.frames).map(resName => {
            atlasMap[path.join(prefix, resName + ".png").replace('\\', '/')] = 1;
        });
    });
    return atlasMap;
}

function getConfigFiles(appendixGlob, assetsPath) {
    let list = [];
    let appendixList = glob.sync(appendixGlob, {
        cwd: assetsPath,
        nodir: true,
    }) || [];
    appendixList.forEach(appendixFile => {
        let pngFile = replaceExt(appendixFile, '.png');
        // 如果是不存在对应的png文件， 那么这些文件是要加到列表里
        if (!fs.existsSync(path.join(assetsPath, pngFile))) {
            list.push(appendixFile);
        }
    });

    return list;
}

function deleteDir(folder) {
    let { readdirSync, existsSync, unlinkSync, statSync, rmdirSync } = fs;
    if (existsSync(folder)) {
        readdirSync(folder).forEach(file => {
            let curPath = path.join(folder, file);
            if (statSync(curPath).isDirectory()) { // recurse
                deleteDir(curPath);
            } else { // delete file
                unlinkSync(curPath);
            }
        });
        rmdirSync(folder);
    }
}


function getMd5NameByManifest(file, manifestMd5Map) {
    let map = manifestMd5Map;
    let keys = file.slice(0, file.lastIndexOf('.')).split("/");
    for (let i = 0, len = keys.length; i < len; i++) {
        let key = keys[i];
        map = map[key];
        if (!!map && typeof map == "object") continue;
        return map;
    }
    return "";
}

function deleteFileByManifest(file, manifestMd5Map) {
    let map = manifestMd5Map;
    let keys = file.slice(0, file.lastIndexOf('.')).split("/");
    for (let i = 0, len = keys.length; i < len; i++) {
        let key = keys[i];
        if (!!map[key] && typeof map[key] == "object") continue;
        map[key] = undefined;
        delete map[key];
    }
}

function saveMd5NameByManifest(file, md5Name, manifestMd5Map) {
    let map = manifestMd5Map;
    let keys = file.slice(0, file.lastIndexOf('.')).split("/");
    for (let i = 0, len = keys.length; i < len; i++) {
        let key = keys[i];
        if (i == len - 1) {
            map[key] = md5Name;
        } else {
            map = map[key] || (map[key] = {});
        }
    }
    return "";

}

module.exports = pack;

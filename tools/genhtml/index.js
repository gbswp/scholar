var fs = require('fs-extra');
var through = require('through2');
var path = require('path');
var gutil = require('gulp-util');
var File = gutil.File;
var concat = require('concat');
var UglifyJS = require("uglify-js");
var config = require('../config');
var projectConfig = config.projectConfig;

var wxJsPrefix = `
var app = window.app || (window.app = {});
`

function genIndex(opt) {
    opt = opt || {};
    var stripPrefix = opt.stripPrefix || '';
    var argv = opt.argv || {};

    var fileNames = [];
    return through.obj(function (file, enc, cb) {
        var jsFile = path.relative(stripPrefix, file.relative);
        fileNames.push(jsFile);
        cb();
    }, function (cb) {
        //index.html
        this.push(genWebHtml("index_h5.html", "index.html", fileNames, argv));

        //index_native.html
        fileName = "index.html";
        filePath = path.join("./tools/initer/templates/web", fileName)
        result = fs.readFileSync(filePath, 'utf-8');
        result = replaceEngineFiles(result, argv);
        result = replaceModuleFiles(result, argv, true);
        result = replaceGameNativeFiles(result, fileNames, argv);

        let nativeIndex = new File();
        nativeIndex.contents = Buffer.from(result);
        nativeIndex.path = 'index_native.html';
        this.push(nativeIndex);

        cb();
    });
};

function genWebHtml(fileName, outName, fileNames, argv) {
    var filePath = path.join("./tools/initer/templates/web", fileName)
    var result = fs.readFileSync(filePath, 'utf-8');
    result = replaceEngineFiles(result, argv, false);
    result = replaceModuleFiles(result, argv, false);
    result = replaceGameFiles(result, fileNames, argv);

    let webIndex = new File();
    webIndex.contents = Buffer.from(result);
    webIndex.path = outName;
    return webIndex;
}

function genJs(outFile, count) {
    if (count == 1) return through.obj(function (file, enc, cb) { cb(null, file) });
    var outDir = path.join(config.projectPath, path.dirname(outFile));
    var outBaseName = path.basename(outFile, '.js');
    var files = [];
    return through.obj(function (file, enc, cb) {
        var contents = file.contents;
        var partAverageLength = contents.length / count;
        var start = 0;
        var prefix = Buffer.from(wxJsPrefix)
        for (var i = 0; i < count; i++) {
            var pos = partAverageLength * (i + 1);
            var end = i < count - 1 ? contents.indexOf('var app;', pos) : contents.length;
            files.push(Buffer.concat([prefix, contents.slice(start, end)]));
            start = end;
        }
        cb();
    }, function (cb) {
        for (var i = 0; i < files.length; i++) {
            var file = new File();
            file.contents = files[i];
            file.path = path.join(outDir, outBaseName + (i + 1) + '.js');
            this.push(file);
        }
        cb();
    });
}

function genWxFile(publishPath, jsOutFile, argv) {
    var concat = require('concat');
    var engineFiles = projectConfig.getModuleFilesByType('engine', argv.minify);
    var extraFile = "libs/laya/laya.wxmini.js";//追加微信mini文件
    if (argv.minify) {
        extraFile = "libs/laya/min/laya.wxmini.min.js";
    }
    engineFiles.push(extraFile);
    var gameFiles = projectConfig.getModuleFilesByType('game', argv.minify);
    var excludePromise = "libs/promise/promise.js";//百度小游戏，去掉promise.js
    if (argv.minify) {
        excludePromise = "libs/promise/promise.min.js"
    }
    let idx = gameFiles.indexOf(excludePromise);
    if (idx > -1) {
        gameFiles.splice(idx, 1);
    }
    gameFiles.push("libs/ptsdk/wxsdk.js")

    var appJS = `app.${argv.target}.js`;
    gameFiles.push(fs.existsSync(appJS) ? appJS : 'app.wx.js');
    if (config.wxSubpackages && config.wxSubpackages.length > 0) {
        var promises = [];
        var p = concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'wxgame/code.js'), result);
        })
        promises.push(p);
        for (var i = 0; i < config.wxSubpackages.length; i++) {
            var pkg = config.wxSubpackages[i];
            var gameFile = config.wxSubpackages.length == 1 ? jsOutFile : jsOutFile.replace('.js', `${i + 1}.js`);
            argv.minify && (gameFile = gameFile.replace('.js', '.min.js'));
            p = fs.copy(path.join(config.projectPath, gameFile), path.join(publishPath, 'wxgame', pkg.root, 'game.js'));
            promises.push(p);
        }
        return Promise.all(promises);
    } else {
        return concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'wxgame/code.js'), result);
        })
    }
}

function genQQFile(publishPath, jsOutFile, argv) {
    var concat = require('concat');
    var engineFiles = projectConfig.getModuleFilesByType('engine', argv.minify);
    var extraFile = "libs/laya/laya.wxmini.js";//追加微信mini文件
    if (argv.minify) {
        extraFile = "libs/laya/min/laya.wxmini.min.js";
    }
    engineFiles.push(extraFile);
    var gameFiles = projectConfig.getModuleFilesByType('game', argv.minify);
    var excludePromise = "libs/promise/promise.js";//百度小游戏，去掉promise.js
    if (argv.minify) {
        excludePromise = "libs/promise/promise.min.js"
    }
    let idx = gameFiles.indexOf(excludePromise);
    if (idx > -1) {
        gameFiles.splice(idx, 1);
    }
    gameFiles.push("libs/ptsdk/qqsdk.js")

    var appJS = `app.${argv.target}.js`;
    gameFiles.push(fs.existsSync(appJS) ? appJS : 'app.qq.js');
    if (config.qqSubpackages && config.qqSubpackages.length > 0) {
        var promises = [];
        var p = concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'qqgame/code.js'), result);
        })
        promises.push(p);
        for (var i = 0; i < config.qqSubpackages.length; i++) {
            var pkg = config.qqSubpackages[i];
            var gameFile = config.qqSubpackages.length == 1 ? jsOutFile : jsOutFile.replace('.js', `${i + 1}.js`);
            argv.minify && (gameFile = gameFile.replace('.js', '.min.js'));
            p = fs.copy(path.join(config.projectPath, gameFile), path.join(publishPath, 'qqgame', pkg.root, 'game.js'));
            promises.push(p);
        }
        return Promise.all(promises);
    } else {
        return concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'qqgame/code.js'), result);
        })
    }
}

function genBdFile(publishPath, jsOutFile, argv) {
    var concat = require('concat');
    var engineFiles = projectConfig.getModuleFilesByType('engine', argv.minify);
    var extraFile = "libs/laya/laya.bdmini.js";//追加百度mini文件
    if (argv.minify) {
        extraFile = "libs/laya/min/laya.bdmini.min.js";
    }
    engineFiles.push(extraFile);

    var gameFiles = projectConfig.getModuleFilesByType('game', argv.minify);
    var excludePromise = "libs/promise/promise.js";//百度小游戏，去掉promise.js
    if (argv.minify) {
        excludePromise = "libs/promise/promise.min.js"
    }
    let idx = gameFiles.indexOf(excludePromise);
    if (idx > -1) {
        gameFiles.splice(idx, 1);
    }
    gameFiles.push("libs/ptsdk/bdsdk.js")

    var appJS = `app.${argv.target}.js`;
    gameFiles.push(fs.existsSync(appJS) ? appJS : 'app.bd.js');
    // console.log("engineFiles:",engineFiles,"  gameFiles:",gameFiles);
    if (config.bdSubpackages && config.bdSubpackages.length > 0) {
        var promises = [];
        var p = concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'bdgame/code.js'), result);
        })
        promises.push(p);
        for (var i = 0; i < config.bdSubpackages.length; i++) {
            var pkg = config.bdSubpackages[i];
            var gameFile = config.bdSubpackages.length == 1 ? jsOutFile : jsOutFile.replace('.js', `${i + 1}.js`);
            argv.minify && (gameFile = gameFile.replace('.js', '.min.js'));
            p = fs.copy(path.join(config.projectPath, gameFile), path.join(publishPath, 'bdgame', pkg.root, 'game.js'));
            promises.push(p);
        }
        return Promise.all(promises);
    } else {
        return concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'bdgame/code.js'), result);
        })
    }
}

function genVqFile(publishPath, jsOutFile, argv) {
    var concat = require('concat');
    var engineFiles = projectConfig.getModuleFilesByType('engine', argv.minify);
    var extraFile = "libs/laya/laya.vvmini.js";//追加微信mini文件
    if (argv.minify) {
        extraFile = "libs/laya/min/laya.vvmini.min.js";
    }
    engineFiles.push(extraFile);

    var gameFiles = projectConfig.getModuleFilesByType('game', argv.minify);
    // var excludePromise = "libs/promise/promise.js";//百度小游戏，去掉promise.js
    // if(argv.minify){
    //     excludePromise = "libs/promise/promise.min.js"
    // }
    // let idx = gameFiles.indexOf(excludePromise);
    // if(idx > -1){
    //     gameFiles.splice(idx,1);
    // }
    gameFiles.push("libs/ptsdk/vivosdk.js");

    var appJS = `app.${argv.target}.js`;
    gameFiles.push(fs.existsSync(appJS) ? appJS : 'app.vq.js');
    // console.log("engineFiles:",engineFiles,"  gameFiles:",gameFiles);
    if (config.vqSubpackages && config.vqSubpackages.length > 0) {
        var promises = [];
        var p = concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'vqgame/engine/src/code.js'), result);
        })
        promises.push(p);
        for (var i = 0; i < config.vqSubpackages.length; i++) {
            var pkg = config.vqSubpackages[i];
            var gameFile = config.vqSubpackages.length == 1 ? jsOutFile : jsOutFile.replace('.js', `${i + 1}.js`);
            argv.minify && (gameFile = gameFile.replace('.js', '.min.js'));
            p = fs.copy(path.join(config.projectPath, gameFile), path.join(publishPath, "vqgame/engine/src", pkg.root, 'game.js'));
            promises.push(p);
        }
        return Promise.all(promises);
    } else {
        return concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'vqgame/engine/src/code.js'), result);
        })
    }
}

function genTtFile(publishPath, jsOutFile, argv) {
    var concat = require('concat');
    var engineFiles = projectConfig.getModuleFilesByType('engine', argv.minify);
    var extraFile = "libs/laya/laya.wxmini.js";//追加微信mini文件
    if (argv.minify) {
        extraFile = "libs/laya/min/laya.wxmini.min.js";
    }
    engineFiles.push(extraFile);

    var gameFiles = projectConfig.getModuleFilesByType('game', argv.minify);
    var appJS = `app.${argv.target}.js`;
    gameFiles.push(fs.existsSync(appJS) ? appJS : 'app.tt.js');
    // console.log("engineFiles:",engineFiles,"  gameFiles:",gameFiles);
    if (config.ttSubpackages && config.ttSubpackages.length > 0) {
        var promises = [];
        var p = concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'ttgame/code.js'), result);
        })
        promises.push(p);
        for (var i = 0; i < config.ttSubpackages.length; i++) {
            var pkg = config.ttSubpackages[i];
            var gameFile = config.ttSubpackages.length == 1 ? jsOutFile : jsOutFile.replace('.js', `${i + 1}.js`);
            argv.minify && (gameFile = gameFile.replace('.js', '.min.js'));
            p = fs.copy(path.join(config.projectPath, gameFile), path.join(publishPath, 'ttgame', pkg.root, 'game.js'));
            promises.push(p);
        }
        return Promise.all(promises);
    } else {
        return concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'ttgame/code.js'), result);
        })
    }
}

function genOppoFile(publishPath, jsOutFile, argv) {
    var concat = require('concat');
    var engineFiles = projectConfig.getModuleFilesByType('engine', argv.minify);
    var extraFile = "libs/laya/laya.quickgamemini.js";//追加微信mini文件
    if (argv.minify) {
        extraFile = "libs/laya/min/laya.quickgamemini.min.js";
    }
    engineFiles.push(extraFile);

    var gameFiles = projectConfig.getModuleFilesByType('game', argv.minify);

    // var excludePromise = "libs/promise/promise.js";//oppo小游戏，去掉promise.js
    // if (argv.minify) {
    //     excludePromise = "libs/promise/promise.min.js"
    // }
    // let idx = gameFiles.indexOf(excludePromise);
    // if (idx > -1) {
    //     gameFiles.splice(idx, 1);
    // }
    gameFiles.push("libs/ptsdk/opposdk.js")

    var appJS = `app.${argv.target}.js`;
    gameFiles.push(fs.existsSync(appJS) ? appJS : 'app.oppo.js');
    // console.log("engineFiles:",engineFiles,"  gameFiles:",gameFiles);
    if (config.oppoSubpackages && config.oppoSubpackages.length > 0) {
        var promises = [];
        var p = concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'oppogame/code.js'), result);
        })
        promises.push(p);
        for (var i = 0; i < config.oppoSubpackages.length; i++) {
            var pkg = config.oppoSubpackages[i];
            var gameFile = config.oppoSubpackages.length == 1 ? jsOutFile : jsOutFile.replace('.js', `${i + 1}.js`);
            argv.minify && (gameFile = gameFile.replace('.js', '.min.js'));
            p = fs.copy(path.join(config.projectPath, gameFile), path.join(publishPath, 'oppogame', pkg.root, 'game.js'));
            promises.push(p);
        }
        return Promise.all(promises);
    } else {
        return concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'oppogame/code.js'), result);
        })
    }
}

function genXmFile(publishPath, jsOutFile, argv) {
    var concat = require('concat');
    var engineFiles = projectConfig.getModuleFilesByType('engine', argv.minify);
    var extraFile = "libs/laya/laya.xmmini.js";//追加微信mini文件
    if (argv.minify) {
        extraFile = "libs/laya/min/laya.xmmini.min.js";
    }
    engineFiles.push(extraFile);

    var gameFiles = projectConfig.getModuleFilesByType('game', argv.minify);

    gameFiles.push("libs/ptsdk/xmsdk.js")

    var appJS = `app.${argv.target}.js`;
    gameFiles.push(fs.existsSync(appJS) ? appJS : 'app.xm.js');
    // console.log("engineFiles:",engineFiles,"  gameFiles:",gameFiles);
    if (config.xmSubpackages && config.xmSubpackages.length > 0) {
        var promises = [];
        var p = concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'xmgame/code.js'), result);
        })
        promises.push(p);
        for (var i = 0; i < config.xmSubpackages.length; i++) {
            var pkg = config.xmSubpackages[i];
            var gameFile = config.xmSubpackages.length == 1 ? jsOutFile : jsOutFile.replace('.js', `${i + 1}.js`);
            argv.minify && (gameFile = gameFile.replace('.js', '.min.js'));
            p = fs.copy(path.join(config.projectPath, gameFile), path.join(publishPath, 'xmgame', pkg.root, 'main.js'));
            promises.push(p);
        }
        return Promise.all(promises);
    } else {
        return concat([].concat(engineFiles, gameFiles)).then(result => {
            // if (argv.minify) result = result.replace(/\r?\n/g, '');
            return fs.outputFile(path.join(publishPath, 'xmgame/code.js'), result);
        })
    }
}

function replaceEngineFiles(contents, argv) {
    var moduleFiles = projectConfig.getModuleFilesByType('engine', argv.minify);
    if (argv.minify) {
        moduleFiles = moduleFiles.filter(file => file.indexOf('debugtool') < 0);
        var concatFile = 'libs/engine.min.js';
        concat(moduleFiles).then(result => fs.outputFileSync(concatFile, result));

        moduleFiles = [concatFile];
    }
    var version = argv.noVersionTag ? '' : projectConfig.getEngineVersion();
    return replaceJs(contents, '<!--engine-file-start-->', '<!--engine-file-end-->',
        moduleFiles, 4, ['v', version]);
}

function replaceModuleFiles(contents, argv, isNative) {
    let moduleFiles = projectConfig.getModuleFilesByType('game', argv.minify);
    if (argv.minify) {
        if (!isNative) {
            let files = projectConfig.getMinifyFiles('game');
            files.forEach(file => {
                console.log(`minify ${file} ...`);
                let code = UglifyJS.minify(fs.readFileSync(file, 'utf-8')).code;
                fs.outputFileSync(file.replace(/(.min)?.js$/, '.min.js'), code);
            });
        }
        let concatFile = 'libs/pre.min.js';
        concat(moduleFiles).then(result => fs.outputFileSync(concatFile, result));
        moduleFiles = [concatFile];
    }
    if (isNative) {
        let nativeLib = "libs/hgame/hgame-sdk-apple.js"
        moduleFiles = moduleFiles.concat(nativeLib);
        moduleFiles = moduleFiles.concat("libs/ptsdk/iossdk.js");
    } else {
        let workerFiles = projectConfig.getModuleFilesByType('worker', argv.minify);
        moduleFiles = moduleFiles.concat(workerFiles);
        moduleFiles = moduleFiles.concat(workerFiles, "libs/ptsdk/websdk.js");
    }

    let version = argv.noVersionTag ? '' : projectConfig.getGameVersion();
    let params = ['v', version];
    return replaceJs(contents, '<!--module-file-start-->', '<!--module-file-start-->',
        moduleFiles, 4, params);
}

function replaceGameFiles(contents, files, argv, appName) {
    let jsFiles = files.concat();
    appName = appName || 'app.js';
    jsFiles.unshift(appName);
    let version = argv.noVersionTag ? '' : projectConfig.getGameVersion();
    let params = ['v', version];
    if (argv.genTimestamp) {
        params.push('t', argv.timestamp);
    }
    // console.log(params);
    return replaceJs(contents, '<!--game-file-start-->', '<!--game-file-end-->',
        jsFiles, 4, params);
}


function replaceGameNativeFiles(contents, files, argv) {
    let jsFiles = files.concat();
    jsFiles.unshift('app.ios.js');
    let version = argv.noVersionTag ? '' : projectConfig.getGameVersion();
    let params = ['v', version];
    return replaceJs(contents, '<!--game-file-start-->', '<!--game-file-end-->',
        jsFiles, 4, params);
}

function replaceJs(contents, startTag, endTag, jsFiles, indent, params) {
    var spaces = ' '.repeat(indent);
    var files = '\n';
    var versionTag = '';
    for (let i = 0; !!params && i < params.length; i += 2) {
        versionTag += versionTag ? '&' : '?';
        versionTag += params[i] + '=' + params[i + 1];
    }
    jsFiles.forEach(jsFile => {
        jsFile = jsFile.replace(/\\/g, '/');
        files += spaces + `<script src="${jsFile}${versionTag}"></script>\n`;
    });
    files += spaces;
    var re = new RegExp('(' + startTag + ')(.|[\\r\\n])*(' + endTag + ')');
    return contents.replace(re, '$1' + files + '$3');
}

module.exports = {
    genIndex: genIndex,
    genJs: genJs,
    genWxFile: genWxFile,
    genQQFile: genQQFile,
    genBdFile: genBdFile,
    genVqFile: genVqFile,
    genTtFile: genTtFile,
    genOppoFile: genOppoFile,
    genXmFile: genXmFile,
}

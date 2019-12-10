var fs = require('fs-extra');
var path = require('path');
var os = require('os');
var exec = require('child_process').exec;
var config = require('../config');
var PromisePool = require('es6-promise-pool');
var ProgressBar = require('progress');
var imagemin = require('imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var imageminPngquant = require('imagemin-pngquant');
var resmanager = require('../resmanager');
var _ = require('lodash');

const argv = require('yargs').argv

function doPack(name, dir, fileNames) {
    return new Promise((resolve, reject) => {
        var atlasDir = path.basename(config.atlasPath);
        var dataFile = path.join(atlasDir, `${name}.st`);
        var sheetFile = path.join(atlasDir, `${name}.png`);
        var options = [
            '--format egret-spritesheet',
            `--data ${dataFile}`,
            `--sheet ${sheetFile}`,
            '--disable-rotation',
            '--trim-mode None',
            '--max-size 2048',
        ]
        if (process.platform != 'win32')
            fileNames = fileNames.map(fileName => fileName.replace(/\$/g, '\\$'));

        if (argv && argv.ced && argv.ced.length > 0) {
            options.push('--custom-exporters-directory ' + argv.ced);
        }
        var cmd = 'TexturePacker' + ' ' + options.concat(fileNames).join(' ');
        exec(cmd, { cwd: dir, encoding: 'utf8' }, function (err, stdout, stderr) {
            err ? console.error(err) : console.log(stdout);
            resolve();
        });
    })
}

function gensheets() {
    fs.emptyDirSync(path.join(config.projectPath, config.atlasPath));
    var resGroup = resmanager.getResGroup();
    var groups = _.keys(resGroup);
    return new PromisePool(() => {
        if (groups.length == 0)
            return null;
        var group = groups.shift();
        var files = resGroup[group];
        if (files.length == 0)
            return Promise.resolve();
        return doPack(group, config.assetsPath, files);
    }, 10).start().then(() => {
        // 刷新atlasMap
        resmanager.getAtlasMap(true);
    });
}

function doLayaPack() {
    if (!fs.existsSync(config.layaPackerTool)) {
        return Promise.reject('no resource packer tool found');
    }

    fs.emptyDirSync(path.join(config.projectPath, config.atlasPath));
    fs.ensureDirSync(path.join(config.projectPath, config.layaPackerConfig.resDir));

    var blackList = resmanager.getAtlasBlackList().concat(['sheets', 'atlas'])
        .filter(file => path.join(config.projectPath, config.assetsPath, file));

    // 注意这里只能extend第一层级的属性，如需第二层属性覆盖，需要使用deepExtend
    var conf = _.extend({}, config.layaPackerConfig, {
        force: true,
        // includeList: [],
        excludeList: blackList,
        // extrudeList: [],
    });

    var tmpFile = path.join(os.tmpdir(), 'LayaAtlasConfig.json');
    fs.writeFileSync(tmpFile, JSON.stringify(conf, null, 4));
    var cmd = `"${config.layaPackerTool}" --config "${tmpFile}"`;
    return new Promise((resolve, reject) => {
        exec(cmd, { cwd: config.projectPath, encoding: 'utf8' }, function (err, stdout, stderr) {
            err ? console.error(err) : console.log(stdout);
            fs.removeSync(tmpFile);
            resolve();
        });
    })
}

module.exports = config.enableLayaPacker ? doLayaPack : gensheets;

if (require.main == module) {
    module.exports();
}

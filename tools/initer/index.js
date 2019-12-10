var fs = require('fs-extra');
var path = require('path');
var config = require('../config');
var patchEngine = require('./enginepatch');
var shell = require('shelljs');

function initIDE() {
    var src = path.join(config.projectPath, 'tools/initer/templates/ide/app')
    var dest = config.layaAppPath;
    return fs.copy(src, dest);
}

function initWeb() {
    var src = path.join(config.projectPath, 'tools/initer/templates/web')
    var dest = config.projectPath;
    var appJsFile = path.join(config.projectPath, 'app.js');
    var appWxJsFile = path.join(config.projectPath, 'app.wx.js');
    var appWxDevJsFile = path.join(config.projectPath, 'app.wxdev.js');
    var appJsExists = fs.existsSync(appJsFile);
    if (appJsExists)
        fs.copySync(appJsFile, appJsFile + '.tmp');
    if (fs.existsSync(appWxJsFile) && !fs.existsSync(appWxDevJsFile))
        fs.copySync(appWxJsFile, appWxDevJsFile);
    return fs.copy(src, dest).then(() => {
        if (appJsExists) {
            fs.copySync(appJsFile + '.tmp', appJsFile);
            fs.removeSync(appJsFile + '.tmp');
        }
    })
}

function initTexturePacker() {
    var out = shell.which('TexturePacker');
    if (!out) {
        console.warn('TexturePacker is not installed in command line');
        return Promise.resolve();
    }
    var packerPath = out.stdout;
    var exportersPath;
    if (packerPath && fs.existsSync(packerPath)) {
        if (fs.lstatSync(packerPath).isSymbolicLink())
            packerPath = fs.realpathSync(packerPath);
        if (process.platform == 'darwin') {
            exportersPath = path.resolve(path.join(packerPath, '../../Resources/exporters'));
        } else  if (process.platform == 'win32') {
            exportersPath = path.join(path.dirname(packerPath), 'exporters');
        }
    }
    if (exportersPath) {
        let src = path.join(config.projectPath, 'tools/initer/templates/exporters');
        return fs.copy(src, exportersPath);
    }
    return Promise.resolve();
}

function init() {
    return Promise.all([
        initWeb(),
        patchEngine(),
        initTexturePacker(),
        initIDE()
    ]);
}

module.exports = init;

if (require.main == module) {
    init();
}

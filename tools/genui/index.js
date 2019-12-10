var glob = require('glob');
var fs = require('fs-extra');
var path = require('path');
var helper = require('./helper');
var UIFile = require('./UIFile');
var UIFiles = require('./UIFiles');
var dust = require('dustjs-helpers');
var config = require('../config');
var settings = require(path.join(config.projectPath, config.settingsFile));
var resmanager = require('../resmanager');
var _ = require('lodash');
require('./templates');

const template = `
(function () {
    var classMap = $classMap$;

    for (let key in classMap) {
        let space = app[key] || (app[key] = {});
        let temp = classMap[key];
        for (let className in temp) {
            r(space, className, temp[className]);
        }
    }
    function r(space, className, superName) {
        let cls = function(_super) {
            let result = function() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            __extends(result, _super);
            return result;
        }(app.ui[superName]);
        space[className] = cls;
    }
}());`;

function genClassMap(uifiles) {
    let obj = {};
    uifiles.forEach(file => {
        let moduleBase = obj;
        // let moduleBase = obj[file.moduleBase] || (obj[file.moduleBase] = {});
        let moduleName = moduleBase[file.moduleName] || (moduleBase[file.moduleName] = {});
        moduleName[file.className] = file.inherit;
    });
    return obj;
}

function genui(argv) {
    var uifiles = new UIFiles();
    uifiles.parse();

    var viewMap = {};
    _.each(uifiles.parsedFiles, uifile => _.each(uifile.viewMap, (_, view) => viewMap[view] = view));

    let files = uifiles.getSortedFiles();
    let clsMap = genClassMap(files);

    var data = {
        uifiles: files,
        viewMap: viewMap,
        fontMap: resmanager.getFontMap(),
        settings: settings,
        dynview: argv.dynview
    }
    // 渲染导出声明
    dust.render('all', data, function (err, out) {
        if (err) return console.log(err);
        fs.outputFileSync(config.uiCodeFile, out);
    });
    if (argv.dynview) {
        fs.outputFileSync(config.uiRegisterFile, template.replace(/\$classMap\$/, JSON.stringify(clsMap)));
    } else {
        fs.outputFileSync(config.uiRegisterFile, '');
    }

    var viewsFile = path.join(config.resourcePath, 'views.json');
    var obj = {};
    data.uifiles.forEach(uifile => {
        var uiResMap = [];
        _.each(uifile.uiResMap, (value, key) => uiResMap.push({ url: key, type: value }));
        var uiResRef = [];
        _.each(uifile.uiResRef, (value, key) => uiResRef.push({ url: key, refCount: value }));
        let tempObj = {
            uiView: uifile.uiObj,
            uiResMap: uiResMap,
            uiResRef: uiResRef
        };
        // 如果没有对应的内容（空对象不导出）
        if (uifile.hasEvents) {
            tempObj.uiEvent = uifile.events;
        }
        if (uifile.hasOpenKey) {
            tempObj.uiOpen = uifile.openKeys;
        }
        obj[`${uifile.moduleName}.${uifile.className}`] = tempObj;
    });
    fs.outputFileSync(viewsFile, JSON.stringify(obj));

    // require('./msgcreate')();
    // require('./soundcreate')();
    // require('../checkImage')()
    return Promise.resolve()
}

module.exports = genui;

if (require.main == module) {
    var argv = require('yargs')
        .option('dynview', { describe: '是否生成动态加载的界面描述文件', type: "boolean", default: true })
        .argv;
    genui(argv);
}

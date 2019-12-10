var glob = require('glob');
var path = require('path');
var fs = require('fs');
var config = require('../config');
var settings = require(path.join(config.projectPath, config.settingsFile));
var _ = require('lodash');

// 管理所有的资源
function ResManager() {
    this.uiResMap = null;       // 所有UI资源的映射，key为所有可能的文件名
    this.modelResMap = null;    // 所有动态模型或地图资源的映射，key为所有可能的文件名
    this.atlasMap = null;       // atlas资源的映射，key为.st文件名
    this.fontMap = null;        // 字体资源的映射，key为.fnt文件名
    this.resGroup = null;       // 资源分组，用来合图，一个分组合成一个图
}

// 由于合图时，可能会产生新的资源文件，所以增加refresh用于重新刷新
ResManager.prototype.getUIResMap = function(refresh) {
    if (!this.uiResMap || refresh)
        this.uiResMap = collectResMap(false);
    return this.uiResMap;
}

// 由于合图时，可能会产生新的资源文件，所以增加refresh用于重新刷新
ResManager.prototype.getAtlasMap = function(refresh) {
    if (!this.atlasMap || refresh)
        this.atlasMap = config.enableLayaPacker ? collectAtlasMap() : collectSheetsMap();
    return this.atlasMap;
}

ResManager.prototype.getModelResMap = function() {
    if (!this.modelResMap)
        this.modelResMap = collectResMap(true);
    return this.modelResMap;
}

ResManager.prototype.getFontMap = function() {
    if (!this.fontMap)
        this.fontMap = collectFontMap();
    return this.fontMap;
}

ResManager.prototype.getResGroup = function() {
    if (!this.resGroup)
        this.resGroup = collectResGroup(this.getUIResMap());
    return this.resGroup;
}

ResManager.prototype.getAtlasBlackList = function() {
    var dirs = glob.sync('**/*\.d/', {cwd: path.join(config.projectPath, config.assetsPath)});
    var files = glob.sync('**/*\.+(jpg|d.png|e.png|fnt)', {cwd: path.join(config.projectPath, config.assetsPath), nodir: true});
    files = files.filter(file => file.indexOf('.d/') < 0).map(file => file.replace(/\.fnt$/, '.png'));
    return dirs.concat(files);
}

function getGlobPatternPrefix(isModelRes) {
    var prefix = '';
    var modelResPathes = settings.modelResPathes || ['fight.d'];
    if (modelResPathes.length > 0) {
        prefix = '(' + modelResPathes.join('|') + ')/';
        prefix = (isModelRes ? '+' : '!') + prefix;
    }
    return prefix;
}

function collectResMap(isModelRes) {
    var resMap = {};
    var assetsPath = path.join(config.projectPath, config.assetsPath);
    var prefix = getGlobPatternPrefix(isModelRes);
    if (isModelRes && !prefix)
        return resMap;
    var files = glob.sync(prefix + '**/*', {cwd: assetsPath, nodir: true});
    _.each(files, file => resMap[file] = 1);
    return resMap;
}

// 自定义的图集格式
function collectSheetsMap() {
    var atlasMap = {};
    var atlasPath = path.join(config.projectPath, config.atlasPath);
    var files = glob.sync('**/*.st', {cwd: atlasPath});
    _.each(files, file => {
        var content = fs.readFileSync(path.join(atlasPath, file), 'utf8');
        var obj = JSON.parse(content);
        var prefix = path.basename(file, '.st');
        _.keys(obj.frames).map(resName => {
            atlasMap[path.join(prefix, resName + '.png').replace('\\', '/')] = file;
        });
    });
    return atlasMap;
}

// laya原生的图集格式
function collectAtlasMap() {
    var atlasMap = {};
    var atlasPath = path.join(config.projectPath, config.atlasPath);
    var files = glob.sync('**/*.atlas', {cwd: atlasPath});
    _.each(files, file => {
        var content = fs.readFileSync(path.join(atlasPath, file), 'utf8');
        var obj = JSON.parse(content);
        var prefix = obj.meta.prefix || '';
        _.keys(obj.frames).map(resName => {
            atlasMap[path.join(prefix, resName).replace('\\', '/')] = file;
        });
    });
    return atlasMap;
}

function collectFontMap() {
    var fontMap = {};
    var assetsPath = path.join(config.projectPath, config.assetsPath);
    var prefix = getGlobPatternPrefix(false);
    var files = glob.sync(prefix + '**/*.fnt', {cwd: assetsPath});
    _.each(files, file => fontMap[path.basename(file, '.fnt')] = file);
    return fontMap;
}

function collectResGroup(resMap) {
    var resGroup = {};
    var metaFileFlags = {};
    var metaExts = ['.mc', '.json', '.fnt'];
    _.each(resMap, (_, file) => {
        var index = file.lastIndexOf('.');
        if (index > 0 && metaExts.indexOf(file.substr(index)) >= 0) {
            metaFileFlags[file.substr(0, index)] = 1;
        }
    });
    var matcher = /^[^\/]*\/[^\/]*\.png$/  // 获取一级目录的png资源，并排除附属于.json, .mc的资源，以及以.e和.d结尾的文件
    var atlasDir = path.basename(config.atlasPath);
    _.each(resMap, (_, file) => {
        if (!matcher.test(file)) return;
        var group = file.substr(0, file.indexOf('/'));
        if (group.endsWith('.d') || group === atlasDir) return;
        var files = resGroup[group] || (resGroup[group] = []);
        var postfix = file.substr(file.length-6, 2);
        if (!metaFileFlags[file.substr(0, file.length-4)] && postfix != '.e' && postfix != '.d') {
            files.push(file);
        }
    });
    return resGroup;
}

module.exports = new ResManager();

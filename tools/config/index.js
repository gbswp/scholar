var path = require('path');
var fs = require('fs-extra');
var os = require('os');
require('./logger'); // 启用日志颜色

var layaAppPath = process.env.LAYA_IDE_APP_PATH || '/Applications/LayaAirIDE.app/Contents/Resources/app';
var projectPath = path.normalize(path.join(__dirname, '../..'));
var publishPath = process.env.YULONG_PUBLISH_PATH || path.join(projectPath, 'release');
var wxTemplatePath = path.join(projectPath, 'tools/initer/templates/wxgame');
var qqTemplatePath = path.join(projectPath, 'tools/initer/templates/qqgame');
var bdTemplatePath = path.join(projectPath, './tools/initer/templates/bdgame');
var vqTemplatePath = path.join(projectPath, './tools/initer/templates/vqgame');
var ttTemplatePath = path.join(projectPath, './tools/initer/templates/ttgame');
var oppoTemplatePath = path.join(projectPath, './tools/initer/templates/oppogame');
var xmTemplatePath = path.join(projectPath, './tools/initer/templates/xmgame');

var oppoManifestPath = path.join(oppoTemplatePath, 'manifest.json');
var vqManifestPath = path.join(vqTemplatePath, 'src/manifest.json');
var xmManifestPath = path.join(xmTemplatePath, 'manifest.json');

var svnResourcePath = process.env.SVN_RES_PATH || '';

if (!fs.existsSync(layaAppPath))
    throw new Error(`laya ide not found: ${layaAppPath}`);

var config = {
    projectPath: projectPath,
    wxTemplatePath: wxTemplatePath,
    qqTemplatePath: qqTemplatePath,
    bdTemplatePath: bdTemplatePath,
    vqTemplatePath: vqTemplatePath,
    ttTemplatePath: ttTemplatePath,
    oppoTemplatePath: oppoTemplatePath,
    xmTemplatePath: xmTemplatePath,

    oppoManifestPath: oppoManifestPath,
    vqManifestPath: vqManifestPath,
    xmManifestPath: xmManifestPath,

    // projectConfig: null,  // 使用defineProperty定义
    // jsSplitCount: 1, // 使用defineProperty定义
    wxSubpackages: require(path.join(wxTemplatePath, 'game.json')).subpackages,
    qqSubpackages: require(path.join(qqTemplatePath, 'game.json')).subpackages,
    bdSubpackages: require(path.join(bdTemplatePath, 'game.json')).subpackages,
    ttSubpackages: require(path.join(ttTemplatePath, 'game.json')).subpackages,
    oppoSubpackages: require(path.join(oppoTemplatePath, 'manifest.json')).subpackages,
    vqSubpackages: require(path.join(vqTemplatePath, 'src/game.json')).subpackages,
    xmSubpackages: require(path.join(xmTemplatePath, 'manifest.json')).subpackages,

    publishPath: publishPath,
    patchPath: 'patch',
    binPath: 'bin',
    resourcePath: 'laya',
    pagesPath: 'laya/pages',
    assetsPath: 'laya/assets',
    atlasPath: 'laya/assets/sheets',
    packedResPath: 'res',
    packedAssetsPath: 'res/assets',
    storySoundPath: 'laya/assets/music.d/stories',
    codeGenPath: 'src/gen',
    uiCodeFile: 'src/gen/layaUI.max.all.ts',
    uiRegisterFile: 'src/gen/layaUIRegister.js',
    pageStyleFile: 'laya/pageStyles.xml',
    resStyleFile: 'laya/styles.xml',
    settingsFile: 'laya/settings.json',
    layaAppPath: layaAppPath,
    uiCompConfigPath: path.join(layaAppPath, 'out/vs/layaEditor/renders'),
    enableLayaPacker: false,
    layaPackerConfig: null, // 由后续代码赋值
    layaPackerTool: path.join(layaAppPath, 'out/vs/layaEditor/libs/TP/AtlasGenerator' + (os.isWin ? ".exe" : "")),
    svnResourcePath: svnResourcePath,
}

var projectConfig = null;
Object.defineProperty(config, 'projectConfig', {
    'get': function () {
        if (!projectConfig) {
            var ProjectConfig = require('./ProjectConfig');
            projectConfig = new ProjectConfig();
        }
        return projectConfig;
    },
    enumerable: true,
    configurable: false
});

var jsSplitCount = null;
Object.defineProperty(config, 'jsSplitCount', {
    'get': function () {
        if (jsSplitCount == null) {
            var subpackages = this.Subpackages;
            jsSplitCount = (subpackages && subpackages.length > 0) ? subpackages.length : 1;
        }
        return jsSplitCount;
    },
    enumerable: true,
    configurable: false
})

config.layaPackerConfig = {
    inputDir: config.assetsPath,
    outputDir: config.atlasPath,
    resDir: 'bin/res',
    force: false,
    includeList: [],
    excludeList: [],
    extrudeList: [],
    atlas: {
        width: "1024",
        height: "1024",
        powerOfTwo: true,
        textureFormat: "png32"
    },
    sprite: {
        width: "1024",
        height: "1024",
        cropAlpha: true
    }
}

module.exports = config;

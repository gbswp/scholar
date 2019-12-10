var path = require('path');
var fs = require('fs-extra');
var os = require('os');
require('./logger'); // 启用日志颜色

var layaAppPath = process.env.LAYA_IDE_APP_PATH || '/Applications/LayaAirIDE.app/Contents/Resources/app';
var projectPath = path.normalize(path.join(__dirname, '../..'));
var publishPath = process.env.YULONG_PUBLISH_PATH || path.join(projectPath, 'release');
var svnResourcePath = process.env.SVN_RES_PATH || '';

if (!fs.existsSync(layaAppPath))
    throw new Error(`laya ide not found: ${layaAppPath}`);

var config = {
    projectPath: projectPath,

    publishPath: publishPath,
    patchPath: 'patch',
    binPath: 'bin',
    resourcePath: 'laya',
    pagesPath: 'laya/pages',
    assetsPath: 'laya/assets',
    atlasPath: 'laya/assets/sheets',
    packedResPath: 'res',
    packedAssetsPath: 'res/assets',
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

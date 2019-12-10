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
        this.push(genWebHtml("index.html", "index.html", fileNames, argv));

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
    if (!isNative) {
        let workerFiles = projectConfig.getModuleFilesByType('worker', argv.minify);
        moduleFiles = moduleFiles.concat(workerFiles);
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
}

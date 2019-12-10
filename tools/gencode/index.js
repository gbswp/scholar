var glob = require('glob');
var fs = require('fs-extra');
var _ = require('lodash');
var ParserFile = require('./ParserFile');
var config = require('../config');
var protojs = require('./protojs');

function gencode(uipack, pb) {
    pb && protojs(pb);
    var files = glob.sync(`${uipack}/*.ui`, { cwd: config.pagesPath });
    let count = 0;
    _.each(files, file => {
        var parser = new ParserFile();
        if (parser.parse(file)) {
            count++;
        }
    })
    if (count == 0) {
        console.warn(`处理0个文件 请检查文件名后缀 有无Dlg View`)
    }
    return Promise.resolve();
}
module.exports = gencode;

if (require.main == module) {
    var argv = require('yargs')
        .help('h')
        .option('uipack', { describe: '要生成代码的目标ui包' })
        .argv;
    gencode(argv.uipack);
}

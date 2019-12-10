var path = require('path');
var glob = require('glob');
var xlsx = require('xlsx');
var Sheets = require('./Sheets');

function genconf(configPath, outputPath, checkonly) {
    var sheets = new Sheets();
    sheets.load(configPath);
    !checkonly && sheets.generate(outputPath);
}

module.exports = genconf;

if (require.main == module) {
    var argv = require('yargs')
        .help('h')
        .option('path', { alias: 'p', demand: true, describe: '指定配置文件根目录', default: path.join(__dirname, 'configs') })
        .option('out', { alias: 'o', describe: '指定输出目录', default: path.join(__dirname, 'gen') })
        .option('checkonly', { alias: 'co', describe: '是否仅检测', default: false, type: "boolean" })
        .argv;

    genconf(argv.path, argv.out, argv.checkonly);
}

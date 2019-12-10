var fs = require('fs-extra');
var path = require('path');
var glob = require('glob');
var xlsx = require('xlsx');
var Sheet = require('./Sheet');
var SpecialSheet = require('./SpecialSheet');
var dust = require('dustjs-helpers');
var _ = require('lodash');
var check = require('./check');
var config = require('../config')
require('./template');

var dicpath = path.join(__dirname, "schemas.json");
var schemas = fs.readJsonSync(dicpath);

var specialSheets = ["game", "open"];
var predataSheets = ["msgcode"];

function Sheets() {
    this.predatas = {};
    this.datas = {};
}

Sheets.prototype.load = function (configPath) {
    var files = glob.sync('*.xlsx', { cwd: configPath });
    files.forEach(file => {
        var workbook = xlsx.readFile(path.join(configPath, file));
        workbook.SheetNames.forEach(sheetName => {
            let reg = /([\u4E00-\u9FA5]|Sheet|(bak)$)/gi;
            if (!reg.test(sheetName)) {
                var worksheet = workbook.Sheets[sheetName];
                var schema = schemas[sheetName]
                if (!schema) {
                    schemas[sheetName] = schema = new Schema();
                    schema.sheetName = sheetName;
                    schema.className = sheetName.charAt(0).toLocaleUpperCase() + sheetName.substr(1);;
                    schema.exportName = sheetName + "s";
                }
                schema.bookName = file;
                if (specialSheets.indexOf(sheetName) != -1) {
                    var sheet = new SpecialSheet(worksheet, schema);
                    sheet.parse();
                } else {
                    var sheet = new Sheet(worksheet, schema);
                    sheet.parse();
                }
                if (predataSheets.indexOf(sheetName) != -1) {
                    this.predatas[schema.exportName] = sheet.datas;
                } else {
                    this.datas[schema.exportName] = sheet.datas;
                }
            }
        })
    })
    check.checkDataJsonLegal(this.predatas, schemas);//检测predata,json
    check.checkDataJsonLegal(this.datas, schemas);//检测data,json
}

Sheets.prototype.generate = function (outputPath) {
    let data = {
        specials: _.filter(schemas, schema => specialSheets.indexOf(schema.sheetName) != -1),
        schemas: _.filter(schemas, schema => specialSheets.indexOf(schema.sheetName) == -1)
    };
    dust.render('data.d', data, function (err, out) {
        if (err) return console.log(err);
        out = formatStr(out);
        fs.outputFileSync(path.join(outputPath, 'data.d.ts'), out);
    });

    data = { schemas: _.filter(schemas, schema => specialSheets.indexOf(schema.sheetName) == -1) };
    dust.render('data.js', data, function (err, out) {
        if (err) return console.log(err);
        out = formatStr(out);
        fs.outputFileSync(path.join(outputPath, 'data.js'), out);
    });

    //生成解析字典
    let arr = _.transform(schemas, (result, schema, key) => result.push(schema), []);
    data = { schemas: arr };
    dust.render('schemas.json', data, function (err, out) {
        if (err) return console.log(err);
        out = formatStr(out);
        fs.outputFileSync(path.join(__dirname, 'schemas.json'), out);
    });

    //生成data.json  predata.json
    this.generateDataJson(outputPath);

    //生成MsgId.ts
    data = { datas: this.getMsgData() };
    dust.render('msgcode', data, function (err, out) {
        if (err) return console.log(err);
        out = formatStr(out);
        fs.outputFileSync(path.join(config.codeGenPath, 'MsgId.ts'), out);
    });
}

Sheets.prototype.generateDataJson = function (outputPath) {
    let date = new Date(Date.now());
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let version = [year, month, day].join("/") + " " + [hour, minute].join(":");

    arr = _.transform(this.datas, (result, value, key) => result.push({ exportName: key, values: value }), []);
    data = { versionName: "dataVersion", version: version, datas: arr };
    dust.render('data.json', data, function (err, out) {
        if (err) return console.log(err);
        out = formatStr(out);
        fs.outputFileSync(path.join(outputPath, 'data.json'), out);
    });

    arr = _.transform(this.predatas, (result, value, key) => result.push({ exportName: key, values: value }), []);
    data = { versionName: "predataVersion", version: version, datas: arr };
    dust.render('data.json', data, function (err, out) {
        if (err) return console.log(err);
        out = formatStr(out);
        fs.outputFileSync(path.join(outputPath, 'predata.json'), out);
    });
}


Sheets.prototype.getMsgData = function () {
    let datas = this.predatas.msgcodes;
    let schema = schemas.msgcode;
    let keyIndex = schema.fields["code"].index;
    let valueIndex = schema.fields["id"].index;
    let descIndex = schema.fields["text"].index;
    return _.transform(datas, (results, values, index) => {
        let key = values[keyIndex];
        if (key) {
            key = key.toLocaleUpperCase();
            let value = values[valueIndex];
            let desc = values[descIndex];
            desc = desc.replace(/\n/g, "\\n");
            let reg = /\%s|\%d|\%t/g;
            let str = "";
            if (reg.test(desc)) {
                str += "_";
                let result = String(desc).match(reg);
                result.forEach(tag => {
                    tag = tag.replace("%", "");
                    tag = tag.toLocaleUpperCase();
                    str += tag;
                })
            }
            key += str;
            results.push({ key: key, value: value, desc: desc })
        }
    }, []);
}

function formatStr(out) {
    out = out.replace(/\&lt\;/g, "<");
    out = out.replace(/\&gt\;/g, '>');
    out = out.replace(/\&quot\;/g, '"');
    return out;
}



function Schema() {
    this.fields = {};
    this.index = "id";
    this.exportName = "";
    this.exportArray = 0;
    this.sheetName = "";
    this.className = "";
}

module.exports = Sheets;

var parser = require('./parser');
var check = require('./check');
var fs = require('fs-extra');
var _ = require('lodash');
const START_X = 2;
const START_Y = 3;
const X_REF = getXRef();



function Sheet(sheet, schema) {
    this.sheet = sheet;
    this.schema = schema;
    this.datas = {};
}

Sheet.prototype.getValueByType = function (value, type) {
    let parserValue = parser["defaultValue"];
    value = parserValue(value);
    if (type === 'string') return String(value);
    if (type === 'boolean') return Boolean(value);
    if (type === 'number') return Number(value);
}

Sheet.prototype.parse = function () {
    var fieldsInfo = this.getFieldsInfo();
    var sheet = this.sheet;
    this.datas = {};
    for (var j = START_Y + 1; j <= 100000; j++) {
        var cell = sheet[X_REF[START_X] + j];
        if (!cell) break;
        let value = cell.v;
        var cols = [];
        for (var i = START_X; i <= fieldsInfo.maxX; i++) {
            var info = fieldsInfo.fields[i];
            if (!info)
                continue;
            cell = sheet[X_REF[i] + j];
            cols.push(this.getValue(cell, info, X_REF[i] + j));
        }
        this.datas[value] = cols;
    }
}

Sheet.prototype.getValue = function (cell, info, pos) {
    let value = cell && cell.v;
    let parseObj = parser.parser[info.type];
    if (parseObj) {
        let parserValue = parseObj.parserValue;
        if (parserValue) {
            try {
                return parserValue(value)
            } catch (error) {
                console.warn(`文件${this.schema.bookName},表${this.schema.sheetName},字段${info.name},${pos}格 ${error}`);
            }
        } else {
            console.warn(`${info.type}无对应自定义解析方法`);
        }
    }
    return this.getValueByType(value, info.type);
}

Sheet.prototype.getFieldsInfo = function () {
    var maps = { fields: {}, maxX: 0 };
    let oldFields = this.schema.fields;
    let newFields = {};
    for (var i = START_X; i < 10000; i++) {
        let column = X_REF[i];
        let row = START_Y;
        var cell = this.sheet[column + row];
        if (cell == null)
            break;
        let name = cell.v;
        check.checkAttributeNameLegal(name, this.schema.bookName, this.schema.sheetName);
        let info = oldFields[name];
        if (!info) {
            info = new FieldInfo(name);
            this.inferenceType(column, row, info);
        }
        info.index = i - START_X;
        maps.fields[i] = info;
        maps.maxX = i;
        newFields[name] = info;
    }
    cell = this.sheet[X_REF[START_X] + START_Y];
    if (cell && cell.v) {
        this.schema.index = cell.v;
    }
    this.schema.fields = newFields;
    return maps;
}

Sheet.prototype.inferenceType = function (column, row, info) {
    let type = info.type;
    let cell = this.sheet[column + (row + 1)];
    if (cell) {
        switch (cell.t) {
            case "b": type = "boolean"; break;
            case "n": type = "number"; break;
            case "s": type = "string"; break;
        }
    }
    let value = "";
    if (cell && cell.v) value = cell.v;
    let reg = /\;|\,|\|/g
    let isMultiple = reg.test(value);
    if (isMultiple) {
        reg = /\;/g;
        if (reg.test(value)) {
            let str = value.replace(reg, "");
            if (onlyHasNumber(str, /\,/g)) type = "map<number>";
            else type = "map<string>";
        } else {
            reg = /\,|\|/g
            if (onlyHasNumber(value, reg)) type = "number[]";
            else type = "string[]";
        }
    }
    info.type = type;
}

function onlyHasNumber(value, reg) {
    let val = value.replace(reg, "");
    reg = /[^0-9]/g;
    return !reg.test(val);
}

function getXRef() {
    var ref = {};
    for (var i = 0; i < 500; i++) {
        var n = Math.floor(i / 26);
        var r = n == 0 ? '' : String.fromCharCode('A'.charCodeAt(0) + n - 1);
        r += String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        ref[i + 1] = r;
    }
    return ref;
}

function FieldInfo(name) {
    this.index = 0;
    this.name = name;
    this.type = "string";
    this.referenceClass = "";
}

module.exports = Sheet;



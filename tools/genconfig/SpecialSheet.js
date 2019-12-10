var parser = require('./parser');
var fs = require('fs-extra');
var _ = require('lodash');
const START_X = 2;
const START_Y = 3;
const X_REF = getXRef();

function SpecialSheet(sheet, schema) {
    this.sheet = sheet;
    this.schema = schema;
    this.datas = {};
}

SpecialSheet.prototype.parse = function () {
    this.datas = {};
    let newFields = {};
    let oldFields = this.schema.fields;
    let sheet = this.sheet;
    let [keyIndex, valueIndex] = this.getValueIndex();
    for (var j = START_Y + 1; j <= 100000; j++) {
        let cell = sheet[X_REF[keyIndex] + j];
        if (cell == null) continue;
        let keyname = cell.v;
        let info = oldFields[keyname];
        if (!info) {
            info = new FieldInfo(keyname);
            this.inferenceType(X_REF[valueIndex] + j, info);
        }
        info.index = j - START_Y;
        newFields[keyname] = info;
        cell = sheet[X_REF[valueIndex] + j];
        this.datas[keyname] = this.getValue(cell, info, X_REF[valueIndex] + j);
    }
    this.schema.fields = newFields;
}

SpecialSheet.prototype.getValueIndex = function () {
    let schema = this.schema;
    let keyIndex;
    let valueIndex;
    for (var i = START_X; i < 10000; i++) {
        var cell = this.sheet[X_REF[i] + START_Y];
        if (cell == null)
            break;
        let value = cell.v;
        if (value == schema.index) keyIndex = i;
        let valueProp = schema.value ? schema.value : "value";
        if (value == valueProp) valueIndex = i;
    }
    return [keyIndex, valueIndex]
}

SpecialSheet.prototype.getValue = function (cell, info, pos) {
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

SpecialSheet.prototype.getValueByType = function (value, type) {
    let parserValue = parser["defaultValue"];
    value = parserValue(value);
    if (type === 'string') return String(value);
    if (type === 'boolean') return Boolean(value);
    if (type === 'number') return Number(value);
}

SpecialSheet.prototype.inferenceType = function (valueIndex, info) {
    let type = info.type;
    let cell = this.sheet[valueIndex];
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


module.exports = SpecialSheet;

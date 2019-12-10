var glob = require('glob');
var config = require('../config')
var _ = require('lodash');
var fs = require('fs-extra');
var path = require('path');
const START_X = 2;
const START_Y = 3;
const X_REF = getXRef();
var resMap = getResMap();
function getResMap() {
    var map = {};
    var files = glob.sync("**", { cwd: config.assetsPath });
    files.forEach(file => map[file] = true);
    return map;
}
function joinPath(resPath, value, suffix) {
    return path.join(resPath + "", value + "" + suffix).replace(/\\/g, '/');
}
function logInfo(fileName, sheetName, attrName, value, resPath) {
    console.warn(`文件${fileName}.xlsx,表${sheetName}中字段${attrName}为${value}的资源在目录${resPath}中不存在`);
}
function resExists(resPath) {
    return resMap[resPath];
}
function getIndexByFieldName(sheetName, attributeName, schemas) {
    try {
        let schema = schemas[sheetName];
        let fieldInfo = schema.fields[attributeName];
        return fieldInfo.index;
    } catch (error) {
        console.warn(`${sheetName}表，${attributeName}不存在`)
    }
}
function checkSource(data, schemas, fileName, sheets, sheetName, attrName, resPath, suffix, single) {
    if (Boolean(single)) {
        if (!resExists(joinPath(resPath, single, suffix))) {
            logInfo(fileName, sheetName, "key", single, resPath);//一条属性检测
        }
    } else {
        if (!sheets) return;
        let attrIndex = getIndexByFieldName(sheetName, attrName, schemas);
        let keys = Object.keys(sheets);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            let values = sheets[key];
            let value = values[attrIndex];
            if (!resExists(joinPath(resPath, value, suffix))) {
                logInfo(fileName, sheetName, attrName, value, resPath);//属性检测
            }
        }
    }
}

function checkField(data, schemas, dataJson, fileName, sheets, sheetName, attrName, matchName, single) {
    if (Boolean(single)) {
        if (dataJson.indexOf(single + "") < 0) {
            console.warn(`文件${fileName}.xlsx中,表${sheetName}中key为${single}的数据在匹配的${matchName}表中不存在`);
        }
    } else {
        if (!sheets) return;
        let attrIndex = getIndexByFieldName(sheetName, attrName, schemas);
        let keys = Object.keys(sheets);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            let values = sheets[key];
            let value = values[attrIndex];
            // console.log(dataJson.indexOf(value + "") < 0);
            if (dataJson.indexOf(value + "") < 0) {

                console.warn(`文件${fileName}.xlsx中,表${sheetName}中${attrName}为${value}的数据在匹配${matchName}表中不存在`);
            }
        }
    }

}
function getPos(attributeIndex, row) {
    return X_REF[START_X + attributeIndex] + (START_Y + row + 1);
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
module.exports = {
    resExists: resExists,
    getIndexByFieldName: getIndexByFieldName,
    getPos: getPos,
    joinPath: joinPath,
    logInfo: logInfo,
    checkField: checkField,
    checkSource: checkSource
};

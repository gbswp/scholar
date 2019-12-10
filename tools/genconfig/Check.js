var glob = require('glob');
var _ = require('lodash');
var config = require('../config')
var path = require('path');
const START_X = 2;
const START_Y = 3;

var checkers = getCheckers();

function getCheckers() {
    var arr = [];
    var checkPath = path.join(__dirname, "checker")
    var files = glob.sync("*.js", { cwd: checkPath });
    files.forEach(file => {
        let filePath = path.join(__dirname, `checker/${file}`);
        arr.push(require(filePath));
    })
    return arr;
}


function checkAttributeNameLegal(value, bookName, sheetName) {
    let reg = /((^[^a-zA-Z])|[\u4E00-\u9FA5])/g;
    let bool = reg.test(value);
    if (bool) {
        console.warn(`文件${bookName},Sheet:${sheetName},name:${value}属性名不符合法`);
    }
}

function checkDataJsonLegal(data, schemas) {
    checkers.forEach(check => check(data, schemas));
}


module.exports = {
    checkAttributeNameLegal: checkAttributeNameLegal,
    checkDataJsonLegal: checkDataJsonLegal
};

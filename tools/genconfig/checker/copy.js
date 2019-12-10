var _ = require('lodash');
var utils = require('../utils');

function check(data, schemas) {
    let copys = data.copys;//copys表
    if (!copys) return;
    let sheetName = "copy";//表名
    let attributeName = "displayID";
    let attributeIndex = utils.getIndexByFieldName(sheetName, attributeName, schemas);
    let resPath = "fight.d/map/";
    let keys = Object.keys(copys);
    for (let i = 0, len = keys.length; i < len; i++) {
        let key = keys[i];
        let values = copys[key];
        let value = values[attributeIndex];
        if (!utils.resExists(resPath + value)) {
            console.warn(`文件copy.xlsx,表${sheetName}中字段${attributeName}格地图资源${value}在目录${resPath}中不存在`);
        }
    }
}

module.exports = check;


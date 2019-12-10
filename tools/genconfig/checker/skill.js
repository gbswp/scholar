var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var dataJson = Object.keys(Data.skill);
function check(data, schemas) {
    let sheets = data.skills;
    utils.checkField(data,schemas,dataJson,"skill",sheets,"skill","id","skill");
    utils.checkSource(data,schemas,"skill",sheets,"skill","displayID","skill.d/",".png");
}
module.exports = check;


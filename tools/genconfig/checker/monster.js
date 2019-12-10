var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var dataJson = Object.keys(Data.monsters);
function check(data, schemas) {
    let sheets = data.monsters;
    utils.checkSource(data,schemas,"monster",sheets,"monster","displayID","fight.d/monster/","");
}

module.exports = check;


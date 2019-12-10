var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var dataJson = Object.keys(Data.weapons);
function check(data, schemas) {
    let sheets = data.weapons;
    utils.checkSource(data,schemas,"weapon",sheets,"weapon","iconId","weapon.d/icon/",".png");
}
module.exports = check;

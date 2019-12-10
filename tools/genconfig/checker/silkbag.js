var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var dataJson = Object.keys(Data.silkBags);
function check(data,schemas){
    let sheets = data.silkBags;
    utils.checkSource(data,schemas,"silkbag",sheets,"silkbag","id","silkbag.d/chapter/",".png");
    utils.checkSource(data,schemas,"silkbag",sheets,"silkbag","ico","silkbag.d/icon/",".png");
    utils.checkSource(data,schemas,"silkbag",sheets,"silkbag","ico2","silkbag.d/icon2/",".png");
}
module.exports = check;

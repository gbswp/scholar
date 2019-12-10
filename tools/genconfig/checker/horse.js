var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var dataJson = Object.keys(Data.horses);
var dataJson2 = Object.keys(Data.horseUpgrades);
function check(data,schemas){
    let sheets1 = data.horses;
    let sheets2 = data.upgrades;
    utils.checkSource(data,schemas,"horse",sheets1,"horse","ico","horse.d/name/",".png");
    utils.checkSource(data,schemas,"horse",sheets1,"horse","ico2","horse.d/picture/",".png");
    utils.checkSource(data,schemas,"horse",sheets2,"upgrade","level","horse.d/upgrade/",".png");


}
module.exports = check;


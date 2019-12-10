var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var itemId = "id";
var dataJson = Object.keys(Data.rewards);
function check(data, schemas) {
    let sheets1 = data.citys;
    let sheets2 = data.conquers;
    let selName = "id";
    utils.checkSource(data,schemas,"conquer",sheets1,"city","citynameicon","conquer.d/cityname/", ".png");
    utils.checkSource(data,schemas,"conquer",sheets1,"city","icon","conquer.d/cityicon/", ".png");
    utils.checkSource(data,schemas,"conquer",sheets2,"conquer","icon","conquer.d/aimicon/", ".png");
    utils.checkField(data,schemas,dataJson,"conquer",sheets2,"conquer","unlockTaskId","conquer");
}
module.exports = check;


var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var dataJson = Object.keys(Data.medals);
function check(data, schemas) {
    let sheets = data.medals;
    utils.checkSource(data,schemas,"medal",sheets,"medal","iconId","medal.d/title/",".png");
    utils.checkSource(data,schemas,"medal",sheets,"medal","displayId","medal.d/title_effect/",".png");

}
module.exports = check;


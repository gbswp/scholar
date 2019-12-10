var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var dataJson = Object.keys(Data.items);
var type = [];
function check(data, schemas) {
    for(var i=1;type.length<33;i++){
        type.push(i+"");
    }
    let sheets = data.items;
    // utils.checkSource(data,schemas,"item",sheets,"item","iconId","item.d/",".png");

    // utils.checkField(data,schemas,type,"item",sheets,"item","type","item");


}
module.exports = check;
//node tools\genconfig\index.js --p  D:\02design\10.配置表

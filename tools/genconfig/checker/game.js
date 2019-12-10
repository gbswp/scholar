var _ = require('lodash');
var utils = require('../utils');
var Data = require('../../../laya/data.json');
var dataJson = Object.keys(Data.tasks);
function check(data, schemas) {
    let sheets = data.gameConf;
    let sheets2 = data.mainline;
    if (data.gameConf) {
        let dcdMale = data.gameConf.DefaultClothDisplayIdMale;
        let dcdiFemale = data.gameConf.DefaultClothDisplayIdFemale;
        let dwdiMale = data.gameConf.DefaultWeaponDisplayIdMale;
        let dwdiFemale = data.gameConf.DefaultWeaponDisplayIdFemale;
        let fmltId = data.gameConf.FirstMainLineTaskId;
        utils.checkSource("", "", "game", "", "game", "", "fight.d/role/", "", dcdMale);
        utils.checkSource("", "", "game", "", "game", "", "fight.d/role/", "", dcdiFemale);
        utils.checkSource("", "", "game", "", "game", "", "fight.d/weapon/", "", dwdiMale);
        utils.checkSource("", "", "game", "", "game", "", "fight.d/weapon/", "", dwdiFemale);
        utils.checkField(data, schemas, dataJson, "game", sheets2, "game","","task", fmltId);
    }
}
module.exports = check;

/// <reference path="./MsgStyle.ts" />

namespace app {

    const enum MsgType {
        toast = 1,
        msgBox = 2
    }

    interface IMsgType {
        style: any;
        type: MsgType,
        cb?: () => void
    }

    export var msgType = {
        tip: 10, //10	屏幕中央显示字体向上漂浮
        popUp: 11, //11 弹出式字体
        alert: 13, //13	1个按钮提示框	确定
        confirm: 14,  //14	2个按钮提示框	取消、确定
        confirmRecharge: 15, //15	2个按钮提示框	取消、充值	跳转充值界面
        confirmPurchase: 16, //16	2个按钮提示框	取消、购买	购买技能点时弹出的消息
        reload: 17 //17 2个按钮提示框	取消、确定	自动刷新

    };

    var msgBoxMap = {};
    var defaultMsgType = MsgStyle.tips;
    let styleMap: { [id: number]: IMsgType } = {};
    styleMap[msgType.tip] = { style: MsgStyle.tips, type: MsgType.toast };
    styleMap[msgType.popUp] = { style: MsgStyle.popUp, type: MsgType.toast };
    styleMap[msgType.alert] = { style: MsgStyle.alert, type: MsgType.msgBox };
    styleMap[msgType.confirm] = { style: MsgStyle.confirm, type: MsgType.msgBox };
    styleMap[msgType.confirmRecharge] = { style: MsgStyle.confirmRecharge, type: MsgType.msgBox, cb: confirmRechargeHandler };
    styleMap[msgType.confirmPurchase] = { style: MsgStyle.confirmPurchase, type: MsgType.msgBox, };
    styleMap[msgType.reload] = { style: MsgStyle.confirm, type: MsgType.msgBox, cb: relaod };


    export function showMsg(msgId: number | string, args?: any[], style: any = MsgStyle.tips, callback?: (e: ui.DialogResultData) => void) {
        if (typeof msgId == "string") {
            args && (msgId = msgId.format(...args));
            ui.toast(msgId + "", style);
            return;
        }

        let msgcode = Data.getMsg(msgId);
        if (!msgcode) {
            ui.toast(msgId + ": 未知消息");
            console.error(msgId + ": 未知消息")
            return;
        }

        let msgText = msgcode.text;
        args && (msgText = msgText.format(...args));
        let msgType = msgcode.region0;
        let option = styleMap[msgType];
        if (!option || !Object.keys(option).length) {
            ui.toast(msgText, style);
            return;
        }

        if (option.type == MsgType.msgBox) {
            if (msgBoxMap[msgId]) return;
            msgBoxMap[msgId] = 1;
            ui.msgBox(msgText, option.style).then((e: ui.DialogResultData) => {
                (option.cb && e.result == ui.DialogResult.Yes) && option.cb();
                callback && callback(e);
                msgBoxMap[msgId] = 0;
                delete msgBoxMap[msgId];
            })
        } else {
            ui.toast(msgText, option.style);
        }
    }

    function confirmRechargeHandler() {
        //TODO
        //ui.show(app.recharge.RechargeDlg);
    }

    function relaod() {
        // ptsdk.sdk.logout();
    }

    export function getMsg(msgId: number, args?: any[]) {
        let msgcode = Data.getMsg(msgId);
        return msgcode ? msgcode.text.format(...args) : "";
    }
}

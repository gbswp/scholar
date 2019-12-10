namespace app {
    export var fps = 30;
    export var misSecond = 1;
    export var second = 1000 * misSecond;
    export var minute = 60 * second;
    export var hour = 60 * minute;
    export var day = 24 * hour;

    export var wan = 10000;//WAN

    let tipTimeQueue = TimerQueue.create(200);
    let slowTipTime = TimerQueue.create(500);
    let noticeTimeQueue = TimerQueue.create(2000);
    let popUpTimeQueue = TimerQueue.create(10 * second / fps);
    let propUpTimeQueue = TimerQueue.create(10 * second / fps);
    let propUp2TimeQueue = TimerQueue.create(10 * second / fps);
    let getItemTimeQueue = TimerQueue.create(10 * second / fps);

    export interface IMsgItem extends Laya.Component {
        bindTimeLine?: Laya.TimeLine;
    }

    export class MsgStyle {

        //通知类消息样式(MsgStyle.notice) 要求：主要用于在屏幕中央告诉用户一些提示信息
        static notice: ui.ToastOption = {
            labelStyle: {
                fontSize: 18,
            },
            backgroundImageStyle: {

            },
            animator: MsgStyle.noticeAnimation,
            layout: {
                verticalLayoutDiff: 0
            }
        };

        //简单提示类消息（MsgStyle.tips）      要求：屏幕中央淡入，飘至屏幕顶部淡出 服务器报错信息，msgCode提示信息
        static tips: ui.ToastOption = {
            labelStyle: {
                fontSize: 30,
            },
            backgroundImageStyle: {
            },
            queue: tipTimeQueue,
            animator: MsgStyle.tipsAnimation,
        };

        //文字播报类消息样式 与MsgStyle.tips相比字号较小，飘动速度较慢
        static slowTip: ui.ToastOption = {
            labelStyle: {
                fontSize: 18,
            },
            backgroundImageStyle: {
            },
            queue: slowTipTime,
            animator: MsgStyle.slowTipsAnimation,
        };

        static expUp: ui.ToastOption = {
            labelStyle: {
                fontSize: 30,
                color: 0x00e91b,
                stroke: 1,
                strokeColor: 0x383838,
            },
            animator: MsgStyle.expUpAnimation,
        };

        //弹出式消息样式（MsgStyle.popUp）放大后缩放到原尺寸出现，停留一段时间，淡出  主要用于少数msgCode，较少使用
        static popUp: ui.ToastOption = {
            labelStyle: {
                color: 0xcc0505,
                fontSize: 24,
            },
            backgroundImageStyle: {
            },
            queue: popUpTimeQueue,
            animator: MsgStyle.getItemAnimation,
        };


        //短距离漂浮消息样式  在指定位置冒出（放大1.5倍），停留一段时间后，向上移动一小段位移后
        static tipUp: ui.ToastOption = {
            labelStyle: {
                color: 0xd1290f,
                fontSize: 24,
            },
            backgroundImageStyle: {
            },
            queue: propUpTimeQueue,
            animator: MsgStyle.tipPropUpAnimation,
        };

        static tipUp2: ui.ToastOption = {
            labelStyle: {
                color: 0xd1290f,
                fontSize: 24,
            },
            backgroundImageStyle: {

            },
            queue: propUp2TimeQueue,
            animator: MsgStyle.tip2PropUpAnimation,
        };

        //展示类消息样式 放大后缩放到原尺寸出现，停留一段时间，向上移动一段距离并淡出，消失  角色属性变化消息
        static propUp: ui.ToastOption = {
            labelStyle: {
                color: 0x29fe1f,
                fontSize: 24,
            },
            backgroundImageStyle: {

            },
            queue: propUpTimeQueue,
            animator: MsgStyle.propUpAnimation,
        };

        //获得物品消息样式 放大后缩放到原尺寸出现，停留一段时间，向上移动一段距离并淡出  获得物品时，弹出
        static getItem: ui.ToastOption = {
            labelStyle: {
                color: 0xfefad9,
                fontSize: 20,
            },
            backgroundImageStyle: {

            },
            queue: getItemTimeQueue,
            animator: MsgStyle.getItemAnimation
        };

        static alert: ui.MessageBoxOption = {
            buttons: ui.MessageButton.Yes,
            // skin: wgt.MsgBoxUI
        }
        static confirm: ui.MessageBoxOption = {
            buttons: ui.MessageButton.YesNo,
            // skin: wgt.MsgBoxUI
        }
        static confirmRecharge: ui.MessageBoxOption = {
            buttons: ui.MessageButton.YesNo,
            // skin: wgt.MsgBoxUI
        }
        static confirmPurchase: ui.MessageBoxOption = {
            buttons: ui.MessageButton.YesNo,
            // skin: wgt.MsgBoxUI
        }

        static confirmCheck: ui.MessageBoxOption = {
            buttons: ui.MessageButton.YesNo,
            // skin: wgt.MsgBoxDiamondUI,
        }

        static timeoutAlert: ui.MessageBoxOption = {
            buttons: ui.MessageButton.YesNo,
            // skin: wgt.MsgBoxUI,
            buttonSkins: [{ label: "重新登录" }, { label: "尝试重连" }],
        }

        private static noticeAnimation(obj: IMsgItem, finishedCb: () => void) {
            if (!obj || obj.destroyed) return;
            let timeLine = new Laya.TimeLine();
            obj.alpha = 0;
            timeLine.to(obj, { alpha: 1 }, 300);
            timeLine.to(obj, { alpha: 0 }, 200, null, 1500)
            timeLine.on(Laya.Event.COMPLETE, this, () => {
                finishedCb();
                obj.bindTimeLine = null;
                timeLine.destroy();
            });
            timeLine.play(0);
            obj.bindTimeLine = timeLine;
        }

        private static slowTipsAnimation(obj: IMsgItem, finishedCb: () => void) {
            if (!obj || obj.destroyed) return;
            let duration = 3.0 * second;
            obj.alpha = 0;
            let timeLine = new Laya.TimeLine();
            timeLine.to(obj, { alpha: 1 }, duration * 0.2);
            timeLine.to(obj, { y: 100 }, duration);
            timeLine.to(obj, { alpha: 0 }, duration * 0.2, null, duration * 0.8);
            timeLine.on(Laya.Event.COMPLETE, this, () => {
                finishedCb();
                obj.bindTimeLine = null;
                timeLine.destroy();
            });
            timeLine.play(0);
            obj.bindTimeLine = timeLine;
        }

        private static tipsAnimation(obj: IMsgItem, finishedCb: () => void) {
            if (!obj || obj.destroyed) return;
            let duration = 2.0 * second;
            obj.alpha = 1;
            let timeLine = new Laya.TimeLine();
            timeLine.to(obj, { y: obj.y - 30, alpha: 0 }, 800, null, 1500);
            timeLine.on(Laya.Event.COMPLETE, this, () => {
                finishedCb();
                obj.bindTimeLine = null;
                timeLine.destroy();
            });
            timeLine.play(0);
            obj.bindTimeLine = timeLine;
        }

        private static expUpAnimation(obj: IMsgItem, finishedCb: () => void) {
            if (!obj || obj.destroyed) return;
            obj.scaleX = 0.5;
            obj.scaleY = 0.5;
            let timeLine = new Laya.TimeLine();
            timeLine.to(obj, { scaleX: 1, scaleY: 1 }, 0.2 * second, Laya.Ease.backOut)
            timeLine.to(obj, { alpha: 0 }, 0.5 * second, null, second);
            timeLine.to(obj, { y: -100 }, 0.5 * second);
            timeLine.on(Laya.Event.COMPLETE, this, () => {
                finishedCb();
                obj.bindTimeLine = null;
                timeLine.destroy();
            });
            timeLine.play(0);
            obj.bindTimeLine = timeLine;
        }

        private static getItemAnimation(obj: IMsgItem, finishedCb: () => void) {
            if (!obj || obj.destroyed) return;
            let duration = second / fps;
            obj.scaleX = 1.5;
            obj.scaleY = 1.5;
            let y = obj.y;
            let timeLine = new Laya.TimeLine();
            timeLine.to(obj, { scaleX: 1, scaleY: 1 }, 6 * duration)
            timeLine.to(obj, { alpha: 0, y: y - 6 }, duration * 6, null, duration * 10);
            timeLine.on(Laya.Event.COMPLETE, this, () => {
                finishedCb();
                obj.bindTimeLine = null;
                timeLine.destroy();
            });
            timeLine.play(0);
            obj.bindTimeLine = timeLine;
        }

        private static propUpAnimation(obj: IMsgItem, finishedCb: () => void) {
            if (!obj || obj.destroyed) return;
            let duration = second / fps;
            obj.scaleX = 1.5;
            obj.scaleY = 1.5;
            let y = obj.y;
            let timeLine = new Laya.TimeLine();
            timeLine.to(obj, { scaleX: 1, scaleY: 1 }, 6 * duration)
            timeLine.to(obj, { alpha: 0, y: y - 6 }, duration * 6, null, duration * 25);
            timeLine.on(Laya.Event.COMPLETE, this, () => {
                finishedCb();
                obj.bindTimeLine = null;
                timeLine.destroy();
            });
            timeLine.play(0);
            obj.bindTimeLine = timeLine;
        }

        private static tipPropUpAnimation(obj: IMsgItem, finishedCb: () => void) {
            if (!obj || obj.destroyed) return;
            let duration = second / fps;
            obj.scaleX = 1;
            obj.scaleY = 1;
            let y = obj.y;
            let timeLine = new Laya.TimeLine();
            timeLine.to(obj, { scaleX: 1.5, scaleY: 1.5 }, 6 * duration);
            timeLine.to(obj, { alpha: 0, y: y - 15 }, duration * 15, null, duration * 25);
            timeLine.on(Laya.Event.COMPLETE, this, () => {
                finishedCb();
                obj.bindTimeLine = null;
                timeLine.destroy();
            });
            timeLine.play(0);
            obj.bindTimeLine = timeLine;
        }

        private static tip2PropUpAnimation(obj: IMsgItem, finishedCb: () => void) {
            if (!obj || obj.destroyed) return;
            let duration = second / fps;
            obj.scaleX = 1;
            obj.scaleY = 1;
            let y = obj.y;
            let timeLine = new Laya.TimeLine();
            timeLine.to(obj, { scaleX: 1.5, scaleY: 1.5 }, 6 * duration);
            timeLine.to(obj, { alpha: 0, y: y - 15 }, duration * 15, null, duration * 40);
            timeLine.on(Laya.Event.COMPLETE, this, () => {
                finishedCb();
                obj.bindTimeLine = null;
                timeLine.destroy();
            });
            timeLine.play(0);
            obj.bindTimeLine = timeLine;
        }
    }
}

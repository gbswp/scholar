namespace app {
    export class OperateLimit {
        private _timeMap: { [key: string]: boolean } = {};
        constructor() {

        }

        checkLimit(key: string | number, time = 200, showTip = false) {
            if (this._timeMap[key]) {
                if (showTip) {
                    showMsg(t.OPERATE_TOOFAST);
                }
                return false;
            }
            this._timeMap[key] = true;
            Laya.timer.once(time, this, this.onTimeDelay, [key], false);
            return true;
        }

        protected onTimeDelay(key: string | number) {
            delete this._timeMap[key];
        }
    }

    export var oplimit = new OperateLimit();
    export function checkLimit(key: string | number, time = 200, showTip = false) {
        return oplimit.checkLimit(key, time, showTip);
    }
}

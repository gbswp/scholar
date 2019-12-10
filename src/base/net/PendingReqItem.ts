namespace app.net {
    export class PendingReqItem implements IPendIngReqItem {
        loadingCloser: LoadingCloser;
        finished: boolean = false;
        defaultTimeOut = 20000;//默认10秒
        resolve: any;
        reject: any;
        onClearHandler: Laya.Handler;
        opt: ApiRequestOption;
        transId: number = 0;
        private _timeOutNum = 0;//超时次数
        private timeoutMax = 5;

        name: string;

        static create() {
            return Pool.get(Pool.PendingReqItem, PendingReqItem);
        }

        /**超时时长 */
        get timeout() {
            let timeout = this.defaultTimeOut;
            let opt = this.opt;
            (opt && opt.timeout) && (timeout = opt.timeout);
            return timeout;
        }

        open(resolve: any, reject: any, onClearHandler: Laya.Handler, opt?: ApiRequestOption) {
            this.resolve = resolve;
            this.reject = reject;
            this.onClearHandler = onClearHandler;
            this.opt = opt;

            if (!opt || (!opt.noLoading && !opt.silent)) this.showLoading();

            ws.sockeTimeoutEnable && Laya.timer.once(this.timeout, this, this.onTimeOut)
        }

        clear() {
            Laya.timer.clear(this, this.onTimeOut);
            this.finished = true;
            this._timeOutNum = 0;
            this.loadingCloser && this.loadingCloser();
            this.onClearHandler && this.onClearHandler.run();
            showLoadingQueue.remove(this);

            Pool.put(Pool.PendingReqItem, this);
        }

        protected showLoading() {
            showLoadingQueue.add(this, item => {
                if (!item.finished) {
                    item.loadingCloser = ui.showLoading(ui.LOADING_TYPE.SOCKET);
                }
            });
        }

        protected onTimeOut() {
            let error: ErrorMsg = {
                code: ErrorCode.SOCKET_TIMEOUT, message: this.name + "请求超时!transId:" + this.transId, handled: false
            }
            console.error(error);
            sendLoog(`proto:${error.message}`);

            if (!this.opt || !this.opt.popTimeOut) {
                this.reject(error);
                this.clear();
            }
            else ws.onSocketTimeOut();
        }

        resetTimeOut() {
            if (this._timeOutNum >= this.timeoutMax) {
                // manager.logout();
                return;
            }
            this._timeOutNum++;
            Laya.timer.clear(this, this.onTimeOut);
            ws.sockeTimeoutEnable && Laya.timer.once(this.timeout, this, this.onTimeOut)
        }

        reset() {
            this.onClearHandler.recover();
            this.onClearHandler = null;

            this.loadingCloser = null;
            this.resolve = null;
            this.reject = null;

            this.finished = false;
            this.name = "";
            this._timeOutNum = 0;
            this.transId = 0;
            Laya.timer.clearAll(this);
        }

    }
}

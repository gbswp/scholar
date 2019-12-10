/// <reference path="../utils/TimerQueue.ts" />
/// <reference path="../utils/Pool.ts" />
namespace app.net {

    interface RequestInfo {
        url: string;
        data: any;
        method: string;
        responseType: string;
        headers: any[];
    }

    interface ShowLoadingItem {
        loadingCloser?: LoadingCloser;
        finished: boolean;
    }
    const showLoadingQueue = TimerQueue.create<ShowLoadingItem>(200);

    // 参考Laya.HttpRequest，去除progress处理，同时支持HttpRequestOption中的选项
    export class HttpRequest extends Laya.EventDispatcher {

        private _http: XMLHttpRequest = new Laya.Browser['window'].XMLHttpRequest();
        private _requestInfo: RequestInfo;
        private _responseType: string;
        private _data: any;

        private _showLoadingItem: ShowLoadingItem;
        private _opt: HttpRequestOption;
        private _retryTimes: number;

        static create(opt?: HttpRequestOption): HttpRequest {
            let http = Pool.get(Pool.HttpRequest, HttpRequest);
            if (!opt.noLoading && !opt.silent && param.loadingImpl) {
                http._showLoadingItem = { finished: false };
                showLoadingQueue.add(http._showLoadingItem, item => {
                    if (!item.finished)
                        item.loadingCloser = param.loadingImpl();
                })
            }
            http._retryTimes = opt.retryTimes || 0;
            http._opt = opt || emptyObject;
            return http;
        }

        get status(): number {
            return this._http.status;
        }

        send(url: string, data: any = null, method: string = "get", responseType: string = "text", headers: any[] = null): void {
            this._requestInfo = { url, data, method, responseType, headers };
            this.doSend();
        }

        private doSend() {
            let { url, data, method, responseType, headers } = this._requestInfo;
            this._responseType = responseType;
            this._data = null;
            let http: XMLHttpRequest = this._http;
            if (method == "get")
                url += "?" + data;
            http.open(method, url, true);
            if (headers) {
                for (let i = 0; i < headers.length; i++) {
                    http.setRequestHeader(headers[i++], headers[i]);
                }
            } else {
                if (!data || typeof data === 'string') http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                else http.setRequestHeader("Content-Type", "application/json");
            }
            http.responseType = responseType !== "arraybuffer" ? "text" : "arraybuffer";
            http.onerror = e => this.onError(e);
            http.onload = e => this.onLoad(e);
            (method == "get") ? http.send() : http.send(data);
        }

        protected onLoad(e: Event): void {
            let http = this._http;
            let status = http.status !== undefined ? http.status : 200;
            if (status === 200 || status === 204 || status === 266 || status === 0) {
                this.complete();
            } else {
                this.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
            }
        }

        protected onError(e: ErrorEvent | Event): void {
            if (this._retryTimes > 0) {
                this._retryTimes--;
                Laya.timer.loop(this._opt.retryInterval || 1000, this, this.doSend);
                return;
            }
            this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
        }

        protected complete() {
            this.clear();
            let flag = true;
            try {
                let http = this._http;
                if (this._responseType === "json") {
                    this._data = JSON.parse(http.responseText);
                } else if (this._responseType === "xml") {
                    this._data = Laya.Utils.parseXMLFromString(http.responseText);
                } else {
                    this._data = http.response || http.responseText;
                }
            } catch (e) {
                flag = false;
                this.error(e.message);
            }
            flag && this.event(Laya.Event.COMPLETE, Array.isArray(this._data) ? [this._data] : this._data);
        }

        protected error(message: string) {
            this.clear();
            this.event(Laya.Event.ERROR, message);
        }

        protected clear(): void {
            let http = this._http;
            let showLoadingItem = this._showLoadingItem;
            if (showLoadingItem) {
                showLoadingItem.finished = true;
                if (showLoadingItem.loadingCloser) {
                    showLoadingItem.loadingCloser();
                }
            }
            this._showLoadingItem = null;
            http.onerror = http.onload = null;
        }

        reset() {
            this._requestInfo = null;
            this._responseType = null;
            this._data = null;

            this._showLoadingItem = null;
            this._opt = null;
            this._retryTimes = 0;
        }

        release() {
            Pool.put(Pool.HttpRequest, this);
        }
    }
}

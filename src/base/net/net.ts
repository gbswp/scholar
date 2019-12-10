/// <reference path="./WebSocket.ts" />
namespace app.net {
    export function init(opt?: InitParam) {
        opt = opt || emptyObject;
        for (let key in opt) {
            param[key] = opt[key];
        }
    }

    export function setBaseUrl(value: string) {
        param.baseUrl = value;
    }

    export function setSessionId(value: string) {
        param.sessionId = value;
    }

    export function requestApi<T>(url: string, c: { new(): T }, param?: pb.ProtoBufModel, opt?: HttpRequestOption): Promise<T> {
        opt = opt || emptyObject;

        return new Promise((resolve: any, reject: any) => {
            let http = HttpRequest.create(opt);

            let loadingCloser: LoadingCloser;
            if (!opt.noLoading && !opt.silent)
                loadingCloser = net.param.loadingImpl();

            http.on(Laya.Event.COMPLETE, null, complete);
            http.on(Laya.Event.ERROR, null, error);

            let data = param ? encodeURIComponent((param as any).encode().toBase64()) : '';
            http.send(url, data, 'post', 'arraybuffer');

            function complete(data: any) {
                let status = http.status;

                if (loadingCloser) loadingCloser();

                if (status == 266) {
                    let msg = (pb as any).Error.decode(data, "base64");
                    error(msg.message, msg.code);
                } else {
                    let msg = (pb as any)[(c as any).$type.name].decode(data, "base64");
                    resolve(msg);
                }
                http.release();
            }

            function error(message: string, code: number = -1) {
                if (loadingCloser) loadingCloser();

                let err = { code: code, message: message, handled: false }
                reject();
                if (!err.handled && net.param.errorSpawnImpl && !opt.silent) {
                    net.param.errorSpawnImpl(code, message);
                }
                http.release();
            }
        })
    }

    export function request<T>(url: string, method: string = "get", params?: Object, opt?: HttpRequestOption): Promise<T> {
        opt = opt || emptyObject;
        return new Promise((resolve: any, reject: any) => {
            let http = HttpRequest.create(opt);

            let errorSpawn = net.param.errorSpawnImpl;
            let loadingCloser: LoadingCloser;
            if (!opt.noLoading && !opt.silent)
                loadingCloser = net.param.loadingImpl();

            let retryTimes = opt.retryTimes || 0;
            let retryInterval = retryTimes > 0 ? (opt.retryInterval || 1000) : 0;

            let param = utils.encodeURIParam(params);
            sendData(url, param);

            function sendData(baseUrl: string, param: string) {
                http.on(Laya.Event.COMPLETE, null, complete);
                http.on(Laya.Event.ERROR, null, () => { error(-1, '网络异常', true) });

                http.send(baseUrl, param, method, "text");
            }

            function complete(data: any) {
                let status = http.status;

                if (loadingCloser) loadingCloser();

                if (status == 200) {
                    let resp = JSON.parse(data);
                    resolve(resp);
                } else {
                    reject();
                }
                http.release();
            }

            function error(code: number, errMsg: string, retry?: boolean) {
                if (retry && retryTimes > 0) {
                    setTimeout(() => sendData(url, param), retryInterval);
                    retryTimes--;
                    return;
                }
                if (loadingCloser) loadingCloser();
                let err = { code: code, message: errMsg, handled: false }
                reject();
                if (!err.handled && errorSpawn && !opt.silent) {
                    errorSpawn(code, errMsg);
                }
                http.release();
            }
        });
    }

    export let ws = new WebSocket();
    var timeIndex: number;

    export function connectSocket(addr: string, handler: any): Promise<void> {
        if (ws.isConnected && addr == ws.addr) return Promise.resolve(void 0);
        ws.connect(addr);
        ws.messageHandler = handler;

        clearTimeout(timeIndex);
        return new Promise<void>((resolve: any, reject: any) => {
            ws.once(Laya.Event.OPEN, null, () => {
                clearTimeout(timeIndex);
                resolve(void (0));
            });

            ws.once(Laya.Event.CLOSE, null, () => {
                clearTimeout(timeIndex);
                reject("socket关闭");
            });
            ws.once(Laya.Event.ERROR, null, (err: any) => {
                clearTimeout(timeIndex);
                reject(err || "socket错误");
            });

            timeIndex = setTimeout(() => {
                let error = <ErrorMsg>{ code: ErrorCode.SOCKET_CONNECT_TIMEOUT, message: "服务器连接超时" };
                console.error(error);
                ws.disconnect(false);
                reject(error)
            }, 60000)
        })
    }

    export function send<T extends pb.ProtoBufModel>(data: T) {
        ws.send(data);
    }

    export function sendAndWait<T extends pb.ProtoBufModel, U extends pb.ProtoBufModel>(data: T, resp: { new(): U }, opt?: ApiRequestOption): Promise<U> {
        return ws.sendAndWait(data, resp, opt);
    }


    /**上报日志*/
    export var sendLoog: (loog: string) => void;
}
let net = app.net;

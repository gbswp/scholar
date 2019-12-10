/// <reference path="../utils/TimerQueue.ts" />
namespace app.net {

    export type PacketHandler = (data: any, transId: number) => void;

    export interface LoadingCloser {
        (): void;
    }

    export interface InitParam {
        baseUrl?: string;                                           // http请求时的baseUrl
        enableEncrypt?: boolean;                                    // http是否启用加密
        errorSpawnImpl?: (code: number, errMsg: string) => void;    // 出错弹出消息的实现
        loadingImpl?: () => LoadingCloser;                          // 加载进度的实现
        unknownPacketHandler?: PacketHandler;                       // 处理未知的socket协议
    };

    export interface Param extends InitParam {
        sessionId?: string;
    }

    export interface HttpRequestOption {
        noLoading?: boolean;        // 设置为true时，没有loading界面
        timeout?: number;           // 超时时间，以毫秒为单位，默认10000ms，
        retryTimes?: number;        // 重试次数，默认不重试，最多重试5ci
        retryInterval?: number;     // 重试时间间隔，默认1秒
        silent?: boolean;           // 设置为true时，既没有loading界面，也没有出错弹出信息
    }

    export interface IPendIngReqItem {
        loadingCloser?: LoadingCloser;
        finished: boolean;
    }

    export interface ApiRequestOption {
        noLoading?: boolean; // 设置为true时，没有loading界面
        timeout?: number; // 超时时间，以毫秒为单位，默认10000ms，
        retryTimes?: number; // 重试次数，默认不重试，最多重试5ci
        retryInterval?: number; // 重试时间间隔，默认1秒
        silent?: boolean; // 设置为true时，既没有loading界面，也没有出错弹出信息
        popTimeOut?: boolean;//弹出超时提示
    }

    export const emptyObject = {};
    export let param: Param = {};
    export let baseUrl: string = '';
    export let sessionId: string = '';
    export const showLoadingQueue = TimerQueue.create<IPendIngReqItem>(1000);

    let encryptKey = (function () {
        let key = 'aMLa3WaH';
        let result: any[] = [];
        let keyLen = key.length;
        for (let i = 0; i < keyLen; i++) {
            result.push(key.charCodeAt(i));
        }
        return result;
    })()
    function encrypt(text: string): string {
        return text;
    }

    export function encodeURIParam(param: Object): string {
        let strs = [];
        for (let key in param) {
            strs.push(key + '=' + encodeURIComponent(param[key]));
        }
        return strs.join('&');
    }
}

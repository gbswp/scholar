
namespace Bridge {
    /**
     * 注册方法监听java传递过来的消息
     */
    export function registerCallJavacript() {
        // buyu.register(this, Bridge.receive);

        // Bridge.sendToJava('BridgeInited', { type: 'BridgeInited' });


    }

    export function sendToJava(type:any, data: Object) {
        // console.log('[sendToJava] ' + type)
        // console.log(data)
        // return buyu.sendToJava(type, data);
    }

    export function sendToJavaToCallProgress(type:any, data: _updateApkParam, callbackfunction: Function) {
        // console.log('[sendToJava] ' + type)
        // console.log(data)
        // return buyu.sendToJavaToCallProgress(type, data, callbackfunction);
    }

    /**
     *
     * @param type 类型
     * @param data 数据
     */
    export function receive(type: any, data: any) {
        console.log('[receiveJava] ' + type);

        console.log("receiveJava:" + data)

        switch (type) {
            case 'weixinCode':
                // g_EventDis.dispatchEvent('weixin_loginSuccess', data);

            // case 'weixin_autoLogin'://本地缓存有code自动登录
            //     g_EventDis.dispatchEvent('weixin_loginSuccess', data)

            case '100'://用户中心初始化成功,初始化成功后才可调用登录接口

                break;
            case 'JavaLog':
                console.log('Java日志：')
                console.log(data)
                console.log()
                break;
            case '101'://用户中心初始化失败,此时不要调用登录、支付接口，需重新调用初始化

                break;
            case '102'://登录成功,msg返回用户信息，具体参数详见下表
                // data.pid;//集成服务平台用户 ID
                // data.gid;//第三方返回的用户 ID(原始的)
                // data.uid;//第三方返回的用户 ID(加了平台名前缀)
                // data.uname;//第三方返回用户名
                // data.session;//集成服务平台产生会话标识
                // data.platform_id;//平台ID
                // data.platform_name;//平台名称
                // data.thirdparty;//三方平台名称

                // g_EventDis.dispatchEvent('ymnsdk_loginSuccess', data)
                break;
            case '105'://登录失败,可重新调用登录接口

                break;
            case '106'://用户取消登录,可重新调用登录接口

                break;
            case '107'://登出成功,游戏返回用户登录界面，需重新调用登录接口

                break;
            case '115'://切换账号成功,游戏返回用户登录界面，需重新调用登录接口

                break;
            case '108'://退出登录失败

                break;
            case '116'://切换账号失败

                break;
            case '205'://支付初始化成功,可调用支付接口

                break;
            case '206'://支付初始化失败,可重新调用初始化接口

                break;
            case '200'://支付成功

                break;
            case '201'://支付失败

                break;
            case '202'://取消支付

                break;
            case '207'://正在支付,游戏可进行相应提示

                break;
            case '112'://用户选择退出应用程序回调,可在此释放资源并退出游戏

                break;

            default:
                break;
        }
    }

    export function closeGame() {
        Bridge.sendToJava('QUITGAME', {});
    }
}

// export default Bridge;

interface _updateApkParam {

    /**
     * apk下载链接
     */
    apkUrl: String;

    /**
     * apk保存名称
     */
    apkName: String;
}

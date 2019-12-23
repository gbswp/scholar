/** @class
* JavaScript的命名空间.
* @abstract
*/
var buyu = window.buyu || {};

/**
 * 发送消息给Java端
 * @param {*} type 
 * @param {*} data 
 */
buyu.sendToJava = function (type, data) {
    let result = dsBridge.call("callJavaAsyn", { type: type, data: data })

    console.log("[dsbridge]收到Java传过来的code：" + result)

    return result;
}

/**
 * 发送消息给Java端
 * @param {*} type 
 * @param {*} data 
 */
buyu.sendToJavaToCallProgress = function (type, data, callbackfunction) {
    let result = dsBridge.call("callProgress", { type: type, data: data }, callbackfunction)

    console.log("[dsbridge]收到Java传过来的code：" + result)

    return result;
}

buyu.register = function (caller, callBack) {
    //注册 javascript API 
    dsBridge.register('callJavacript', function (type, data) {
        callBack.apply(caller, [type, data])
    })
}


buyu.getNetworkType = function () {
    var ua = navigator.userAgent;
    var networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other';
    networkStr = networkStr.toLowerCase().replace('nettype/', '');
    // var networkType;
    // switch(networkStr) {
    //     case 'wifi':
    //         networkType = 'wifi';
    //         break;
    //     case '4g':
    //         networkType = '4g';
    //         break;
    //     case '3g':
    //         networkType = '3g';
    //         break;
    //     case '3gnet':
    //         networkType = '3g';
    //         break;
    //     case '2g':
    //         networkType = '2g';
    //         break;
    //     default:
    //         networkType = 'other';
    // }
    return networkStr;
}

buyu.getNetworkInfo = function () {
    return navigator.connection;
}

buyu.getBrowser = function (key) {
    var ua = navigator.userAgent.toLowerCase(),
        s,
        name = '',
        ver = 0;
    //探测浏览器
    (s = ua.match(/msie ([\d.]+)/)) ? _set("ie", _toFixedVersion(s[1])) :
        (s = ua.match(/firefox\/([\d.]+)/)) ? _set("firefox", _toFixedVersion(s[1])) :
            (s = ua.match(/chrome\/([\d.]+)/)) ? _set("chrome", _toFixedVersion(s[1])) :
                (s = ua.match(/opera.([\d.]+)/)) ? _set("opera", _toFixedVersion(s[1])) :
                    (s = ua.match(/version\/([\d.]+).*safari/)) ? _set("safari", _toFixedVersion(s[1])) : 0;

    function _toFixedVersion(ver, floatLength) {
        ver = ('' + ver).replace(/_/g, '.');
        floatLength = floatLength || 1;
        ver = String(ver).split('.');
        ver = ver[0] + '.' + (ver[1] || '0');
        ver = Number(ver).toFixed(floatLength);
        return ver;
    }
    function _set(bname, bver) {
        name = bname;
        ver = bver;
    }
    return (key == 'n' ? name : (key == 'v' ? ver : name + ver));
};






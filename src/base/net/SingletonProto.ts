namespace app.net {
    let protoDic = {};
    // 对应getSignletonProto是对应创建proto单例数据，可以根据对应className来创建对应单例实例
    // 对应clearSignletonProto是对应创建的proto单例数据进行数据的清理回收，需要有以下注意点：
    // 1.对应清理回收单例proto数据时需要注意，当前数据是否被应用层引用
    // 2.建议对应单例使用的proto数据对应，不用再应用层进行存储使用

    export function getSignletonProto(className: string): any {
        if (!protoDic[className]) {
            switch (className) {
            }
        } else {
            clearSignletonProto(className);
        }
        return protoDic[className];
    }


    export function clearSignletonProto(className: string) {
        let obj = protoDic[className];
        if (!obj) return;
    }

    export function cleamSignleton() {
        protoDic = {};
    }
}

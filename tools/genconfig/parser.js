
var _ = require('lodash');

function referenceClassType(field) {
    return field.type + "[]";
}

function referenceClassFunc(field) {//引用类型解析方法
    let funcDesc =
        `if(!this._${field.name}){
                this._${field.name} = Data.get${field.referenceClass}(this._obj[${field.index}]);
            }
            return this._${field.name}`
    return funcDesc;
}

function defaultValue(value) {//默认解析值
    return value == undefined ? "" : value;
}

function defaultFunc(field) {//默认解析方法
    return `this._obj[${field.index}]`
}

function defaultCustomTypeFunc(field) {//默认解析自定义类型方法
    let defaultFunc = parser.defaultFunc;
    let funcDesc =
        `if(!this._${field.name}){
                this._${field.name} = new ItemInfo(${defaultFunc(field)});
            }
            return this._${field.name}`;
    return funcDesc;
}

function defaultCustomsTypeFunc(field) {//默认解析自定义类型数组方法
    let defaultFunc = parser.defaultFunc;
    let funcDesc =
        `if(!this._${field.name}){
                var objs = ${defaultFunc(field)};
                var arr = [];
                for (var i = 0, len = objs.length; i<len; i++) {
                    arr.push(new ItemInfo(objs[i]));
                }
                this._${field.name} = arr;
            }
            return this._${field.name}`;
    return funcDesc;
}

var parser = {
    "number[]": {
        parserValue: function (value) {
            value = defaultValue(value);
            let values = value.split(",");
            let result = [];
            _.each(values, val => result.push(Number(val)));
            return result;
        }
    },

    "string[]": {
        parserValue: function (value) {
            value = defaultValue(value);
            let values = value.split(",");
            let result = [];
            _.each(values, val => result.push(val));
            return result;
        }
    },
    "boolean[]": {
        parserValue: function (value) {
            value = defaultValue(value);
            let values = value.split(",");
            let result = [];
            _.each(values, val => result.push(Boolean(val)));
            return result;
        }
    },
    "ItemInfo": {
        parserValue: function (value) {
            let obj = parser["number[]"];
            return obj.parserValue(value);
        },
        parserFunc: function (field) {
            return defaultCustomTypeFunc(field);
        }
    },

    "ItemInfo[]": {
        parserValue: function (value) {
            let obj = parser["ItemInfo"];
            let result = [];
            let values = value.split(";")
            _.each(values, val => result.push(obj.parserValue(val)));
            return result;
        },
        parserFunc: function (field) {
            return defaultCustomsTypeFunc(field);
        }
    },

    "map<number>": {
        parserValue: function (value) {
            let obj = {};
            _.each(value.split(";"), value => {
                let arr = value.split(",");
                obj[arr[0]] = Number(arr[1]);
            });
            return obj;
        },
        parserType: function (field) {
            return `{ [index:number]:number }`;
        }
    },

    "map<string>": {
        parserValue: function (value) {
            let obj = {};
            _.each(value.split(";"), value => {
                let arr = value.split(",");
                obj[arr[0]] = String(arr[1]);
            });
            return obj;
        },
        parserType: function (field) {
            return `{ [index:number]:string }`;
        }
    }
}

module.exports = {
    referenceClassFunc: referenceClassFunc,
    referenceClassType: referenceClassType,
    defaultValue: defaultValue,
    defaultFunc: defaultFunc,
    defaultCustomTypeFunc: defaultCustomTypeFunc,
    defaultCustomsTypeFunc: defaultCustomsTypeFunc,
    parser: parser
};



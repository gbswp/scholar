var fs = require('fs-extra');
var dust = require('dustjs-helpers');
var _ = require('lodash');
var parser = require('./parser');


dust.config.whitespace = true;

dust.helpers.iter = function (chunk, context, bodies, params) {
    var obj = dust.helpers.tap(params.obj, chunk, context);
    var iterable = [];
    let fields = _.values(obj);
    _.each(fields, field => {
        let info = {};
        _.each(field, (value, key) => {
            info[key] = value;
        })
        if (field.refrenceClass) {
            info.type = parser.referenceClassType(field);
        } else {
            let parserObj = parser.parser[field.type];
            let parserType = parserObj && parserObj.parserType;
            parserType && (info.type = parserType(field));
        }
        iterable.push(info);
    })

    return chunk.section(iterable, context, bodies);
};

dust.filters.filterIndex = function (value) {
    let index = value.index;
    let fields = value.fields;
    let field = fields[index];
    return field ? field.type : "string";
}

dust.helpers.field = function (chunk, context, bodies, params) {
    var obj = dust.helpers.tap(params.obj, chunk, context);
    var iterable = [];
    _.each(obj, (field, key) => {
        let info = {};
        let funcDesc;
        if (field.referenceClass) {
            funcDesc = parser.referenceClassFunc(field);
        } else {
            let parserObj = parser.parser[field.type];
            let parserFunc = parserObj && parserObj.parserFunc;
            if (parserFunc) {
                funcDesc = parserFunc(field);
            } else {
                parserFunc = parser.defaultFunc;
                funcDesc = `return ${parserFunc(field)}`
            }
        }
        info.funcDesc = funcDesc;
        _.each(field, (value, key) => {
            info[key] = value;
        })
        iterable.push(info);
    })
    return chunk.section(iterable, context, bodies);
};

dust.helpers.itrdata = function (chunk, context, bodies, params) {
    var obj = dust.helpers.tap(params.obj, chunk, context);
    var iterable = [];
    _.each(obj, (value, key) => {
        iterable.push({ key: key, value: JSON.stringify(value) });
    })
    return chunk.section(iterable, context, bodies);
};

function loadDustTemplate(name) {
    var template = fs.readFileSync(__dirname + '/templates/' + name + '.dust', 'UTF8').toString();
    var compiledTemplate = dust.compile(template, name);
    dust.loadSource(compiledTemplate);
}

loadDustTemplate('data.d');
loadDustTemplate('data.js');
loadDustTemplate('data.json');
loadDustTemplate('classDecl');
loadDustTemplate('schemas.json');
loadDustTemplate('msgcode');


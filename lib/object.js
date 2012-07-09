var fun = require('./functional');
var forEach = fun.forEach;

var types = require('./types');
var isObject = types.isObject;

exports.keys = keys;
exports.values = values;

function keys(o) {
    if(isObject(o)) return Object.keys(o);
}

function values(o) {
    if(!isObject(o)) return;
    var ret = [];

    for(var k in o) ret.push(o[k]);

    return ret;
}

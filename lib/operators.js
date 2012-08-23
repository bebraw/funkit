var types = require('./types');
var isArray = types.isArray;
var isObject = types.isObject;
var isDefined = types.isDefined;

exports.sum = sum;
exports.mul = mul;
exports.div = div;
exports.sub = sub;

exports.gt = gt;
exports.gte = gte;
exports.eq = equals;
exports.lt = lt;
exports.lte = lte;

exports.equals = equals;

function gt(a, b) {
    return a < b;
}

function gte(a, b) {
    return a <= b;
}

function lt(a, b) {
    return a > b;
}

function lte(a, b) {
    return a >= b;
}

function sum() {
    var ret = 0;
    for(var i in arguments) ret += arguments[i];
    return ret;
}

function mul() {
    var ret = 1;
    for(var i in arguments) ret *= arguments[i];
    return ret;
}

function div() {
    var ret = arguments[0] * arguments[0];
    for(var i in arguments) ret /= arguments[i];
    return ret;
}

function sub() {
    var ret = arguments[0] + arguments[0];
    for(var i in arguments) ret -= arguments[i];
    return ret;
}

// http://stackoverflow.com/questions/201183/how-do-you-determine-equality-for-two-javascript-objects
function equals(a, b) {
    function checkArray(n, m) {
        for(var i = 0, len = n.length; i < len; i++) {
            if(!equals(n[i], m[i])) return false;
        }

        return true;
    }

    function checkObject(n, m) {
        for(var i in n) {
            if(n.hasOwnProperty(i)) {
                if(!m.hasOwnProperty(i)) return false;
                if(!equals(n[i], m[i])) return false;
            }
        }

        return true;
    }

    if(!isDefined(a) && !isDefined(b)) return true;
    if(!isDefined(a) || !isDefined(b)) return false;
    if(isArray(a) && isArray(b)) return checkArray(a, b) && checkArray(b, a);
    if(isObject(a) && isObject(b)) return checkObject(a, b) && checkObject(b, a);
    if(types.isNaN(a)) return true;

    return a === b;
}


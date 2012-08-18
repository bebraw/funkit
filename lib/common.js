var types = require('./types');
var isArray = types.isArray;
var isObject = types.isObject;

var functional = require('./functional');
var forEach = functional.forEach;

exports.merge = merge;
exports.deepcopy = deepcopy;
exports.copy = copy;
exports.err = err;

function merge(a, b) {
    if(isArray(a) && isArray(b)) return mergeArrays(a, b);
    if(isObject(a) && isObject(b)) return mergeObjects(a, b);
}

function mergeArrays(a, b) {
    return a.concat(b);
}

function mergeObjects(a, b) {
    var ret = {};

    forEach(a, get);
    forEach(b, get);

    function get(k, v) {
        if(k in ret) {
            var cur = ret[k];

            if(isObject(cur) && isObject(k)) {
                forEach(k, function(key, val) {
                    cur[key] = val;
                });
            }
            else ret[k] = deepcopy(v);
        }
        else ret[k] = deepcopy(v);
    }

    return ret;
}

function deepcopy(o) {
    // http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/#comment-10679
    var copy = o;

    if (o && isObject(o)) {
        copy = isArray(o)? []: {};

        for(var k in o) {
            copy[k] = deepcopy(o[k]);
        }
    }

    return copy;
}

function copy(o) {
    if(isObject(o)) {
        var ret = {};
        for(var k in o) ret[k] = o[k];
        return ret;
    }
    else if(isArray(o)) return o.slice(0);
    return o;
}

// TODO: test somehow
function err(fn) {
    return function(e, d) {
        if(e) throw e;

        fn(d);
    };
}


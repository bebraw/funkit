var ob = require('./object');
var keys = ob.keys;
var values = ob.values;

var types = require('./types');
var isArray = types.isArray;
var isObject = types.isObject;

exports.partial = partial;
exports.id = id;
exports.all = all;
exports.any = any;
exports.forEach = forEach;
exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.chain = chain;
exports.zip = zip;
exports.ziptoo = ziptoo;
exports.otozip = otozip;
exports.count = count;

// http://stackoverflow.com/questions/4394747/javascript-curry-function
function partial(fn) {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments, [1]);

    return function() {
        return fn.apply(null, args.concat(slice.apply(arguments)));
    };
}

function id(a) {
    return a;
}

function all(cb, a) {
    if(!isArray(a)) return false;
    return a.map(cb).filter(id).length == a.length;
}
function any(cb, a) {
    if(!isArray(a)) return false;
    return a.map(cb).filter(id).length > 0;
}

function forEach(o, cb) {
    if(isArray(o)) o.forEach(cb);
    else if(isObject(o)) {
        var i = 0;
        for(var k in o) {
            cb(k, o[k], i);
            i++;
        }
    }
}

function map(cb, o) {
    if(isArray(o)) {
        var ret = [];
        forEach(o, function(v) {ret.push(cb(v));});
        return ret;
    }
    if(isObject(o)) return ziptoo(zip(keys(o), map(cb, values(o))));
}

function filter(cb, o) {
    var ret;

    if(isArray(o)) {
        ret = [];
        forEach(o, function(v) {if(cb(v)) ret.push(v);});
        return ret;
    }
    if(isObject(o)) {
        ret = {};
        forEach(map(cb, o), function(k, v) {if(v) ret[k] = o[k];});
        return ret;
    }
}

function reduce(cb, o) {
    if(isArray(o)) {
        var ret = o[0];
        forEach(o.slice(1), function(v) {ret = cb(ret, v);});
        return ret;
    }
}

function chain() {
    var v;
    var init = function(o) {
        v = o;
        return funcs;
    };
    var funcs = {
        val: function() {return v;}
    };

    for(var i in arguments) {
        var f = arguments[i];
        funcs[f.name] = wrap(f);
    }

    function wrap(f) {
        return function() {
            v = f.call(undefined, arguments[0], v);

            return funcs;
        };
    }

    return init;
}

function zip(a, b) {
    if(!(isArray(a) && isArray(b))) return;
    var ret = [];

    for(var i = 0, len = Math.min(a.length, b.length); i < len; i++)
        ret.push([a[i], b[i]]);

    return ret;
}

function ziptoo(a) {
    if(!isArray(a)) return;
    var ret = {}; 

    forEach(a, function(v) {
        ret[v[0]] = v[1];
    }); 

    return ret;
}

function otozip(o) {
    return zip(keys(o), values(o));
}

function count(o) {
    if(isArray(o)) return o.length;
    if(isObject(o)) return keys(o).length;
}

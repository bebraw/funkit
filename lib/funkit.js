exports.partial = partial;
exports.last = last;
exports.ltrim = ltrim;
exports.rtrim = rtrim;
exports.partition = partition;
exports.capitalize = capitalize;
exports.title = title;
exports.isArray = isArray;
exports.isDefined = isDefined;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.between = between;
exports.randint = randint;
exports.choose = choose;
exports.range = range;
exports.id = id;
exports.all = all;
exports.any = any;
exports.equals = equals;
exports.atoi = atoi;
exports.itoa = itoa;
exports.copy = copy;
exports.deepcopy = deepcopy;
exports.merge = merge;
exports.forEach = forEach;
exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.chain = chain;
exports.keys = keys;
exports.values = values;
exports.zip = zip;
exports.ziptoo = ziptoo;
exports.otozip = otozip;
exports.split = split;

exports.sum = sum;
exports.mul = mul;
exports.div = div;
exports.sub = sub;

exports.gt = gt;
exports.gte = gte;
exports.eq = equals;
exports.lt = lt;
exports.lte = lte;

function split(sep, str) {
    return str.split(sep);
}

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

function map(cb, o) {
    if(isArray(o)) {
        var ret = [];
        forEach(o, function(v) {ret.push(cb(v));});
        return ret;
    }
    if(isObject(o)) return ziptoo(zip(keys(o), map(cb, values(o))));
}

function otozip(o) {
    return zip(keys(o), values(o));
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

function keys(o) {
    if(isObject(o)) return Object.keys(o);
}

function values(o) {
    if(!isObject(o)) return;
    var ret = [];

    forEach(o, function(_, v) {
        ret.push(v);
    });

    return ret;
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

function atoi(chr) {
    return chr.length == 1? chr.charCodeAt(): undefined;
}

function itoa(i) {
    return isNumber(i)? String.fromCharCode(i): undefined;
}

function range(a) {
    var ret = [];

    for(var i = 0; i < a; i++) ret.push(i);

    return ret;
}

function id(a) {return a;}

function all(cb, a) {
    if(!isArray(a)) return false;
    return a.map(cb).filter(id).length == a.length;
}
function any(cb, a) {
    if(!isArray(a)) return false;
    return a.map(cb).filter(id).length > 0;
}

function between(min, max, a) {return min <= a && a <= max;}
function randint(min, max) {return Math.ceil(Math.random() * (max + 1 - min)) - 1 + min;}
function choose(m) {return m[randint(0, m.length - 1)];}

function isArray(input) {return Array.isArray(input);}
function isDefined(input) {return typeof input !== "undefined";}
function isFunction(input) {return typeof input === "function";}
function isNumber(input) {return typeof input === "number";}
function isString(input) {return typeof input === "string";}

// http://phpjs.org/functions/is_object:450
function isObject(mixed_var) {
    if (Object.prototype.toString.call(mixed_var) === '[object Array]') {
            return false;
    }   
    return mixed_var !== null && typeof mixed_var == 'object';
}

// http://stackoverflow.com/questions/4394747/javascript-curry-function
function partial(fn) {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments, [1]);

    return function() {
        return fn.apply(null, args.concat(slice.apply(arguments)));
    };
}

function last(a) {
    return a[a.length - 1];
}

// http://phpjs.org/functions/ltrim:467
function ltrim(str, charlist) {
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
    var re = new RegExp('^[' + charlist + ']+', 'g');
    return (str + '').replace(re, '');
}

// http://phpjs.org/functions/rtrim:507
function rtrim(str, charlist) {
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
    var re = new RegExp('[' + charlist + ']+$', 'g');
    return (str + '').replace(re, '');
}

function partition(str, chr) {
    var parts = str.split(chr);
    var lPart = parts.shift();
    var rPart = parts.join(chr);

    return [lPart, rPart];
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
} 

function title(str) {
    return str.split(' ').map(capitalize).join(' ');
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

    if(isArray(a) && isArray(b)) return checkArray(a, b) && checkArray(b, a);
    if(isObject(a) && isObject(b)) return checkObject(a, b) && checkObject(b, a);
    if(isNaN(a)) return true;

    return a === b;
}


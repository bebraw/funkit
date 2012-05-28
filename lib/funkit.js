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

    if(isNaN(a)) return true;
    if(isArray(a) && isArray(b)) return checkArray(a, b) && checkArray(b, a);
    if(isObject(a) && isObject(b)) return checkObject(a, b) && checkObject(b, a);

    return a === b;
}


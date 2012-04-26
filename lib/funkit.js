exports.partial = partial;
exports.last = last;
exports.ltrim = ltrim;
exports.rtrim = rtrim;
exports.partition = partition;
exports.capitalize = capitalize;
exports.title = title;
exports.isArray = isArray;
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
function isFunction(input) {return typeof input === "function";}
function isNumber(input) {return typeof input === "number";}
function isObject(input) {return typeof input === "object";}
function isString(input) {return typeof input === "string";}

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


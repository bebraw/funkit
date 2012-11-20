var types = require('./types');
var isDefined = types.isDefined;
var isNumber = types.isNumber;

exports.atoi = atoi;
exports.itoa = itoa;
exports.trim = trim;
exports.ltrim = ltrim;
exports.rtrim = rtrim;
exports.partition = partition;
exports.capitalize = capitalize;
exports.title = title;
exports.split = split;
exports.lower = lower;
exports.upper = upper;
exports.separate = separate;
exports.zfill = zfill;
exports.reverse = reverse;

function atoi(chr) {
    return chr.length == 1? chr.charCodeAt(): undefined;
}

function itoa(i) {
    return isNumber(i)? String.fromCharCode(i): undefined;
}

function trim(charlist, str) {
    return ltrim(charlist, rtrim(charlist, str));
}

// http://phpjs.org/functions/ltrim:467
function ltrim(charlist, str) {
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');     var re = new RegExp('^[' + charlist + ']+', 'g');
    return (str + '').replace(re, '');
}

// http://phpjs.org/functions/rtrim:507
function rtrim(charlist, str) {
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');    var re = new RegExp('[' + charlist + ']+$', 'g');
    return (str + '').replace(re, '');
}

function partition(chr, str) {
    var parts = str.split(chr);
    var lPart = parts.shift();
    var rPart = parts.join(chr);

    return rPart? [lPart, rPart]: [lPart];
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function title(str) {
    return str.split(' ').map(capitalize).join(' ');
}

function split(sep, str) {
    return str.split(sep);
}

function lower(str) {
    return str.toLowerCase();
}

function upper(str) {
    return str.toUpperCase();
}

function separate(str, start, end) {
    var s = str.split(start)[1];

    if(!isDefined(s)) return '';

    return s.trim().split(end)[0].trim();
}

function zfill(amount, str) {
    var pad = '';
    str += '';

    while(pad.length < amount - str.length) pad += '0';

    return pad + str;
}

function reverse(str) {
    return str.split('').reverse().join('');
}


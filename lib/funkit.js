exports.partial = partial;
exports.last = last;
exports.ltrim = ltrim;
exports.rtrim = rtrim;
exports.partition = partition;
exports.capitalize = capitalize;
exports.title = title;

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


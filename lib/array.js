var types = require('./types');
var isArray = types.isArray;

exports.concat = concat;
exports.last = last;
exports.range = range;

function concat(a) {
    var ret = [];

    a.forEach(function(k) {
        if(isArray(k)) {
            k.forEach(function(k2) {
                ret.push(k2);
            });
        }
        else {
            ret.push(k);
        }
    });

    return ret;
}

function last(a) {
    return a[a.length - 1];
}

function range(a) {
    var ret = [];

    for(var i = 0; i < a; i++) ret.push(i);

    return ret;
}

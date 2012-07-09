exports.last = last;
exports.range = range;

function last(a) {
    return a[a.length - 1];
}

function range(a) {
    var ret = [];

    for(var i = 0; i < a; i++) ret.push(i);

    return ret;
}

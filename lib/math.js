exports.between = between;
exports.randint = randint;
exports.choose = choose;
exports.range = range;

function between(min, max, a) {
    return min <= a && a <= max;
}

function randint(min, max) {
    return Math.ceil(Math.random() * (max + 1 - min)) - 1 + min;
}

function choose(m) {
    return m[randint(0, m.length - 1)];
}

function range(start, end, stride) {
    if(stride < 1) return [];

    stride = stride || 1;

    if(!end) {
        end = start;
        start = 0;
    }

    var ret = [];

    for(var i = start, len = end; i < len; i += stride) {
        ret.push(i);
    }

    return ret;
}


var annotate = require('annotate');
var is = require('is-js');
var not = require('../functional/not');
    function range(start, end, stride) {
        if(stride < 1) return [];

        stride = stride || 1;

        if(!is.set(end)) {
            end = start;
            start = 0;
        }

        var ret = [];

        for(var i = start, len = end; i < len; i += stride) {
            ret.push(i);
        }

        return ret;
    }

    module.exports = annotate('range', 'Generates a range based on given `start`, `end` and `stride` values.')
        .on(is.number, is.number, is.number, range)
        .on(is.number, is.number, not(is.set), range)
        .on(is.number, not(is.set), not(is.set), range);


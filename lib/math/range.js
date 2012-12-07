define(['annotate.js', 'is-js'], function(annotate, is) {
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

    // TODO: mark end and stride as optional (either number or undefined)
    return annotate(range, is.number, "Generates a range based on given `start`, `end` and `stride` values.");
});

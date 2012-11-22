define(function() {
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
    return range;
});

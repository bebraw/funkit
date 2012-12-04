define(['../is', './forEach'], function(is, forEach) {
    function reduce(cb, o) {
        if(is.array(o)) {
            var ret = o[0];

            forEach(o.slice(1), function(v) {
                ret = cb(ret, v);
            });

            return ret;
        }
    }
    return reduce;
});

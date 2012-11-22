define(['../types/isArray', './forEach'], function(isArray, forEach) {
    function reduce(cb, o) {
        if(isArray(o)) {
            var ret = o[0];

            forEach(o.slice(1), function(v) {
                ret = cb(ret, v);
            });

            return ret;
        }
    }
    return reduce;
});

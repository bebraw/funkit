define(['is-js', './forEach'], function(is, forEach) {
    function reduce(cb, o) {
        if(is.array(o)) {
            var ret = o[0];

            forEach(function(v) {
                ret = cb(ret, v);
            }, o.slice(1));

            return ret;
        }
    }
    return reduce;
});

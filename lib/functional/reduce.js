define(['is-js', './each'], function(is, each) {
    function reduce(cb, o) {
        if(is.array(o)) {
            var ret = o[0];

            each(function(v) {
                ret = cb(ret, v);
            }, o.slice(1));

            return ret;
        }
    }
    return reduce;
});

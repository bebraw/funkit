define(['annotate', 'is-js', './each'], function(annotate, is, each) {
    return annotate('reduce', 'Reduces using given callback')
        .on(is.fn, is.array, function(cb, o) {
            var ret = o[0];

            each(function(v) {
                ret = cb(ret, v);
            }, o.slice(1));

            return ret;
        });
});

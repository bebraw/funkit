define(['annotate', 'is-js', '../object/keys', '../object/values', './ziptoo', './zip', './each'],
        function(annotate, is, keys, values, ziptoo, zip, each) {
    var map = annotate('map', 'Maps using given callback')
        .on(is.fn, is.array, function(cb, o) {
            var ret = [];

            each(function(v, i) {
                ret.push(cb(v, i));
            }, o);

            return ret;
        })
        .on(is.fn, is.object, function(cb, o) {
            return ziptoo(zip(keys(o), map(cb, values(o))));
        });
    return map;
});

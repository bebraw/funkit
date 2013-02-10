define(['annotate', 'is-js', './each'], function(annotate, is, each) {
    function ziptoo(a) {
        var ret = {};

        each(function(v) {
            ret[v[0]] = v[1];
        }, a);

        return ret;
    }

    return annotate('ziptoo', 'Converts given zip to object.')
        .on(is.array, ziptoo);
});

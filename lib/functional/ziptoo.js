define(['annotate.js', 'is-js', './each'], function(annotate, is, each) {
    function ziptoo(a) {
        var ret = {};

        each(function(v) {
            ret[v[0]] = v[1];
        }, a);

        return ret;
    }

    return annotate(ziptoo, is.array, "Converts given zip to object.");
});

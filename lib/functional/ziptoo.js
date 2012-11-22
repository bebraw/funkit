define(['../types/isArray', './forEach'], function(isArray, forEach) {
    function ziptoo(a) {
        if(!isArray(a)) return;
        var ret = {};

        forEach(a, function(v) {
            ret[v[0]] = v[1];
        });

        return ret;
    }
    return ziptoo;
});

define(['../is', './forEach'], function(is, forEach) {
    function ziptoo(a) {
        if(!is.array(a)) return;
        var ret = {};

        forEach(a, function(v) {
            ret[v[0]] = v[1];
        });

        return ret;
    }
    return ziptoo;
});

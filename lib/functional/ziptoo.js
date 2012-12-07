define(['is-js', './each'], function(is, each) {
    function ziptoo(a) {
        if(!is.array(a)) return;
        var ret = {};

        each(function(v) {
            ret[v[0]] = v[1];
        }, a);

        return ret;
    }
    return ziptoo;
});

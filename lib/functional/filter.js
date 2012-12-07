define(['is-js', './each', './map'], function(is, each, map) {
    function filter(cb, o) {
        var ret;

        if(is.array(o)) {
            ret = [];
            each(function(v, i) {if(cb(v, i)) ret.push(v);}, o);
            return ret;
        }
        if(is.object(o)) {
            ret = {};
            each(function(k, v) {if(v) ret[k] = o[k];}, map(cb, o));
            return ret;
        }
    }
    return filter;
});

define(['../is', './forEach', './map'], function(is, forEach, map) {
    function filter(cb, o) {
        var ret;

        if(is.array(o)) {
            ret = [];
            forEach(function(v, i) {if(cb(v, i)) ret.push(v);}, o);
            return ret;
        }
        if(is.object(o)) {
            ret = {};
            forEach(function(k, v) {if(v) ret[k] = o[k];}, map(cb, o));
            return ret;
        }
    }
    return filter;
});

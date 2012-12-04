define(['../is', './forEach', './map'], function(is, forEach, map) {
    function filter(cb, o) {
        var ret;

        if(is.array(o)) {
            ret = [];
            forEach(o, function(v, i) {if(cb(v, i)) ret.push(v);});
            return ret;
        }
        if(is.object(o)) {
            ret = {};
            forEach(map(cb, o), function(k, v) {if(v) ret[k] = o[k];});
            return ret;
        }
    }
    return filter;
});

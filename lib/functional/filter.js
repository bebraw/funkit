define(['../types/isArray', '../types/isObject', './forEach', './map'], function(isArray, isObject, forEach, map) {
    function filter(cb, o) {
        var ret;

        if(isArray(o)) {
            ret = [];
            forEach(o, function(v) {if(cb(v)) ret.push(v);});
            return ret;
        }
        if(isObject(o)) {
            ret = {};
            forEach(map(cb, o), function(k, v) {if(v) ret[k] = o[k];});
            return ret;
        }
    }
    return filter;
});

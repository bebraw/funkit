define(['../types/isArray', '../types/isObject', '../object/values', './ziptoo', './zip'], function(isArray, isObject, values, ziptoo, zip) {
    function map(cb, o) {
        if(isArray(o)) {
            var ret = [];
            forEach(o, function(v) {ret.push(cb(v));});
            return ret;
        }
        if(isObject(o)) return ziptoo(zip(keys(o), map(cb, values(o))));
    }
    return map;
});

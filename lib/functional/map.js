define(['../types/isArray', '../types/isObject', '../object/keys', '../object/values', './ziptoo', './zip', './forEach'], function(isArray, isObject, keys, values, ziptoo, zip, forEach) {
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

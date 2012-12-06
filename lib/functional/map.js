define(['../is', '../object/keys', '../object/values', './ziptoo', './zip', './forEach'], function(is, keys, values, ziptoo, zip, forEach) {
    function map(cb, o) {
        if(is.array(o)) {
            var ret = [];
            forEach(function(v, i) {ret.push(cb(v, i));}, o);
            return ret;
        }
        if(is.object(o)) return ziptoo(zip(keys(o), map(cb, values(o))));
    }
    return map;
});

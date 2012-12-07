define(['is-js', '../object/keys', '../object/values', './ziptoo', './zip', './each'], function(is, keys, values, ziptoo, zip, each) {
    function map(cb, o) {
        if(is.array(o)) {
            var ret = [];
            each(function(v, i) {ret.push(cb(v, i));}, o);
            return ret;
        }
        if(is.object(o)) return ziptoo(zip(keys(o), map(cb, values(o))));
    }
    return map;
});

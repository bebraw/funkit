define(['../types/isArray', '../types/isObject'], function(isArray, isObject) {
    function copy(o) {
        if(isObject(o)) {
            var ret = {};

            for(var k in o) ret[k] = o[k];

            return ret;
        }
        else if(isArray(o)) {
            return o.slice(0);
        }

        return o;
    }
    return copy;
});

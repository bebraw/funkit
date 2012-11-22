define(['../types/isArray', '../types/isObject', '../functional/forEach'], function(isArray, isObject, forEach) {
    function merge(a, b) {
        if(isArray(a) && isArray(b)) return mergeArrays(a, b);
        if(isObject(a) && isObject(b)) return mergeObjects(a, b);
    }
    return merge;

    function mergeArrays(a, b) {
        return a.concat(b);
    }

    function mergeObjects(a, b) {
        var ret = {};

        forEach(a, get);
        forEach(b, get);

        function get(k, v) {
            if(k in ret) {
                var cur = ret[k];

                if(isObject(cur) && isObject(k)) {
                    forEach(k, function(key, val) {
                        cur[key] = val;
                    });
                }
                else ret[k] = deepcopy(v);
            }
            else ret[k] = deepcopy(v);
        }

        return ret;
    }
});

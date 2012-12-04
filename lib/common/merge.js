define(['../is', '../functional/forEach', '../common/deepcopy'], function(is, forEach, deepcopy) {
    function merge(a, b) {
        if(is.array(a) && is.array(b)) return mergeArrays(a, b);
        if(is.object(a) && is.object(b)) return mergeObjects(a, b);
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

                if(is.object(cur) && is.object(k)) {
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

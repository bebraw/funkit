define(['annotate', 'is-js', '../functional/each', '../common/deepcopy', '../functional/id'],
       function(annotate, is, each, deepcopy, id) {
    return annotate('merge', 'Merges given objects')
        .on(is.array, is.array, function(a, b) {
            return a.concat(b);
        })
        .on(is.object, is.object, function(a, b) {
            var ret = {};

            each(get, a);
            each(get, b);

            function get(k, v) {
                if(k in ret) {
                    var cur = ret[k];

                    if(is.object(cur) && is.object(k)) {
                        each(function(key, val) {
                            cur[key] = val;
                        }, k);
                    }
                    else ret[k] = deepcopy(v);
                }
                else ret[k] = deepcopy(v);
            }

            return ret;
        })
        .on(any, any, id);

        // TODO: move this elsewhere
        function any() {
            return true;
        }
});

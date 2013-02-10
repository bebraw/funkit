define(['annotate', 'is-js'], function(annotate, is) {
    function flatten(a) {
        var ret = [];

        a.forEach(function(k) {
            if(is.array(k)) {
                k.forEach(function(k2) {
                    ret.push(k2);
                });
            }
            else {
                ret.push(k);
            }
        });

        return ret;
    }

    return annotate('flatten', 'Flattens an array of arrays to a single array')
        .on(is.array, flatten);
});

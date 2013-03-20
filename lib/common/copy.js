define(['annotate', 'is-js', '../functional/id'],
       function(annotate, is, id) {
    return annotate('copy', 'Returns a shallow copy')
        .on(is.array, function(o) {
            return o.slice(0);
        })
        .on(is.fn, function(o) {
            return o;
        })
        .on(is.object, function(o) {
            var ret = {};

            for(var k in o) ret[k] = o[k];

            return ret;
        })
        .on(id, id);
});

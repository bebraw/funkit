define(['annotate', '../math/range', '../functional/map', '../functional/partial', '../ops', 'is-js'],
       function(annotate, range, map, partial, op, is) {

    function chunk(len, a) {
        if(isNaN(len)) return [];
        return map(function(k) {
            return a.slice(k, k + len);
        }, range(0, a.length, len));
    }

    return annotate('chunk', 'Chunks given array to pieces')
        .on(partial(op.gt, 0), is.array, chunk);
});

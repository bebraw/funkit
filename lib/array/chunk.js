define(['annotate.js', '../math/range', '../functional', '../ops', 'is-js'],
       function(annotate, range, functional, op, is) {
    var map = functional.map;
    var partial = functional.partial;

    function chunk(len, a) {
        if(isNaN(len)) return [];
        return map(function(k) {
            return a.slice(k, k + len);
        }, range(0, a.length, len));
    }

    return annotate('chunk', 'Chunks given array to pieces')
        .on(is.number, is.array, chunk);
        // TODO: fix suite.js generator to make partial work
        // now it fails to take partial annotation in count
        //.on(partial(op.gt, 0), is.array, chunk);
});

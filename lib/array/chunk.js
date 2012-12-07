define(['annotate.js', '../math/range', '../functional', '../ops', 'is-js'],
       function(annotate, range, functional, op, is) {
    var map = functional.map;
    var partial = functional.partial;

    function chunk(len, a) {
        return map(function(k) {
            return a.slice(k, k + len);
        }, range(0, a.length, len));
    }

    return annotate(chunk, partial(op.gt, 0), is.array, "Chunks given array to pieces.");
});

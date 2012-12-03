define(['../common/annotate', '../math/range', '../functional', '../operators', '../types'],
       function(annotate, range, functional, op, types) {
    var map = functional.map;
    var partial = functional.partial;

    function chunk(len, a) {
        return map(function(k) {
            return a.slice(k, k + len);
        }, range(0, a.length, len));
    }

    return annotate(chunk, partial(op.gt, 0), types.isArray, "Chunks given array to pieces.");
});

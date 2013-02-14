define(['annotate', 'is-js', './id'], function(annotate, is, id) {
    function any(cb, a) {
        return a.map(cb).filter(id).length > 0;
    }

    return annotate('any', 'Performs given check on array. If any of the checks pass, returns true.')
        .on(is.fn, is.array, any);
});

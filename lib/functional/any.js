define(['annotate.js', 'is-js', '../functional/id'], function(annotate, is, id) {
    function any(cb, a) {
        return a.map(cb).filter(id).length > 0;
    }

    return annotate(any, is.fn, is.array,
        "Performs given check on array. If any of the checks pass, returns true.");
});

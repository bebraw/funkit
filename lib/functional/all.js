define(['annotate.js', 'is-js', '../functional/id'], function(annotate, is, id) {
    function all(cb, a) {
        return a.map(cb).filter(id).length == a.length;
    }

    return annotate('Performs given check on array. If all checks pass, returns true.')
        .on(is.fn, is.array, all);
});

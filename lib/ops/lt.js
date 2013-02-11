define(['annotate', 'is-js'], function(annotate, is) {
    function lt(a, b) {
        return a > b;
    }

    return annotate('lt', 'Less than')
        .on(is.number, is.number, lt)
        .on(is.number, is.fn, lt);
});

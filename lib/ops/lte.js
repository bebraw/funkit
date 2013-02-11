define(['annotate', 'is-js'], function(annotate, is) {
    function lte(a, b) {
        return a >= b;
    }

    return annotate('lte', 'Less or equals than')
        .on(is.number, is.number, lte)
        .on(is.number, is.fn, lte);
});

define(['annotate', 'is-js'], function(annotate, is) {
    function gte(a, b) {
        return a <= b;
    }

    return annotate('gte', 'Greater or equals than')
        .on(is.number, is.number, gte)
        .on(is.number, is.fn, gte);
});

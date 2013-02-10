define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('min', 'Returns the smallest of one or more numbers')
        .on(is.number, Math.min);
});

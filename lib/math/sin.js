define(['annotate.js', 'is-js'], function(annotate, is) {
    return annotate('sin', 'Returns the sine of a number')
        .on(is.number, Math.sin);
});

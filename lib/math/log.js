define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('log', 'Returns the natural logarithm (base E) of a number')
        .on(is.number, Math.log);
});

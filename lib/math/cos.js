define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('cos', 'Returns the cosine of a number')
        .on(is.number, Math.cos);
});

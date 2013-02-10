define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('max', 'Returns the largest of one or more numbers')
        .on(is.number, Math.max);
});

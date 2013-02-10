define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('floor', 'Returns the largest integer less than or equal to a number')
        .on(is.number, Math.floor);
});

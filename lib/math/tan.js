define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('tan', 'Returns the tangent of a number')
        .on(is.number, Math.tan);
});

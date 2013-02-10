define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('atan2', 'Returns the arctangent of the quotient of its arguments.')
        .on(is.number, is.number, Math.atan2);
});

define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('atan', 'Returns the arctangent (in radians) of a number.')
        .on(is.number, Math.atan);
});

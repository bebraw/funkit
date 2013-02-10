define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('abs', 'Returns the absolute value (modulus) of a number')
        .on(is.number, Math.abs);
});

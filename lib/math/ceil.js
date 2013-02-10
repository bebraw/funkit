define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('ceil', 'Returns the smallest integer greater than or equal to a number')
        .on(is.number, Math.ceil);
});

define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('round', 'Returns the value of a number rounded to the nearest integer')
        .on(is.number, Math.round);
});

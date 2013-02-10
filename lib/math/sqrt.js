define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('sqrt', 'Returns the square root of a number')
        .on(function(a) {
            return is.number(a) && a >= 0;
        }, Math.sqrt);
});

define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('asin', 'Returns the arcsine (in radians) of a number')
        .on(function(a) {
            return is.number(a) && -1 <= a && a <= 1;
        }, Math.asin);
});

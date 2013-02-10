define(['annotate', 'is-js'], function(annotate, is) {
    function between(a, min, max) {
        return min <= a && a <= max;
    }

    return annotate('between', 'Checks whether or not given bounds contain the given number, bounds included.')
        .on(is.number, is.number, is.number, between);
});

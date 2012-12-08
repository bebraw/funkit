define(['annotate.js', 'is-js'], function(annotate, is) {
    function between(min, max, a) {
        return min <= a && a <= max;
    }

    return annotate('Checks whether or not given bounds contain the given number, bounds included.')
        .on(is.number, is.number, is.number, between);
});

define(['annotate.js', 'is-js'], function(annotate, is) {
    function between(min, max, a) {
        return min <= a && a <= max;
    }

    return annotate(between, is.number, is.number, is.number,
        "Checks whether or not given bounds contain the given number, bounds included.");
});

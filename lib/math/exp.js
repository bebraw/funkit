define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('exp', "Returns Ex, where x is the argument, and E is Euler's constant, the base of the natural logarithms")
        .on(is.number, Math.exp);
});

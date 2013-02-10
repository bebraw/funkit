define(['annotate'], function(annotate) {
    return annotate('random', 'Returns a floating-point, pseudo-random number in the range [0, 1)')
        .on(Math.random);
});

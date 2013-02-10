define(['annotate', 'is-js'], function(annotate, is) {
    function randint(min, max) {
        if(max < min) return;

        return Math.ceil(Math.random() * (max + 1 - min)) - 1 + min;
    }

    return annotate('randint', 'Chooses a number between given bounds, bounds included')
        .on(is.number, is.number, randint);
});

define(['annotate.js', 'is-js', './randint'], function(annotate, is, randint) {
    function choose(m) {
        return m[randint(0, m.length - 1)];
    }

    return annotate('Chooses an item randomly.')
        .on(is.array, choose);
});

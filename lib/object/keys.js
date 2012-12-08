define(['annotate.js', 'is-js'], function(annotate, is) {
    function keys(o) {
        return Object.keys(o);
    }

    return annotate('Returns keys of the given object.')
        .on(is.object, keys);
});

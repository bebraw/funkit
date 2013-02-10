define(['annotate', 'is-js'], function(annotate, is) {
    function keys(o) {
        return Object.keys(o);
    }

    return annotate('keys', 'Returns keys of the given object.')
        .on(is.object, keys);
});

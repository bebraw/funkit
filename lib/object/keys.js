define(['annotate.js', 'is-js'], function(annotate, is) {
    function keys(o) {
        return Object.keys(o);
    }

    return annotate(keys, is.object, "Returns keys of the given object.");
});

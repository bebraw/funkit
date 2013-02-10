define(['annotate', 'is-js'], function(annotate, is) {
    function split(sep, str) {
        return str.split(sep);
    }

    return annotate('split', 'Splits using given separator.')
        .on(is.string, is.string, split);
});

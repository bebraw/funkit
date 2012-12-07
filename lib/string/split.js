define(['annotate.js', 'is-js'], function(annotate, is) {
    function split(sep, str) {
        return str.split(sep);
    }

    return annotate(split, is.string, is.string,
        "Splits using given separator.");
});

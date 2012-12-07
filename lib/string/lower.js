define(['annotate.js', 'is-js'], function(annotate, is) {
    function lower(str) {
        return str.toLowerCase();
    }

    return annotate(lower, is.string, "Converts given string to lowercase.");
});

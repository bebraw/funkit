define(['annotate.js', 'is-js'], function(annotate, is) {
    function upper(str) {
        return str.toUpperCase();
    }

    return annotate(upper, is.string, "Converts given string to uppercase.");
});

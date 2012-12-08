define(['annotate.js', 'is-js'], function(annotate, is) {
    function upper(str) {
        return str.toUpperCase();
    }

    return annotate('Converts given string to uppercase.')
        .on(is.string, upper);
});

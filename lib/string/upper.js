define(['annotate', 'is-js'], function(annotate, is) {
    function upper(str) {
        return str.toUpperCase();
    }

    return annotate('upper', 'Converts given string to uppercase.')
        .on(is.string, upper);
});

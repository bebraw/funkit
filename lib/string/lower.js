define(['annotate.js', 'is-js'], function(annotate, is) {
    function lower(str) {
        return str.toLowerCase();
    }

    return annotate('Converts given string to lowercase.')
        .on(is.string, lower);
});

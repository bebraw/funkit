define(['annotate', 'is-js'], function(annotate, is) {
    function lower(str) {
        return str.toLowerCase();
    }

    return annotate('lower', 'Converts given string to lowercase.')
        .on(is.string, lower);
});

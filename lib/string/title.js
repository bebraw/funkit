define(['annotate', 'is-js', './capitalize'], function(annotate, is, capitalize) {
    function title(str) {
        return str.split(' ').map(capitalize).join(' ');
    }

    return annotate('title', 'Returns given string in a title format.')
        .on(is.string, title);
});

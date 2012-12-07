define(['annotate.js', 'is-js', './capitalize'], function(annotate, is, capitalize) {
    function title(str) {
        return str.split(' ').map(capitalize).join(' ');
    }

    return annotate(title, is.string, "Returns given string in a title format.");
});

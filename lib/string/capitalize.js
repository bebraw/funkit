define(['annotate.js', 'is-js'], function(annotate, is) {
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

    return annotate(capitalize, is.string,
        "Capitalizes the first character of the given string.");
});

define(['annotate', 'is-js'], function(annotate, is) {
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

    return annotate('capitalize', 'Capitalizes the first character of the given string.')
        .on(is.string, capitalize);
});

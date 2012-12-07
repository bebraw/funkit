define(['annotate.js', 'is-js', './ltrim', './rtrim'],
        function(annotate, is, ltrim, rtrim) {
    function trim(charlist, str) {
        return ltrim(charlist, rtrim(charlist, str));
    }

    return annotate(trim, is.string, is.string,
        "Trims given characters from the ends of the given string.");
});

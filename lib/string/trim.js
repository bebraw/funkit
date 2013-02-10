define(['annotate', 'is-js', './ltrim', './rtrim'],
        function(annotate, is, ltrim, rtrim) {
    function trim(charlist, str) {
        return ltrim(charlist, rtrim(charlist, str));
    }

    return annotate('trim', 'Trims given characters from the ends of the given string.')
        .on(is.string, is.string, trim);
});

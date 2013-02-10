define(['annotate', 'is-js'], function(annotate, is) {
    // http://phpjs.org/functions/ltrim:467
    function ltrim(charlist, str) {
        charlist = !charlist? ' \\s\u00A0': (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
        var re = new RegExp('^[' + charlist + ']+', 'g');

        return (str + '').replace(re, '');
    }

    return annotate('ltrim', 'Trims given characters from the left side of the given string.')
        .on(is.string, is.string, ltrim);
});

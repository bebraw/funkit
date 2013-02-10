define(['annotate', 'is-js'], function(annotate, is) {
    function reverse(str) {
        return str.split('').reverse().join('');
    }

    return annotate('reverse', 'Reverses the order of the given string.')
        .on(is.string, reverse);
});

define(['annotate.js', 'is-js'], function(annotate, is) {
    function reverse(str) {
        return str.split('').reverse().join('');
    }

    return annotate(reverse, is.string,
        "Reverses the order of the given string.");
});

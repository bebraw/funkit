define(['annotate.js', 'is-js'], function(annotate, is) {
    function itoa(i) {
        return String.fromCharCode(i);
    }

    return annotate(itoa, is.number,
        "Converts given ASCII code to a character.");
});

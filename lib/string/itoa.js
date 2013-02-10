define(['annotate', 'is-js'], function(annotate, is) {
    function itoa(i) {
        return String.fromCharCode(i);
    }

    return annotate('itoa', 'Converts given ASCII code to a character.')
        .on(is.number, itoa);
});

define(['annotate', 'is-js'], function(annotate, is) {
    function atoi(chr) {
        return chr.length == 1? chr.charCodeAt(): undefined;
    }

    // TODO: is.char
    return annotate('atoi', 'Converts given ASCII character to a character code.')
        .on(is.string, atoi);
});

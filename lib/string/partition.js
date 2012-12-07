define(['annotate.js', 'is-js'], function(annotate, is) {
    function partition(chr, str) {
        var parts = str.split(chr);
        var lPart = parts.shift();
        var rPart = parts.join(chr);

        return rPart? [lPart, rPart]: [lPart];
    }

    // TODO: is.char
    return annotate(partition, is.string, is.string,
        "Partitions using the the given character and returns the resulting parts.");
});

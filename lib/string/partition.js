define(function() {
    function partition(chr, str) {
        var parts = str.split(chr);
        var lPart = parts.shift();
        var rPart = parts.join(chr);

        return rPart? [lPart, rPart]: [lPart];
    }
    return partition;
});

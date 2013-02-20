var annotate = require('annotate');
var is = require('is-js');
    function partition(chr, str) {
        var parts = str.split(chr);
        var lPart = parts.shift();
        var rPart = parts.join(chr);

        return rPart? [lPart, rPart]: [lPart];
    }

    // TODO: is.char
    module.exports = annotate('partition', 'Partitions using the the given character and returns the resulting parts.')
        .on(is.string, is.string, partition);


var annotate = require('annotate');
var is = require('is-js');
    function atoi(chr) {
        return chr.length == 1? chr.charCodeAt(): undefined;
    }

    // TODO: is.char
    module.exports = annotate('atoi', 'Converts given ASCII character to a character code.')
        .on(is.string, atoi);


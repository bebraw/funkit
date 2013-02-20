var annotate = require('annotate');
var is = require('is-js');
    function itoa(i) {
        return String.fromCharCode(i);
    }

    module.exports = annotate('itoa', 'Converts given ASCII code to a character.')
        .on(is.number, itoa);


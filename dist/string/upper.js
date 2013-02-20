var annotate = require('annotate');
var is = require('is-js');
    function upper(str) {
        return str.toUpperCase();
    }

    module.exports = annotate('upper', 'Converts given string to uppercase.')
        .on(is.string, upper);


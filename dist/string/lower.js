var annotate = require('annotate');
var is = require('is-js');
    function lower(str) {
        return str.toLowerCase();
    }

    module.exports = annotate('lower', 'Converts given string to lowercase.')
        .on(is.string, lower);


var annotate = require('annotate');
var is = require('is-js');
    function split(sep, str) {
        return str.split(sep);
    }

    module.exports = annotate('split', 'Splits using given separator.')
        .on(is.string, is.string, split);


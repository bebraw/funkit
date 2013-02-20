var annotate = require('annotate');
var is = require('is-js');
    function reverse(str) {
        return str.split('').reverse().join('');
    }

    module.exports = annotate('reverse', 'Reverses the order of the given string.')
        .on(is.string, reverse);


var annotate = require('annotate');
var is = require('is-js');
    // http://phpjs.org/functions/rtrim:507
    function rtrim(charlist, str) {
        charlist = !charlist? ' \\s\u00A0': (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
        var re = new RegExp('[' + charlist + ']+$', 'g');

        return (str + '').replace(re, '');
    }

    module.exports = annotate('rtrim', 'Trims given characters from the right side of the given string.')
        .on(is.string, is.string, rtrim);


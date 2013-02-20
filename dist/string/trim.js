var annotate = require('annotate');
var is = require('is-js');
var ltrim = require('./ltrim');
var rtrim = require('./rtrim');
    function trim(charlist, str) {
        return ltrim(charlist, rtrim(charlist, str));
    }

    module.exports = annotate('trim', 'Trims given characters from the ends of the given string.')
        .on(is.string, is.string, trim);


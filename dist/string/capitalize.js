var annotate = require('annotate');
var is = require('is-js');
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

    module.exports = annotate('capitalize', 'Capitalizes the first character of the given string.')
        .on(is.string, capitalize);


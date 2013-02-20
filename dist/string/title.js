var annotate = require('annotate');
var is = require('is-js');
var capitalize = require('./capitalize');
    function title(str) {
        return str.split(' ').map(capitalize).join(' ');
    }

    module.exports = annotate('title', 'Returns given string in a title format.')
        .on(is.string, title);


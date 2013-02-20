var annotate = require('annotate');
var is = require('is-js');
var id = require('./id');
    function all(cb, a) {
        return a.map(cb).filter(id).length == a.length;
    }

    module.exports = annotate('all', 'Performs given check on array. If all checks pass, returns true.')
        .on(is.fn, is.array, all);


var annotate = require('annotate');
var is = require('is-js');
var id = require('./id');
    function any(cb, a) {
        return a.map(cb).filter(id).length > 0;
    }

    module.exports = annotate('any', 'Performs given check on array. If any of the checks pass, returns true.')
        .on(is.fn, is.array, any);


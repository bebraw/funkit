var annotate = require('annotate');
var is = require('is-js');
    // TODO: is.any
    module.exports = annotate('index', 'Returns the index of first matching item')
        .on(is.array, is.array, function() {return -1;})
        .on(is.object, is.array, function() {return -1;})
        .on(function() {return true;}, is.array, function(item, arr) {
            return arr.indexOf(item);
        });


var annotate = require('annotate');
var is = require('is-js');
var id = require('../functional/id');
var copy = require('./copy');
    // http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/#comment-10679
    var deepcopy = annotate('deepcopy', 'Returns a deep copy')
        .on(is.array, function(o) {
            return copy(o);
        })
        .on(is.object, function(o) {
            var copy = o;

            for(var k in o) {
                copy[k] = deepcopy(o[k]);
            }

            return copy;
        })
        // TODO: is.any
        .on(function() {return true;}, id);
    module.exports = deepcopy;


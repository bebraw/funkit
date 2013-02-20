var annotate = require('annotate');
var range = require('../math/range');
var functional = require('../functional');
var op = require('../ops');
var is = require('is-js');
    var map = functional.map;
    var partial = functional.partial;

    function chunk(len, a) {
        if(isNaN(len)) return [];
        return map(function(k) {
            return a.slice(k, k + len);
        }, range(0, a.length, len));
    }

    module.exports = annotate('chunk', 'Chunks given array to pieces')
        .on(partial(op.gt, 0), is.array, chunk);


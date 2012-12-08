var suite = require('suite.js');
var f = require('funkit/array');

// TODO: figure out a nicer invariant for this
suite(f.index, function(op, item, arr) {
    return op(item, arr) >= -1;
});

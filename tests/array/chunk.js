var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/array');
var equals = require('funkit/ops/equals');

suite._amount = 1000;
suite._generator = g.any;

suite(f.chunk, function(op, len, arr) {
    return equals(f.flatten(op(len, arr)), arr);
});

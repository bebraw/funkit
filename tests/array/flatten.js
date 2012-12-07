var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/array');
var equals = require('funkit/ops/equals');

suite._amount = 1000;
suite._generator = g.any;

suite(f.flatten, function(op, arr) {
    return equals(f.flatten(f.chunk(3, arr)), arr);
});

var suite = require('suite.js');
var ops = require('funkit/operators');
var f = require('funkit/functional');

suite(f.partial(f.reduce, ops.add), [
    [[1, 2, 3]], 6
]);

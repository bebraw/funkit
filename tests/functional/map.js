var suite = require('suite.js');
var ops = require('funkit/operators');
var f = require('funkit/functional');

// XXX: mul is problematic due to args (takes i in count too!)
/*
suite(f.partial(f.map, f.partial(ops.mul, 2)), [
    [[1, 2, 3]], [2, 4, 6],
    {a: 1, b: 2, c: 3}, {a: 2, b: 4, c: 6}
]);
*/

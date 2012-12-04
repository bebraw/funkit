var suite = require('suite.js');
var ops = require('funkit/ops');
var f = require('funkit/functional');

suite(f.partial(f.filter, f.partial(ops.gte, 2)), [
    [[1, 2, 3]], [2, 3],
    {a: 1, b: 2, c: 3}, {b: 2, c: 3}
]);

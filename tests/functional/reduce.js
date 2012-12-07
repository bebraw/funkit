var suite = require('suite.js');
var ops = require('funkit/ops');
var f = require('funkit');

suite(f.partial(f.functional.reduce, ops.add), [
    [[1, 2, 3]], 6
]);

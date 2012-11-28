var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/array');

suite(partial(f.chunk, 2), [
    [[]], [],
    [[1]], [[1]],
    [[1, 2, 3]], [[1, 2], [3]],
    [['a', 2, 'c']], [['a', 2], ['c']]
]);

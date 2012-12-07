var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.functional.filter, f.partial(f.ops.gte, 2)), [
    [[1, 2, 3]], [2, 3],
    {a: 1, b: 2, c: 3}, {b: 2, c: 3}
]);

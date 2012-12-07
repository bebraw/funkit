var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.functional.any, f.id), [
    [['a', 'b', '']], true,
    [['a', 'b', 'c']], true,
    [[true, false, true]], true,
    [[false, false, false]], false,
    [[]], false
]);

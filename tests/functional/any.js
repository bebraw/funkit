var suite = require('suite.js');
var f = require('funkit/functional');

suite(f.partial(f.any, f.id), [
    ['foo'], false,
    [['a', 'b', '']], true,
    [['a', 'b', 'c']], true,
    [[true, false, true]], true,
    [[false, false, false]], false,
    [[]], false
]);

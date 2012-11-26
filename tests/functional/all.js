var suite = require('suite.js');
var f = require('funkit/functional');

suite(f.partial(f.all, f.id), [
    ['foo'], false,
    [['a', 'b', '']], false,
    [['a', 'b', 'c']], true,
    [[true, false, true]], false
]);

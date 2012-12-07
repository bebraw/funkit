var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.functional.all, f.id), [
    [['a', 'b', '']], false,
    [['a', 'b', 'c']], true,
    [[true, false, true]], false
]);

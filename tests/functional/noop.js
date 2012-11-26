var suite = require('suite.js');
var f = require('funkit/functional');

suite(f.noop, [
    'a', undefined,
    24, undefined,
    ['foo'], undefined,
    [['a', 'b', '']], undefined,
    [['a', 'b', 'c']], undefined,
    [[true, false, true]], undefined
]);

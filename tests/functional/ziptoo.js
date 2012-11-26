var suite = require('suite.js');
var f = require('funkit/functional');

suite(f.ziptoo, [
    [[['a', 1], ['b', 2], ['c', 3]]], {a: 1, b: 2, c: 3}
]);

var suite = require('suite.js');
var f = require('funkit/functional');

suite(f.otozip, [
    {a: 4, b: 30}, [['a', 4], ['b', 30]]
]);

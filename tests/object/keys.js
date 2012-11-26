var suite = require('suite.js');
var f = require('funkit/object');

suite(f.keys, [
    {a: 2, b: 23, c: 31}, ['a', 'b', 'c']
]);

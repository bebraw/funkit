var suite = require('suite.js');
var f = require('funkit/string');

suite(f.atoi, [
    'a', 97,
    'foobar', undefined
]);

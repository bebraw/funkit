var suite = require('suite.js');
var f = require('funkit/string');

suite(f.lower, [
    'Foobar', 'foobar',
    'FOOBAR', 'foobar',
    'foobar', 'foobar'
]);

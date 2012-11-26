var suite = require('suite.js');
var f = require('funkit/string');

suite(f.reverse, [
    'foobar', 'raboof',
    '', '',
    'FOOBAR', 'RABOOF'
]);

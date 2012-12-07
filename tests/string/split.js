var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.string.split, '='), [
    'bar=foo', ['bar', 'foo'],
    'bar', ['bar'],
    'bar=foo=bar', ['bar', 'foo', 'bar']
]);

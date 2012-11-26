var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/string');

suite(partial(f.split, '='), [
    'bar=foo', ['bar', 'foo'],
    'bar', ['bar'],
    'bar=foo=bar', ['bar', 'foo', 'bar']
]);

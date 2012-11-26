var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/string');

suite(partial(f.partition, ' '), [
    'foo bar baz', ['foo', 'bar baz'],
    'zoo', ['zoo']
]);

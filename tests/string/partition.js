var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.string.partition, ' '), [
    'foo bar baz', ['foo', 'bar baz'],
    'zoo', ['zoo']
]);

var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/string');

suite(partial(f.separate, 'foo<a>barbar</a>a>zoo'), [
    ['<a>', '</a>a>'], 'barbar',
    ['foo', 'zoo'], '<a>barbar</a>a>',
    ['moo', 'moo'], ''
]);

var suite = require('suite.js');
var f = require('funkit');

suite(f.partial(f.string.separate, 'foo<a>barbar</a>a>zoo'), [
    ['<a>', '</a>a>'], 'barbar',
    ['foo', 'zoo'], '<a>barbar</a>a>',
    ['moo', 'moo'], ''
]);

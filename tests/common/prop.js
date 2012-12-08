var suite = require('suite.js');
var f = require('funkit');

suite(f.common.prop('foo'), [
    {foo: 4}, 4,
    {bar: 2}, undefined
]);

var suite = require('suite.js');
var f = require('funkit/types');

suite(f.isFunction, [
    'foo', false,
    [], false,
    function() {}, true,
    {}, false
]);

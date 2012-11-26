var suite = require('suite.js');
var f = require('funkit/types');

suite(f.isObject, [
    'foo', false,
    [], false,
    {}, true,
    function() {}, false
]);

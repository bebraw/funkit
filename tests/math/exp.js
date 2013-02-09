var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.exp, function(op, a) {
    return 0 <= op(a);
});

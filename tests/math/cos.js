var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.cos, function(op, a) {
    return f.between(op(a), -1, 1);
});

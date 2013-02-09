var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.floor, function(op, a) {
    return f.between(op(a), a - 1, a);
});

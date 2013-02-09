var suite = require('suite.js');
var f = require('funkit/math');

suite(f.clamp, function(op, a, min, max) {
    return f.between(op(a, min, max), min, max);
});

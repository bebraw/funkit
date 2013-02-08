var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.clamp, function(op, a, min, max) {
    var res = op(a, min, max);

    return min <= res && res <= max;
});

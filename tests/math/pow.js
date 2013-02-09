var suite = require('suite.js');
var f = require('funkit/math');

suite(f.pow, function(op, a, b) {
    var res = op(a, b);

    return a < 0 && b % 2? res <= 0: 0 <= res;
});

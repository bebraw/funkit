var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.cos, function(op, a) {
    var res = op(a);

    return -1 <= res && res <= 1;
});

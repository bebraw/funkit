var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit/math');

suite._amount = 1000;
suite._generator = g.any;

suite(f.choose, function(op, a) {
    var ret = op(a);

    return !ret || a.indexOf(ret) >= 0;
});

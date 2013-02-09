var suite = require('suite.js');
var arr = require('funkit/array');
var f = require('funkit/math');

suite(f.log, function(op, a) {
    return f.log(f.pow(Math.E, a));
});

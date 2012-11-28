var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/common');

function sum(a, b) {
    return a + b;
}

f.annotate(sum, Number, Number);

suite(partial(getMeta, sum), [
    '_doc', undefined,
    '_types', [Number, Number]
]);

f.annotate(sum, String, String, 'Appends two strings');

suite(partial(getMeta, sum), [
    '_doc', 'Appends two strings',
    '_types', [String, String]
]);

function getMeta(fn, name) {
    return fn[name];
}

var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var f = require('funkit/common');

function add(a, b) {
    return a + b;
}

f.annotate(add, Number, Number);

suite(partial(getMeta, add), [
    '_doc', undefined,
    '_invariants', [Number, Number]
]);

f.annotate(add, String, String, 'Appends two strings');

suite(partial(getMeta, add), [
    '_doc', 'Appends two strings',
    '_invariants', [String, String]
]);

function getMeta(fn, name) {
    return fn[name];
}

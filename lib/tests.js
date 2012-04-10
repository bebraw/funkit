#!/usr/bin/env node
var suite = require('suite.js');
var f = require('./funkit');

suite(f.partial(sum, 3), [
    1, 4,
    10, 13
]);

function sum(a, b) {
    return a + b;
}

suite(f.last, [
    [[1, 2, 3, 4]], 4,
    [[]], undefined
]);


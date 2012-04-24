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

suite(f.partial(f.ltrim, '  foobar'), [
    ' ', 'foobar',
    ' f', 'oobar',
    't', '  foobar'
]);

suite(f.partial(f.rtrim, 'foobar  '), [
    ' ', 'foobar',
    ' r', 'fooba',
    't', 'foobar  '
]);

suite(f.partial(f.partition, 'foo bar baz'), [
    ' ', ['foo', 'bar baz'],
    'zoo', ['foo bar baz', '']
]);

suite(f.capitalize, [
    'foobar', 'Foobar',
    'foobar foobar', 'Foobar foobar',
    'FOOBAR', 'Foobar'
]);

suite(f.title, [
    'foobar', 'Foobar',
    'foobar foobar', 'Foobar Foobar',
    'FOOBAR', 'Foobar'
]);


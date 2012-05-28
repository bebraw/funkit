#!/usr/bin/env node
var suite = require('suite.js');
var f = require('./funkit');
var g = require('generators.js');

suite(f.atoi, [
    'a', 97,
    'foobar', undefined
]);

suite(f.itoa, [
    97, 'a',
    'foo', undefined
]);

suite(f.isArray, [
    'foo', false,
    [[]], true,
    [[[], []]], true,
    {}, false
]);

suite(f.isDefined, [
    'foo', true,
    undefined, false,
    false, true,
    null, true
]);

suite(f.isFunction, [
    'foo', false,
    [], false,
    function() {}, true,
    {}, false
]);

suite(f.isObject, [
    'foo', false,
    [], false,
    {}, true,
    function() {}, false
]);

suite(f.isNumber, [
    'foo', false,
    3, true,
    [], false,
    {}, false
]);

suite(f.isString, [
    'foo', true,
    3, false,
    [], false,
    {}, false
]);

suite(f.between, [
    [1, 2, 1], true,
    [100, 1000, 2], false
]);

// might want to replace these with generators
suite(f.id, [
    false, false,
    true, true,
    'a', 'a'
]);

suite(f.partial(f.all, f.id), [
    ['foo'], false,
    [['a', 'b', '']], false,
    [['a', 'b', 'c']], true,
    [[true, false, true]], false
]);

suite(f.partial(f.any, f.id), [
    ['foo'], false,
    [['a', 'b', '']], true,
    [['a', 'b', 'c']], true,
    [[true, false, true]], true,
    [[false, false, false]], false,
    [[]], false
]);

suite(f.range, [
    0, [],
    1, [0],
    5, [0, 1, 2, 3, 4]
]);

suite(f.copy, suite.generate(1000,
    [g.list(100, g.number(1000))],
    function(op, a) {
        return op(a) != a;
    })
);

suite(f.copy, suite.generate(1000,
    [g.object(100, g.number(1000), g.number(1000))],
    function(op, a) {
        return op(a) != a;
    })
);

suite(f.copy, suite.generate(1000,
    [g.character],
    function(op, a) {
        return op(a) == a;
    })
);

suite(f.randint, suite.generate(1000,
    [g.number(1000), g.number(1000)],
    function(op, a, b) {
        var res = op(a, b);
        return f.between(-1000, 1000, res) || isNaN(res);
    })
);

suite(f.choose, suite.generate(1000,
    [g.list(100, g.number(1000))],
    function(op, a) {
        var ret = op(a);
        return f.between(-1000, 1000, ret) || !ret;
    })
);

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

suite(f.equals, suite.generate(1000,
    [g.structure],
    function(op, a) {
        return op(a, a);
    }
));


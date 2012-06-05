#!/usr/bin/env node
var suite = require('suite.js');
var f = require('./funkit');
var g = require('generators.js');

suite(f.partial(f.split, '='), [
    'bar=foo', ['bar', 'foo'],
    'bar', ['bar'],
    'bar=foo=bar', ['bar', 'foo', 'bar']
]);

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
        return op(a) != a && f.equals(op(a), a);
    })
);

suite(f.copy, suite.generate(1000,
    [g.object(100, g.number(1000), g.number(1000))],
    function(op, a) {
        return op(a) != a && f.equals(op(a), a);
    })
);

suite(f.copy, suite.generate(1000,
    [g.character],
    function(op, a) {
        return op(a) == a && f.equals(op(a), a);
    })
);

suite(f.deepcopy, suite.generate(1000,
    [g.structure],
    function(op, a) {
        return f.equals(a, op(a));
    })
);

suite(f.merge, [
    [[1, 2, 3], [2, 3, 4]], [1, 2, 3, 2, 3, 4],
    [{a: 2}, {b: 5}], {a: 2, b: 5},
    [{a: 2, b: 3}, {b: 5}], {a: 2, b: 5},
    [{a: {b: 3}}, {a: {b: 10}}], {a: {b: 10}}
]);

suite(checkChain, [
    [[1, 2, 3]], 10
]);

function checkChain(a) {
    var _ = f.chain(f.map, f.filter, f.reduce);

    return _(a).map(f.partial(f.mul, 2)).filter(f.partial(f.gt, 2)).reduce(f.sum).val();
}

suite(f.gt, [
    [3, 2], false,
    [3, 3], false,
    [2, 3], true
]);

suite(f.gte, [
    [3, 2], false,
    [3, 3], true,
    [2, 3], true
]);

suite(f.lt, [
    [3, 2], true,
    [3, 3], false,
    [2, 3], false
]);

suite(f.lte, [
    [3, 2], true,
    [3, 3], true,
    [2, 3], false
]);

suite(f.mul, [
    3, 3,
    [3, 4], 12,
    [1, -4, 2], -8
]);

suite(f.div, [
    3, 3,
    [10, 2], 5,
    [20, 2, 2], 5
]);

suite(f.sub, [
    3, 3,
    [3, 4], -1,
    [1, -4, 2], 3
]);

suite(f.sum, [
    3, 3,
    [3, 4], 7,
    [1, -4, 2], -1
]);

suite(f.keys, [
    {a: 2, b: 23, c: 31}, ['a', 'b', 'c']
]);

suite(f.values, [
    {a: 2, b: 23, c: 31}, [2, 23, 31]
]);

suite(f.partial(f.zip, ['a', 'b', 'c']), [
    [[1, 2, 3]], [['a', 1], ['b', 2], ['c', 3]]
]);

suite(f.ziptoo, [
    [[['a', 1], ['b', 2], ['c', 3]]], {a: 1, b: 2, c: 3}
]);

suite(f.otozip, [
    {a: 4, b: 30}, [['a', 4], ['b', 30]]
]);

suite(f.partial(f.map, f.partial(f.mul, 2)), [
    [[1, 2, 3]], [2, 4, 6],
    {a: 1, b: 2, c: 3}, {a: 2, b: 4, c: 6}
]);

suite(f.partial(f.filter, f.partial(f.gte, 2)), [
    [[1, 2, 3]], [2, 3],
    {a: 1, b: 2, c: 3}, {b: 2, c: 3}
]);

suite(f.partial(f.reduce, f.sum), [
    [[1, 2, 3]], 6
]);

suite(checkForEach, [
    [[1, 2, 3]], true,
    {a: 'b', b: 23, c: 'foo'}, true
]);

function checkForEach(o) {
    var found;

    if(f.isArray(o)) {
        found = [];

        f.forEach(o, function(v) {
            found.push(v);
        });
    }
    if(f.isObject(o)) {
        found = {};

        f.forEach(o, function(k, v) {
            found[k] = v;
        });
    }

    return f.equals(o, found);
}

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

suite(f.partial(f.equals, [1, 2, 3]), [
    [[1, 2, 3]], true,
    [[1, 2, 3, 5]], false
]);


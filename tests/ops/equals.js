var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit');

suite(f.ops.equals, suite.generate(1000,
    [g.structure],
    function(op, a) {
        return op(a, a);
    }
));

suite(f.partial(f.ops.equals, []), [
    [[]], true,
    [[3]], false
]);

suite(f.partial(f.ops.equals, [1, 2, 3]), [
    [[1, 2, 3]], true,
    [[1, 2, 3, 5]], false
]);

suite(f.partial(f.ops.equals, [{name: 'rofl'}, {name: 'lol'}]), [
    [[{name: 'rofl'}, {name: 'lol'}]], true,
    [[{name: 'rofl'}]], false,
    [[{}]], false,
    [[]], false
]);

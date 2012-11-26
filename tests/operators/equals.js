var suite = require('suite.js');
var partial = require('funkit/functional/partial');
var g = require('generators.js');
var f = require('funkit/operators');

suite(f.equals, suite.generate(1000,
    [g.structure],
    function(op, a) {
        return op(a, a);
    }
));

suite(partial(f.equals, [1, 2, 3]), [
    [[1, 2, 3]], true,
    [[1, 2, 3, 5]], false
]);

suite(partial(f.equals, [{name: 'rofl'}, {name: 'lol'}]), [
    [[{name: 'rofl'}, {name: 'lol'}]], true,
    [[{name: 'rofl'}]], false,
    [[{}]], false,
    [[]], false
]);

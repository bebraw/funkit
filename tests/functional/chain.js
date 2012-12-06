var suite = require('suite.js');
var ops = require('funkit/ops');
var f = require('funkit/functional');

suite(checkChain, [
    [[1, 5, 1]], 10
]);

function checkChain(a) {
    var _ = f.chain(f.map, f.filter, f.reduce);

    return _(a).map(f.partial(ops.mul, 2)).filter(f.partial(ops.gt, 2)).reduce(ops.add).val();
}

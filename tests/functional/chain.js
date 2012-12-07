var suite = require('suite.js');
var ops = require('funkit/ops');
var f = require('funkit/functional');
var capitalize = require('funkit/string/capitalize');

suite(checkChain, [
    [[1, 5, 1]], 10
]);

function checkChain(a) {
    var _ = f.chain(f.map, f.filter, f.reduce);

    return op(a, _);
}

suite(checkArrayChain, [
    [[1, 5, 1]], 10
]);

function checkArrayChain(a) {
    var _ = f.chain([f.map, f.filter, f.reduce]);

    return op(a, _);
}

function op(a, _) {
    return _(a).map(f.partial(ops.mul, 2)).filter(f.partial(ops.gt, 2)).reduce(ops.add).val();
}

suite(checkCapitalize, [
    'foobar', 'Foobar'
]);

function checkCapitalize(a) {
    var _ = f.chain(capitalize);

    return _(a).capitalize().val();
}

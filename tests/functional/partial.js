var is = require('is-js');
var suite = require('suite.js');
var g = require('generators.js');
var f = require('funkit');
var add = f.ops.add;
var gt = f.ops.gt;

suite(add, suite.generate(1000,
    [g.number(1000), g.number(1000)],
    function(op, a, b) {
        return op(a, b) == f.partial(op, a)(b);
    })
);

var gtZero = f.partial(gt, 0);

suite(f.partial(getProperty, gtZero), [
    '_name', gt._name,
    '_doc', gt._doc,
    '_preconditions', [[is.number], [is.fn]],
    '_postconditions', []
]);

function getProperty(fn, k) {
    return fn[k];
}

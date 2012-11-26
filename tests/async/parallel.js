var suite = require('suite.js');
var f = require('funkit/async');
var partial = require('funkit/functional/partial');

suite(suite.async(partial(f.parallel, getName)), [
    [['1', '2', '3']], ['1', '2', '3']
]);

function getName(name, done) {
    done(null, name);
}

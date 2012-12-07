var suite = require('suite.js');
var f = require('funkit');

suite(suite.async(f.partial(f.async.parallel, getName)), [
    [['1', '2', '3']], ['1', '2', '3']
]);

function getName(name, done) {
    done(null, name);
}

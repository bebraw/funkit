var chain = require('./functional/chain');
var each = require('./functional/each');
var values = require('./object/values');
    // GENERATED! DO NOT MODIFY!
    var functions = {
        'add': require('./ops/add'),
        'div': require('./ops/div'),
        'eq': require('./ops/eq'),
        'equals': require('./ops/equals'),
        'gt': require('./ops/gt'),
        'gte': require('./ops/gte'),
        'lt': require('./ops/lt'),
        'lte': require('./ops/lte'),
        'mul': require('./ops/mul'),
        'rdiv': require('./ops/rdiv'),
        'sub': require('./ops/sub')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    module.exports = ret;


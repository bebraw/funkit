// GENERATED! DO NOT MODIFY!
define(['require', 'funkit/functional/chain', 'funkit/functional/each', 'funkit/object/values', './ops/add',
        './ops/div',
        './ops/eq',
        './ops/equals',
        './ops/gt',
        './ops/gte',
        './ops/lt',
        './ops/lte',
        './ops/mul',
        './ops/rdiv',
        './ops/sub'],
        function(require, chain, each, values) {
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

    return ret;
});

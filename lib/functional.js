// GENERATED! DO NOT MODIFY!
define(['funkit/functional/chain', 'funkit/functional/each', 'funkit/object/values'],
        function(chain, each, values, require) {
    var functions = {
        'any': require('./functional/any'),
        'all': require('./functional/all'),
        'chain': require('./functional/chain'),
        'count': require('./functional/count'),
        'each': require('./functional/each'),
        'filter': require('./functional/filter'),
        'id': require('./functional/id'),
        'map': require('./functional/map'),
        'noop': require('./functional/noop'),
        'not': require('./functional/not'),
        'otozip': require('./functional/otozip'),
        'partial': require('./functional/partial'),
        'reduce': require('./functional/reduce'),
        'zip': require('./functional/zip'),
        'ziptoo': require('./functional/ziptoo')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    return ret;
});

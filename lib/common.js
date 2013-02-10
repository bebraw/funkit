// GENERATED! DO NOT MODIFY!
define(['funkit/functional/chain', 'funkit/functional/each', 'funkit/object/values'],
        function(chain, each, values, require) {
    var functions = {
        'copy': require('./common/copy'),
        'deepcopy': require('./common/deepcopy'),
        'err': require('./common/err'),
        'merge': require('./common/merge'),
        'prop': require('./common/prop')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    return ret;
});

// GENERATED! DO NOT MODIFY!
define(['require', 'funkit/functional/chain', 'funkit/functional/each', 'funkit/object/values', './common/copy',
        './common/deepcopy',
        './common/err',
        './common/merge',
        './common/prop'],
        function(require, chain, each, values) {
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

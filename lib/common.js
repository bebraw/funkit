define(['require', './functional/chain', './functional/each', './object/values', './common/copy',
        './common/deepcopy',
        './common/err',
        './common/merge',
        './common/prop'],
        function(require, chain, each, values) {
    // GENERATED! DO NOT MODIFY!
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

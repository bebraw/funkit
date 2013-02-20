var chain = require('./functional/chain');
var each = require('./functional/each');
var values = require('./object/values');
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

    module.exports = ret;


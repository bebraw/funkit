var chain = require('./functional/chain');
var each = require('./functional/each');
var values = require('./object/values');
    // GENERATED! DO NOT MODIFY!
    var functions = {
        'all': require('./functional/all'),
        'any': require('./functional/any'),
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

    module.exports = ret;


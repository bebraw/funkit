var chain = require('./functional/chain');
var each = require('./functional/each');
var values = require('./object/values');
    // GENERATED! DO NOT MODIFY!
    var functions = {
        'map': require('./async/map')
    };
    var ret = chain(values(functions));

    each(function(k, v) {
        ret[k] = v;
    }, functions);

    module.exports = ret;


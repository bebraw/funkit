define(function(require) {
    // GENERATED! DO NOT MODIFY!
    var ret = {
        'array': require('./array'),
        'async': require('./async'),
        'common': require('./common'),
        'functional': require('./functional'),
        'math': require('./math'),
        'object': require('./object'),
        'ops': require('./ops'),
        'string': require('./string')
    };

    var fun = ret.functional;
    ret.partial = fun.partial;
    ret.id = fun.id;
    ret.noop = fun.noop;

    return ret;
});

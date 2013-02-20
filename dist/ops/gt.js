var annotate = require('annotate');
var is = require('is-js');
    function gt(a, b) {
        return a < b;
    }

    module.exports = annotate('gt', 'Greater than')
        .on(is.number, is.number, gt)
        .on(is.number, is.fn, gt);


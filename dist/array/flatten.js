var annotate = require('annotate');
var is = require('is-js');
    function flatten(a) {
        var ret = [];

        a.forEach(function(k) {
            if(is.array(k)) {
                k.forEach(function(k2) {
                    ret.push(k2);
                });
            }
            else {
                ret.push(k);
            }
        });

        return ret;
    }

    module.exports = annotate('flatten', 'Flattens an array of arrays to a single array')
        .on(is.array, flatten);


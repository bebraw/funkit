var annotate = require('annotate');
var is = require('is-js');
var each = require('../functional/each');
var deepcopy = require('../common/deepcopy');
var id = require('../functional/id');
    module.exports = annotate('merge', 'Merges given objects')
        .on(is.array, is.array, function(a, b) {
            return a.concat(b);
        })
        .on(is.object, is.object, function(a, b) {
            var ret = {};

            each(get, a);
            each(get, b);

            function get(k, v) {
                if(k in ret) {
                    var cur = ret[k];

                    if(is.object(cur) && is.object(k)) {
                        each(function(key, val) {
                            cur[key] = val;
                        }, k);
                    }
                    else ret[k] = deepcopy(v);
                }
                else ret[k] = deepcopy(v);
            }

            return ret;
        })
        .on(any, any, id);

        // TODO: move this elsewhere
        function any() {
            return true;
        }


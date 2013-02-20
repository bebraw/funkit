var annotate = require('annotate');
var is = require('is-js');
var each = require('./each');
var map = require('./map');
    module.exports = annotate('filter', 'Filters using given callback')
        .on(is.fn, is.array, function(cb, o) {
            var ret = [];

            each(function(v, i) {if(cb(v, i)) ret.push(v);}, o);

            return ret;
        })
        .on(is.fn, is.object, function(cb, o) {
            var ret = {};

            each(function(k, v) {if(v) ret[k] = o[k];}, map(cb, o));

            return ret;
        });


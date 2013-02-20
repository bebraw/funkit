var annotate = require('annotate');
var is = require('is-js');
var keys = require('../object/keys');
var values = require('../object/values');
var ziptoo = require('./ziptoo');
var zip = require('./zip');
var each = require('./each');
    var map = annotate('map', 'Maps using given callback')
        .on(is.fn, is.array, function(cb, o) {
            var ret = [];

            each(function(v, i) {
                ret.push(cb(v, i));
            }, o);

            return ret;
        })
        .on(is.fn, is.object, function(cb, o) {
            return ziptoo(zip(keys(o), map(cb, values(o))));
        });
    module.exports = map;


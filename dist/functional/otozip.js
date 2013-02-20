var annotate = require('annotate');
var keys = require('../object/keys');
var values = require('../object/values');
var zip = require('./zip');
var is = require('is-js');
    function otozip(o) {
        return zip(keys(o), values(o));
    }

    module.exports = annotate('otozip', 'Converts given object into a zip.')
        .on(is.object, otozip);


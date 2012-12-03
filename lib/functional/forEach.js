define(['../types/isArray', '../types/isObject'], function(isArray, isObject) {
    function forEach(o, cb) {
        var i;

        if(isArray(o)) {
            for(i = 0, len = o.length; i < len; i++) {
                var v = o[i];

                cb(v, i);
            }
        }
        else if(isObject(o)) {
            i = 0;

            for(var k in o) {
                cb(k, o[k], i);
                i++;
            }
        }
    }
    return forEach;
});

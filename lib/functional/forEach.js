define(['../types/isArray', '../types/isObject'], function(isArray, isObject) {
    function forEach(o, cb) {
        if(isArray(o)) {
            o.forEach(cb);
        }
        else if(isObject(o)) {
            var i = 0;

            for(var k in o) {
                cb(k, o[k], i);
                i++;
            }
        }
    }
    return forEach;
});

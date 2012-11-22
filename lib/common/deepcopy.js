define(['../types/isArray', '../types/isObject'], function(isArray, isObject) {
    function deepcopy(o) {
        // http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/#comment-10679
        var copy = o;

        if(o && isObject(o)) {
            copy = isArray(o)? []: {};

            for(var k in o) {
                copy[k] = deepcopy(o[k]);
            }
        }

        return copy;
    }
    return deepcopy;
});

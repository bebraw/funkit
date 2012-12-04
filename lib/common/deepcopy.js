define(['../is'], function(is) {
    function deepcopy(o) {
        // http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/#comment-10679
        var copy = o;

        if(o && is.object(o)) {
            copy = is.array(o)? []: {};

            for(var k in o) {
                copy[k] = deepcopy(o[k]);
            }
        }

        return copy;
    }
    return deepcopy;
});

define(['is-js'], function(is) {
    function copy(o) {
        if(is.object(o)) {
            var ret = {};

            for(var k in o) ret[k] = o[k];

            return ret;
        }
        else if(is.array(o)) {
            return o.slice(0);
        }

        return o;
    }
    return copy;
});

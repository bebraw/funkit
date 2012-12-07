define(['is-js'], function(is) {
    function each(cb, o) {
        var i;

        if(is.array(o)) {
            for(i = 0, len = o.length; i < len; i++) {
                var v = o[i];

                cb(v, i);
            }
        }
        else if(is.object(o)) {
            i = 0;

            for(var k in o) {
                cb(k, o[k], i);
                i++;
            }
        }
    }
    return each;
});

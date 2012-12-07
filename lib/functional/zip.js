define(['is-js'], function(is) {
    function zip(a, b) {
        if(!(is.array(a) && is.array(b))) return;
        var ret = [];

        for(var i = 0, len = Math.min(a.length, b.length); i < len; i++) {
            ret.push([a[i], b[i]]);
        }

        return ret;
    }
    return zip;
});

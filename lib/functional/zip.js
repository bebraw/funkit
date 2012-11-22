define(['../types/isArray'], function(isArray) {
    function zip(a, b) {
        if(!(isArray(a) && isArray(b))) return;
        var ret = [];

        for(var i = 0, len = Math.min(a.length, b.length); i < len; i++) {
            ret.push([a[i], b[i]]);
        }

        return ret;
    }
    return zip;
});

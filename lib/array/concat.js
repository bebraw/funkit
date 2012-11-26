define(['../types/isArray'], function(isArray) {
    function concat(a) {
        var ret = [];

        a.forEach(function(k) {
            if(isArray(k)) {
                k.forEach(function(k2) {
                    ret.push(k2);
                });
            }
            else {
                ret.push(k);
            }
        });

        return ret;
    }
    return concat;
});

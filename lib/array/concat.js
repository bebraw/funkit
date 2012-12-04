define(['../is'], function(is) {
    function concat(a) {
        var ret = [];

        if(!a) return;

        a.forEach(function(k) {
            if(is.array(k)) {
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

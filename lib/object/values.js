define(['../is'], function(is) {
    function values(o) {
        if(!is.object(o)) return;
        var ret = [];

        for(var k in o) ret.push(o[k]);

        return ret;
    }
    return values;
});

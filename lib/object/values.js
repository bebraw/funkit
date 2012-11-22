define(['../types/isObject'], function(isObject) {
    function values(o) {
        if(!isObject(o)) return;
        var ret = [];

        for(var k in o) ret.push(o[k]);

        return ret;
    }
    return values;
});

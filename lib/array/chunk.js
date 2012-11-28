define(['../math/range'], function(range) {
    function chunk(len, a) {
        var ret = [];

        range(0, a.length, len).forEach(function(k, i) {
            ret.push(a.slice(k, k + len));
        });

        return ret;
    }
    return chunk;
});

define(['../math/range', '../functional/map'], function(range, map) {
    function chunk(len, a) {
        if(len <= 0) return a;

        return map(function(k) {
            return a.slice(k, k + len);
        }, range(0, a.length, len));
    }
    return chunk;
});

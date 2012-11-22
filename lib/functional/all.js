define(['../types/isArray'], function(isArray) {
    function all(cb, a) {
        if(!isArray(a)) return false;
        return a.map(cb).filter(id).length == a.length;
    }
    return all;
});

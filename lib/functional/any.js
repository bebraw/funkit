define(['../types/isArray', '../functional/id'], function(isArray, id) {
    function any(cb, a) {
        if(!isArray(a)) return false;
        return a.map(cb).filter(id).length > 0;
    }
    return any;
});

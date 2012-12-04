define(['../is', '../functional/id'], function(is, id) {
    function any(cb, a) {
        if(!is.array(a)) return false;
        return a.map(cb).filter(id).length > 0;
    }
    return any;
});

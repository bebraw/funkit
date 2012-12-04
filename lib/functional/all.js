define(['../is', '../functional/id'], function(is, id) {
    function all(cb, a) {
        if(!is.array(a)) return false;
        return a.map(cb).filter(id).length == a.length;
    }
    return all;
});

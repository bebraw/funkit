define(['../is'], function(is) {
    function keys(o) {
        if(is.object(o)) return Object.keys(o);
    }
    return keys;
});

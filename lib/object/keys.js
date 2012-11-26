define(['../types/isObject'], function(isObject) {
    function keys(o) {
        if(isObject(o)) return Object.keys(o);
    }
    return keys;
});

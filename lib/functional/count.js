define(['../types/isArray', '../types/isObject', '../object/keys'], function(isArray, isObject, keys) {
    function count(o) {
        if(isArray(o)) return o.length;
        if(isObject(o)) return keys(o).length;
    }
    return count;
});

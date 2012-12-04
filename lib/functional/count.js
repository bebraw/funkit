define(['../is', '../object/keys'], function(is, keys) {
    function count(o) {
        if(is.array(o)) return o.length;
        if(is.object(o)) return keys(o).length;
    }
    return count;
});

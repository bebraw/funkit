define(['annotate.js', 'is-js', '../object/keys', '../common/prop'],
        function(annotate, is, keys, prop) {
    return annotate('count', 'Counts the amount of items in given object')
        .on(is.array, prop('length'))
        .on(is.object, function(o) {
            return keys(o).length;
        });
});

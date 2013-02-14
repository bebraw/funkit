define(['annotate', 'is-js', '../object/keys'],
        function(annotate, is, keys) {
    return annotate('count', 'Counts the amount of items in given object')
        .on(is.array, function(o) {
            return o.length;
        })
        .on(is.object, function(o) {
            return keys(o).length;
        });
});

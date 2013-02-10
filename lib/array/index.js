define(['annotate', 'is-js'], function(annotate, is) {
    // TODO: is.any
    return annotate('index', 'Returns the index of first matching item')
        .on(is.array, is.array, function() {return -1;})
        .on(is.object, is.array, function() {return -1;})
        .on(function() {return true;}, is.array, function(item, arr) {
            return arr.indexOf(item);
        });
});

define(['annotate', 'is-js', '../functional'],
       function(annotate, is, functional) {
    return annotate('prop', 'Returns a function that gets given property')
        .on(is.string, function(name) {
            return function(o) {
                return o[name];
            };
        });
});

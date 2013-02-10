define(['annotate', 'is-js'], function(annotate, is) {
    function last(a) {
        return a[a.length - 1];
    }

    return annotate('last', 'Returns the last item of an array')
        .on(is.array, last);
});

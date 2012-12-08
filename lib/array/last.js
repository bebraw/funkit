define(['annotate.js', 'is-js'], function(annotate, is) {
    function last(a) {
        return a[a.length - 1];
    }

    return annotate('Returns the last item of an array.')
        .on(is.array, last);
});

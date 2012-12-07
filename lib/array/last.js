define(['annotate.js', 'is-js'], function(annotate, is) {
    function last(a) {
        return a[a.length - 1];
    }

    return annotate(last, is.array, "Returns the last item of an array.");
});

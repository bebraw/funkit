define(['annotate', 'is-js'], function(annotate, is) {
    function gt(a, b) {
        return a < b;
    }

    return annotate('gt', 'Greater than')
        .on(is.number, is.number, gt)
        .on(is.number, is.fn, gt);
});

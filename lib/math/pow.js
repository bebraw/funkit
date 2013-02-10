define(['annotate', 'is-js'], function(annotate, is) {
    return annotate('pow', 'Returns base to the exponent power, that is, base^exponent')
        .on(is.number, is.number, Math.pow);
});

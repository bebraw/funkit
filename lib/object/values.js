define(['annotate', 'is-js'], function(annotate, is) {
    function values(o) {
        var ret = [];

        for(var k in o) ret.push(o[k]);

        return ret;
    }

    return annotate('values', 'Returns values of the given object.')
        .on(is.object, values);
});

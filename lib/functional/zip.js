define(['annotate.js', 'is-js'], function(annotate, is) {
    function zip(a, b) {
        var ret = [];

        for(var i = 0, len = Math.min(a.length, b.length); i < len; i++) {
            ret.push([a[i], b[i]]);
        }

        return ret;
    }

    return annotate(zip, is.array, is.array, "Converts given arrays into a zip.");
});

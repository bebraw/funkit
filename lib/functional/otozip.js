define(['annotate', '../object/keys', '../object/values', './zip', 'is-js'],
       function(annotate, keys, values, zip, is) {
    function otozip(o) {
        return zip(keys(o), values(o));
    }

    return annotate('otozip', 'Converts given object into a zip.')
        .on(is.object, otozip);
});

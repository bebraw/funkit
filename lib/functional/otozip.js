define(['annotate.js', '../object/keys', '../object/values', './zip', 'is-js'],
       function(annotate, keys, values, zip, is) {
    function otozip(o) {
        return zip(keys(o), values(o));
    }

    return annotate(otozip, is.object, "Converts given object into a zip.");
});

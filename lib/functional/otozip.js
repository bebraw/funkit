define(['../object/keys', '../object/values', './zip'], function(keys, values, zip) {
    function otozip(o) {
        return zip(keys(o), values(o));
    }
    return otozip;
});

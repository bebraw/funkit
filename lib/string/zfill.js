define(function() {
    function zfill(amount, str) {
        var pad = '';
        str += '';

        while(pad.length < amount - str.length) pad += '0';

        return pad + str;
    }
    return zfill;
});

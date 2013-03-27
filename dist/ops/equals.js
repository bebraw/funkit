var is = require('is-js');
    // http://stackoverflow.com/questions/201183/how-do-you-determine-equality-for-two-javascript-objects
    function equals(a, b) {
        function checkArray(n, m) {
            var i, len;

            for(i = 0, len = n.length; i < len; i++) {
                if(!equals(n[i], m[i])) return false;
            }

            return true;
        }

        function checkObject(n, m) {
            var i;

            for(i in n) {
                if(n.hasOwnProperty(i)) {
                    if(!m.hasOwnProperty(i)) return false;
                    if(!equals(n[i], m[i])) return false;
                }
            }

            return true;
        }

        if(!is.set(a) && !is.set(b)) return true;
        if(!is.set(a) || !is.set(b)) return false;
        if(is.array(a) && is.array(b)) return checkArray(a, b) && checkArray(b, a);
        if(!is.array(a) && is.object(a) && !is.array(b) && is.object(b)) return checkObject(a, b) && checkObject(b, a);
        if(!is.array(a) && !is.object(a) && !is.string(a) && isNaN(a)) return true;

        return a === b;
    }
    module.exports = equals;


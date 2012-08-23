exports.isArray = isArray;
exports.isDefined = isDefined;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isNaN = _isNaN;

function isArray(input) {return Array.isArray(input);}
function isDefined(input) {return typeof input !== "undefined";}
function isFunction(input) {return typeof input === "function";}
function isNumber(input) {return typeof input === "number";}
function isString(input) {return typeof input === "string";}
function _isNaN(input) {
    return isString(input)? false: isNaN(input);
}

// http://phpjs.org/functions/is_object:450
function isObject(mixed_var) {
    if (Object.prototype.toString.call(mixed_var) === '[object Array]') {
            return false;
    }
    return mixed_var !== null && typeof mixed_var == 'object';
}

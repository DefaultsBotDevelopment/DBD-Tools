"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertUtils = exports.toBoolean = exports.hexToDecimal = void 0;
/**
 * @description Convert a hex color to decimal.
 * @example convertHexToDecimal('#FFFFFF') // returns 16777215
 */
function hexToDecimal(hex) {
    // remove the # from the hex color
    hex = hex.replace('#', '');
    // convert the hex color to decimal
    return parseInt(hex, 16);
}
exports.hexToDecimal = hexToDecimal;
/**
 * Parse the data to a boolean
 *
 * @param data - Data to parse as a boolean. Can be a boolean, string or number
 * @param options - Options for allowing different data types to be converted to a boolean
 * @returns - Returns the parsed boolean, or null if the data could not be parsed as a boolean
 */
function toBoolean(data, options) {
    const lowerData = typeof data === 'string' ? data.toLowerCase() : '';
    const lowerTrueValues = options.custom.true.map((value) => value.toLowerCase());
    const lowerFalseValues = options.custom.false.map((value) => value.toLowerCase());
    if (options.boolean && typeof data === 'boolean')
        return data;
    if (options.number && typeof data === 'number')
        return data === 1 ? true : data === 0 ? false : null;
    if (options.string && typeof data === 'string') {
        if (lowerData === 'true')
            return true;
        if (lowerData === 'false')
            return false;
    }
    if (options.custom) {
        if (lowerTrueValues.includes(lowerData))
            return true;
        if (lowerFalseValues.includes(lowerData))
            return false;
    }
    return null;
}
exports.toBoolean = toBoolean;
exports.ConvertUtils = {
    hexToDecimal,
    toBoolean,
};
exports.default = {
    hexToDecimal,
    toBoolean,
};

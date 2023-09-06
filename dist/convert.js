"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToDecimal = void 0;
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
exports.default = {
    hexToDecimal,
};

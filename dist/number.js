"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = exports.getRandom = void 0;
/**
 * @description Generate a random number between min and max (both inclusive).
 * @returns {number} - a random number between min and max (both inclusive)
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.getRandom = getRandom;
exports.NumberUtils = {
    getRandom,
};
exports.default = {
    getRandom,
};

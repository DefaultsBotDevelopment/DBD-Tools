"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseUtils = exports.parseDecimalColors = exports.parseHslColors = exports.parseRgbColors = exports.parseHexColors = exports.parseEmojis = void 0;
/**
 * @description Parses all emojis and returns all the emojis in an array.
 * @example parseEmojis('Hello World! 🌍') // returns [ '🌍' ]
 */
function parseEmojis(text) {
    // create a regular expression to match all emojis
    const regex = /\p{Emoji}/gu;
    // return an array of all the matched emojis in the string
    return text.match(regex) || [];
}
exports.parseEmojis = parseEmojis;
/**
 * @description Parses all hex colors and returns all the hex colors in an array.
 * @example parseHexColors('Hello World! #FFFFFF') // returns [ '#FFFFFF' ]
 */
function parseHexColors(text) {
    // create a regular expression to match all hex colors
    const regex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
    // return an array of all the matched hex colors in the string
    return text.match(regex) || [];
}
exports.parseHexColors = parseHexColors;
/**
 * @description Parse all rgb colors and returns all the rgb colors in an array.
 * @example parseRgbColors('Hello World! rgb(255, 255, 255)') // returns [ 'rgb(255, 255, 255)' ]
 */
function parseRgbColors(text) {
    // create a regular expression to match all rgb colors
    const regex = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/g;
    // return an array of all the matched rgb colors in the string
    return text.match(regex) || [];
}
exports.parseRgbColors = parseRgbColors;
/**
 * @description Parse all hsl colors and returns all the hsl colors in an array.
 * @example parseHslColors('Hello World! hsl(0, 100%, 50%)') // returns [ 'hsl(0, 100%, 50%)' ]
 */
function parseHslColors(text) {
    // create a regular expression to match all hsl colors
    const regex = /hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)/g;
    // return an array of all the matched hsl colors in the string
    return text.match(regex) || [];
}
exports.parseHslColors = parseHslColors;
/**
 * @description Parse all decimal colors and returns all the decimal colors in an array.
 * @example parseDecimalColors('Hello World! 16777215') // returns [ '16777215' ]
 */
function parseDecimalColors(text) {
    // create a regular expression to match all decimal colors
    const regex = /(\d{1,8})/g;
    // return an array of all the matched decimal colors in the string
    return text.match(regex) || [];
}
exports.parseDecimalColors = parseDecimalColors;
exports.ParseUtils = {
    parseEmojis,
    parseHexColors,
    parseRgbColors,
    parseHslColors,
    parseDecimalColors,
};
exports.default = {
    parseEmojis,
    parseHexColors,
    parseRgbColors,
    parseHslColors,
    parseDecimalColors,
};

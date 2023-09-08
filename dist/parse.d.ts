/**
 * @description Parses all emojis and returns all the emojis in an array.
 * @example parseEmojis('Hello World! 🌍') // returns [ '🌍' ]
 */
export declare function parseEmojis(text: string): string[];
/**
 * @description Parses all hex colors and returns all the hex colors in an array.
 * @example parseHexColors('Hello World! #FFFFFF') // returns [ '#FFFFFF' ]
 */
export declare function parseHexColors(text: string): string[];
/**
 * @description Parse all rgb colors and returns all the rgb colors in an array.
 * @example parseRgbColors('Hello World! rgb(255, 255, 255)') // returns [ 'rgb(255, 255, 255)' ]
 */
export declare function parseRgbColors(text: string): string[];
/**
 * @description Parse all hsl colors and returns all the hsl colors in an array.
 * @example parseHslColors('Hello World! hsl(0, 100%, 50%)') // returns [ 'hsl(0, 100%, 50%)' ]
 */
export declare function parseHslColors(text: string): string[];
/**
 * @description Parse all decimal colors and returns all the decimal colors in an array.
 * @example parseDecimalColors('Hello World! 16777215') // returns [ '16777215' ]
 */
export declare function parseDecimalColors(text: string): string[];
export declare const ParseUtils: {
    parseEmojis: typeof parseEmojis;
    parseHexColors: typeof parseHexColors;
    parseRgbColors: typeof parseRgbColors;
    parseHslColors: typeof parseHslColors;
    parseDecimalColors: typeof parseDecimalColors;
};
declare const _default: {
    parseEmojis: typeof parseEmojis;
    parseHexColors: typeof parseHexColors;
    parseRgbColors: typeof parseRgbColors;
    parseHslColors: typeof parseHslColors;
    parseDecimalColors: typeof parseDecimalColors;
};
export default _default;
//# sourceMappingURL=parse.d.ts.map
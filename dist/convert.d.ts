/**
 * @description Convert a hex color to decimal.
 * @example convertHexToDecimal('#FFFFFF') // returns 16777215
 */
export declare function hexToDecimal(hex: string): number;
/**
 * Parse the data to a boolean
 *
 * @param data - Data to parse as a boolean. Can be a boolean, string or number
 * @param options - Options for allowing different data types to be converted to a boolean
 * @returns - Returns the parsed boolean, or null if the data could not be parsed as a boolean
 */
export declare function toBoolean(data: boolean | string | number, options: {
    boolean: boolean;
    string?: boolean;
    number?: boolean;
    custom: {
        true: string[];
        false: string[];
    };
}): boolean | null;
export declare const ConvertUtils: {
    hexToDecimal: typeof hexToDecimal;
    toBoolean: typeof toBoolean;
};
declare const _default: {
    hexToDecimal: typeof hexToDecimal;
    toBoolean: typeof toBoolean;
};
export default _default;
//# sourceMappingURL=convert.d.ts.map
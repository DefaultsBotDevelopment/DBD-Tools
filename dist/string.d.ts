/**
 * @description Format text to a specific casing.
 * @example formatText('hello world', 'pascal'); // returns 'Hello World'
 */
export declare function formatText(text: string, type: 'pascal' | 'camel' | 'snake' | 'kebab'): string;
/**
 * @description Returns an ID as a String with the specified amount of characters.
 * @example generateId(5); // returns '12345'
 */
export declare function generateId(size: number): string;
/**
 * @description Generates a random UUID.
 * @example generateUuid(); // returns 'e7674566-4d6d-40d4-a7f8-ed643f2e87ad'
 */
export declare function generateUuid(): string;
/**
 * @description Replaces multiple things in one string.
 * @example let string = replacer('Hello {name}, how are you?', { name: 'John' });
 */
export declare function replacer(string: string, options: {
    [key: string]: any;
}): string;
export declare const StringUtils: {
    formatText: typeof formatText;
    generateId: typeof generateId;
    generateUuid: typeof generateUuid;
    replacer: typeof replacer;
};
declare const _default: {
    formatText: typeof formatText;
    generateId: typeof generateId;
    generateUuid: typeof generateUuid;
    replacer: typeof replacer;
};
export default _default;
//# sourceMappingURL=string.d.ts.map
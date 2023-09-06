"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacer = exports.generateUuid = exports.generateId = exports.formatText = void 0;
/**
 * @description Format text to a specific casing.
 * @example formatText('hello world', 'pascal'); // returns 'Hello World'
 */
function formatText(text, type) {
    // split the text into an array
    let array = text.split(' ');
    // check the type and return the correct casing
    switch (type) {
        case 'pascal': // pascal casing
            return array
                .map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
                .join(' ');
        case 'camel': // camel casing
            return array
                .map((word, index) => {
                if (index === 0)
                    return word;
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
                .join(' ');
        case 'snake': // snake casing
            return array.join('_');
        case 'kebab': // kebab casing
            return array.join('-');
        default:
            return text;
    }
}
exports.formatText = formatText;
/**
 * @description Returns an ID as a String with the specified amount of characters.
 * @example generateId(5); // returns '12345'
 */
function generateId(size) {
    return Math.random()
        .toString()
        .substring(2, size + 2);
}
exports.generateId = generateId;
/**
 * @description Generates a random UUID.
 * @example generateUuid(); // returns 'e7674566-4d6d-40d4-a7f8-ed643f2e87ad'
 */
function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.generateUuid = generateUuid;
/**
 * @description Replaces multiple things in one string.
 * @example let string = replacer('Hello {name}, how are you?', { name: 'John' });
 */
function replacer(string, options) {
    options.name;
    for (const [name, value] of Object.entries(options)) {
        string = string.replaceAll(`{${name}}`, value);
    }
    return string;
}
exports.replacer = replacer;
exports.default = {
    formatText,
    generateId,
    generateUuid,
    replacer,
};

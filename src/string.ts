/**
 * @description Format text to a specific casing. The casing types are: pascal, camel, snake, kebab. If there are special characters in the text, they will be removed.
 * @example formatText('hello world', 'pascal'); // returns 'Hello World'
 */
export function formatText(text: string, type: 'pascal' | 'camel' | 'snake' | 'kebab'): string {
	// check the type and return the correct casing
	switch (type) {
		case 'pascal': // pascal casing
			return text
				.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
				.replace(/\s+/g, '')
				.replace(/[^\w\s]/g, '');

		case 'camel': // camel casing
			return text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => (index === 0 ? match.toLowerCase() : match.toUpperCase())).replace(/\s+/g, '');

		case 'snake': // snake casing
			return text
				.toLowerCase()
				.replace(/\s+/g, '_')
				.replace(/[^\w\s]/g, '');

		case 'kebab': // kebab casing
			return text
				.toLowerCase()
				.replace(/\s+/g, '-')
				.replace(/[^\w\s-]/g, '');

		default:
			return text;
	}
}

/**
 * @description Returns an ID as a String with the specified amount of characters.
 * @example generateId(5); // returns '12345'
 */
export function generateId(size: number): string {
	return Math.random()
		.toString()
		.substring(2, size + 2);
}

/**
 * @description Generates a random UUID.
 * @example generateUuid(); // returns 'e7674566-4d6d-40d4-a7f8-ed643f2e87ad'
 */
export function generateUuid(): string {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

/**
 * @description Replaces multiple things in one string.
 * @example let string = replacer('Hello {name}, how are you?', { name: 'John' });
 */
export function replacer(string: string, options: { [key: string]: any }): string {
	options.name;
	for (const [name, value] of Object.entries(options)) {
		string = string.replaceAll(`{${name}}`, value);
	}
	return string;
}

export const StringUtils = {
	formatText,
	generateId,
	generateUuid,
	replacer,
};

export default {
	formatText,
	generateId,
	generateUuid,
	replacer,
};

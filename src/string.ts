/**
 * @description Format text to a specific casing.
 * @example formatText('hello world', 'pascal'); // returns 'Hello World'
 */
export function formatText(text: string, type: 'pascal' | 'camel' | 'snake' | 'kebab'): string {
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
					if (index === 0) return word;
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

export default {
	formatText,
	generateId,
	generateUuid,
	replacer,
};

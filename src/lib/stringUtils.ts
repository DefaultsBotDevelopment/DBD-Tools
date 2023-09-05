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
				.join('');

		case 'camel': // camel casing
			return array
				.map((word, index) => {
					if (index === 0) return word;
					return word.charAt(0).toUpperCase() + word.slice(1);
				})
				.join('');

		case 'snake': // snake casing
			return array.join('_');

		case 'kebab': // kebab casing
			return array.join('-');

		default:
			return text;
	}
}

/**
 * Returns an ID as a String with the specified amount of characters.
 * @param {Number} size amount of characters
 * @returns {Number} a random ID.
 */

export function generateId(size: number): string {
	return Math.random()
		.toString()
		.substring(2, size + 2);
}

/**
 * Generates a random UUID.
 * @returns {String} a random UUID.
 */

export function generateUuid(): string {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

/**
 * Replaces multiple things in one string.
 * @param {String} string The string that needs to be updated.
 * @param {Object} options A object with replacer strings.
 * @returns {String} updated string with all replacements applied.
 * @example let string = replacer('Hello {name}, how are you?', { name: 'John' });
 */

export function replacer(string: string, options: { [key: string]: any }): string {
	options.name;
	for (const [name, value] of Object.entries(options)) {
		string = string.replaceAll(`{${name}}`, value);
	}
	return string;
}

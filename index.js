// Main class for the module
class Utilities {
	// all strings functions.
	stringUtils = {
		/**
		 * Convert a String to Pascal Case format.
		 * @param {String} text
		 * @param {"pascal" | "camel" | "snake" | "kebab"} type
		 * @returns {String} Formatted String
		 */

		formatText(text, type) {
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
					break;
			}
		},

		//=====================================================================================

		/**
		 * Returns an ID as a String with the specified amount of characters.
		 * @param {Number} size amount of characters
		 * @returns {Number} a random ID.
		 */

		generateId(size) {
			return Math.random()
				.toString()
				.substring(2, size + 2);
		},

		//=====================================================================================

		/**
		 * Generates a random UUID.
		 * @returns {String} a random UUID.
		 */

		generateUuid() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (Math.random() * 16) | 0,
					v = c == 'x' ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			});
		},

		//=====================================================================================

		/**
		 * Replaces multiple things in one string.
		 * @param {String} string The string that needs to be updated.
		 * @param {Object} options A object with replacer strings.
		 * @returns {String} updated string with all replacements applied.
		 */

		replacer(string, options) {
			options.name;
			for (const [name, value] of Object.entries(options)) {
				string = string.replaceAll(name, value);
			}
			return string;
		},
	};
}

module.exports = Utilities;

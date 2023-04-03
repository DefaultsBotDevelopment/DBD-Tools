// Main class for the module
class Utilities {
	/**
	 * All String functions.
	 */

	StringUtils = {
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

	/**
	 * All Number functions.
	 */

	NumberUtils = {
		/**
		 * Get a random number between a min and max value.
		 * @param {Number} min the minimum value.
		 * @param {Number} max the maximum value.
		 * @returns {Number} a random number between the min and max value.
		 */

		getRandom(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		},
	};

	/**
	 * All Array functions.
	 */

	ArrayUtils = {
		/**
		 * Chunk a array into sub arrays.
		 * @param {Array} array the array that needs to be chunked.
		 * @param {Number} size a number of the chunk size.
		 * @returns {Array} a chunked array.
		 * @example let array = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
		 */

		chunk(array, size) {
			var results = [];
			while (array.length) {
				results.push(array.splice(0, size));
			}
			return results;
		},

		//=====================================================================================

		/**
		 * Match arrays to find intersections.
		 * @param {Array} array1 The first array.
		 * @param {Array} array2 The second array.
		 * @returns {Boolean} wether a array value intersects.
		 */

		hasMatches(array1, array2) {
			return array1.some((value) => array2.includes(value));
		},

		//=====================================================================================

		/**
		 * Remove duplicates from an array.
		 * @param {Array} array The array that needs to be cleaned.
		 * @returns {Array} a cleaned array.
		 */

		filterDuplicates(array) {
			return [...new Set(array)];
		},

		/**
		 * Get the intersections of two arrays.
		 * @param {Array} array1 The first array.
		 * @param {Array} array2 The second array.
		 * @returns {Array} an array with the intersections.
		 */

		getMatches(array1, array2) {
			return array1.filter((value) => array2.includes(value));
		},
	};

	/**
	 * All Object functions.
	 */

	ObjectUtils = {
		/**
		 * Get a value from an object with a path.
		 * @param {Object} object The object that needs to be searched.
		 * @param {String} path The path to the value.
		 * @returns {Any} the value of the path.
		 */

		getValue(object, path) {
			return path.split('.').reduce((obj, key) => obj && obj[key], object);
		},

		//=====================================================================================

		/**
		 * Set a value in an object with a path.
		 * @param {Object} object The object that needs to be updated.
		 * @param {String} path The path to the value.
		 * @param {Any} value The value that needs to be set.
		 * @returns {Object} the updated object.
		 * @note If Object does not contain the path, it will be created.
		 */

		setValue(object, path, value) {
			if (typeof path === 'string') path = path.split('.');
			if (path.length > 1) {
				var e = path.shift();
				ObjectUtils.setValue(object[e] || (object[e] = {}), path, value);
			} else object[path[0]] = value;
			return object;
		},

		//=====================================================================================

		/**
		 * Checks if an object has a specific key.
		 * @param {Object} object The object that needs to be checked.
		 * @param {String} key The key that needs to be checked.
		 * @returns {Boolean} wether the object has the key.
		 */

		hasKey(object, key) {
			return object.hasOwnProperty(key);
		},

		//=====================================================================================

		/**
		 * Checks if an object has a specific value.
		 * @param {Object} object The object that needs to be checked.
		 * @param {Any} value The value that needs to be checked.
		 * @returns {Boolean} wether the object has the value.
		 */

		hasValue(object, value) {
			return Object.values(object).includes(value);
		},

		//=====================================================================================

		/**
		 * Get the keys of an object.
		 * @param {Object} object The object that needs to be checked.
		 * @returns {Array} an array with the keys.
		 */

		getKeys(object) {
			return Object.keys(object);
		},

		//=====================================================================================

		/**
		 * Get the values of an object.
		 * @param {Object} object The object that needs to be checked.
		 * @returns {Array} an array with the values.
		 */

		getValues(object) {
			return Object.values(object);
		},

		// ===================================================================================================

		/**
		 * Gets all entries in an object.
		 * @param {Object} object The object that needs to be checked.
		 * @returns {Array} an array with the entries.
		 */

		getEntries(object) {
			return Object.entries(object);
		},
	};

	/**
	 * All Cache functions.
	 */

	CacheUtils = {
		/**
		 * Get cache file with its parsed json content.
		 * @param {String} path the path to the cache file.
		 * @returns {Object} Json parsed cache file.
		 * @example const cache = getCache('./cache.json');
		 */

		getCache(path) {
			let cache = fs.readFileSync(path);
			return JSON.parse(cache);
		},

		//=====================================================================================

		/**
		 * Update cache file.
		 * @param {Object} cache the cache file you wanna update
		 * @returns updates cache file
		 */

		updateCache(cache) {
			return new Promise(async (resolve, reject) => {
				fs.writeFile('./cache.json', JSON.stringify(cache, null, 2), function (err) {
					if (err) return reject(err);
					resolve(true);
				});
			});
		},
	};

	/**
	 * All Discord functions.
	 */

	DiscordUtils = {
		/**
		 * Format buttons into action rows
		 *
		 * @param {Array} buttons an array of button objects.
		 * @returns {Array} an array of action rows.
		 */

		formatButtons(buttons) {
			// chunk the buttons into 5 buttons per row.
			let rows = buttons.map((button, index) => {
				if (index % 5 === 0) return buttons.slice(index, index + 5);
			});

			// remove empty values from the array.
			rows = rows.filter((row) => row);

			// check if the amount of buttons is more than 25.
			if (buttons.length > 25) throw new Error('You can only have 25 buttons and 5 action rows per message.');

			// create action rows with the buttons.
			rows = rows.map((row) => {
				return {
					type: 1,
					components: row,
				};
			});

			return rows;
		},
	};

	/**
	 * All Utility functions.
	 */

	Utils = {
		/**
		 * Sleep function.
		 * @param {Number} ms the amount of milliseconds to sleep.
		 * @returns {Promise} a promise that resolves after the specified amount of milliseconds.
		 */

		sleep(ms) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		},
	};
}

// create a new class instance for the module
module.exports = new Utilities();

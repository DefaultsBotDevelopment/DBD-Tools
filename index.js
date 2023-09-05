const fs = require('fs');

// Main class for the module
class Utilities {
	/**
	 * All String functions.
	 */

	/**
	 * All Number functions.
	 */

	NumberUtils = {};

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

		//=====================================================================================

		/**
		 * Get the intersections of two arrays.
		 * @param {Array} array1 The first array.
		 * @param {Array} array2 The second array.
		 * @returns {Array} an array with the intersections.
		 */

		getMatches(array1, array2) {
			return array1.filter((value) => array2.includes(value));
		},

		//=====================================================================================

		/**
		 * Shuffle an array.
		 * @param {Array} array The array that needs to be shuffled.
		 * @returns {Array} a shuffled array.
		 * @example let array = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		 */

		shuffle(array) {
			return array.sort(() => Math.random() - 0.5);
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

		// ===================================================================================================

		/**
		 * Flattens an object.
		 * @param {Object} object The object that needs to be flattened.
		 * @returns {Object} a flattened object.
		 * @example let object = flattenObject({ a: { b: { c: 1 } } });
		 * console.log(object); // { 'a_b_c': 1 }
		 */

		flatten(object) {
			const toReturn = {};

			for (const i in object) {
				if (!object.hasOwnProperty(i)) continue;

				if (typeof object[i] === 'object') {
					let { ObjectUtils } = new Utilities();
					const flatObject = ObjectUtils.flatten(object[i]);
					for (const x in flatObject) {
						if (!flatObject.hasOwnProperty(x)) continue;

						toReturn[i + '_' + x] = flatObject[x];
					}
				} else {
					toReturn[i] = object[i];
				}
			}
			return toReturn;
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

		//=====================================================================================

		formatSelects(custom_id, placeholder, min_values, max_values, options) {
			// chunk the options into 25 options per row.
			let chunks = options.map((option, index) => {
				if (index % 25 === 0) return options.slice(index, index + 25);
			});
			// remove empty values from the array.
			chunks = chunks.filter((row) => row);
			// check if the amount of options is more than 100.
			if (options.length > 100) throw new Error('You can only have 100 options and 5 action rows per message.');
			// create action rows with the chunks.
			let rows = chunks.map((row, index) => {
				return {
					type: 1,
					components: [
						{
							type: 3,
							custom_id: index > 0 ? `${custom_id + index}` : custom_id,
							placeholder: placeholder || 'Select an option',
							min_values: min_values || 1,
							max_values: max_values || 1,
							options: row,
						},
					],
				};
			});
			return rows;
		},

		//=====================================================================================

		/**
		 * get user mentions from string.
		 * @param {String} text the text that needs to be parsed.
		 * @param {'users'|'roles'|'channels'} type the type of mention that needs to be parsed.
		 * @returns {Array} an array with all the user mentions.
		 * @example const mentions = getUserMentions('Hello <@123456789>!', 'users');
		 */

		getMentions(text, type) {
			switch (type) {
				case 'users':
					let userMentions = text.match(/<@!?(\d{17,19})>/g);
					return userMentions?.map((mention) => mention.replace(/<@!?/, '').replace(/>/, '')) || [];
				case 'roles':
					let roleMentions = text.match(/<@&(\d{17,19})>/g);
					return roleMentions?.map((mention) => mention.replace(/<@&/, '').replace(/>/, '')) || [];
				case 'channels':
					let channelMentions = text.match(/<#(\d{17,19})>/g);
					return channelMentions?.map((mention) => mention.replace(/<#/, '').replace(/>/, '')) || [];
				default:
					throw new Error('Invalid mention type provided.');
			}
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

	/**
	 * All Parse functions.
	 */

	ParseUtils = {
		/**
		 * Parses all emojis and returns all the emojis in an array.
		 * @param {String} text The text that needs to be parsed.
		 * @returns {Array} an array with all the emojis.
		 * @example parseEmojis('Hello World! 🌍')
		 */

		parseEmojis(text) {
			// create a regular expression to match all emojis
			const regex = /[\u{1F300}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}]/gu;
			// return an array of all the matched emojis in the string
			return text.match(regex) || [];
		},

		//=====================================================================================

		/**
		 * Parses all hex colors and returns all the hex colors in an array.
		 * @param {String} text The text that needs to be parsed.
		 * @returns {Array} an array with all the hex colors.
		 * @example parseHexColors('Hello World! #FFFFFF')
		 */

		parseHexColors(text) {
			// create a regular expression to match all hex colors
			const regex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
			// return an array of all the matched hex colors in the string
			return text.match(regex) || [];
		},

		//=====================================================================================

		/**
		 * Parse all rgb colors and returns all the rgb colors in an array.
		 * @param {String} text The text that needs to be parsed.
		 * @returns {Array} an array with all the rgb colors.
		 * @example parseRgbColors('Hello World! rgb(255, 255, 255)')
		 */

		parseRgbColors(text) {
			// create a regular expression to match all rgb colors
			const regex = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/g;
			// return an array of all the matched rgb colors in the string
			return text.match(regex) || [];
		},

		//=====================================================================================

		/**
		 * Parse all hsl colors and returns all the hsl colors in an array.
		 * @param {String} text The text that needs to be parsed.
		 * @returns {Array} an array with all the hsl colors.
		 * @example parseHslColors('Hello World! hsl(0, 100%, 50%)')
		 */

		parseHslColors(text) {
			// create a regular expression to match all hsl colors
			const regex = /hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)/g;
			// return an array of all the matched hsl colors in the string
			return text.match(regex) || [];
		},

		//=====================================================================================

		/**
		 * Parse all decimal colors and returns all the decimal colors in an array.
		 * @param {String} text The text that needs to be parsed.
		 * @returns {Array} an array with all the decimal colors.
		 * @example parseDecimalColors('Hello World! 16777215')
		 */

		parseDecimalColors(text) {
			// create a regular expression to match all decimal colors
			const regex = /(\d{1,8})/g;
			// return an array of all the matched decimal colors in the string
			return text.match(regex) || [];
		},

		/**
		 * @description Converts milliseconds to a time object. If no options are provided, all time units will be included.
		 * @param {Number} timeInMs - time in milliseconds
		 * @param {Object} options - options object
		 * @param {Boolean} options.seconds - include seconds in the object
		 * @param {Boolean} options.minutes - include minutes in the object
		 * @param {Boolean} options.hours - include hours in the object
		 * @param {Boolean} options.days - include days in the object
		 * @param {Boolean} options.weeks - include weeks in the object
		 * @param {Boolean} options.months - include months in the object
		 * @param {Boolean} options.years - include years in the object
		 * @returns {(Object | null )} - returns the time object or null if invalid
		 * @example parseMilliseconds(1000, { seconds: true, minutes: true, hours: true, days: true, weeks: true, months: true, years: true })
		 */
		parseMilliseconds(
			timeInMs,
			options = {
				seconds: true,
				minutes: true,
				hours: true,
				days: true,
				weeks: true,
				months: true,
				years: true,
			}
		) {
			if (!timeInMs || isNaN(timeInMs) || timeInMs <= 0) return null;
			if (typeof options !== 'object') throw new TypeError('options must be an object.');
			// Check if options has any properties that are not valid
			for (const [name] of Object.entries(options)) {
				if (!['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'].includes(name)) throw new TypeError(`options.${name} is not a valid option.`);
			}
			// Check if options has any properties that are not booleans
			for (const [name, value] of Object.entries(options)) {
				if (typeof value !== 'boolean') throw new TypeError(`options.${name} must be a boolean.`);
			}

			const ONE_SECOND_MS = 1000;
			const ONE_MINUTE_MS = 60 * ONE_SECOND_MS;
			const ONE_HOUR_MS = 60 * ONE_MINUTE_MS;
			const ONE_DAY_MS = 24 * ONE_HOUR_MS;
			const ONE_WEEK_MS = 7 * ONE_DAY_MS;
			const ONE_MONTH_MS = 30 * ONE_DAY_MS;
			const ONE_YEAR_MS = 365 * ONE_DAY_MS;

			let returnObject = {};

			if (options.years) {
				const years = Math.floor(timeInMs / ONE_YEAR_MS);
				timeInMs %= ONE_YEAR_MS;
				returnObject.years = years;
			}
			if (options.months) {
				const months = Math.floor(timeInMs / ONE_MONTH_MS);
				timeInMs %= ONE_MONTH_MS;
				returnObject.months = months;
			}
			if (options.weeks) {
				const weeks = Math.floor(timeInMs / ONE_WEEK_MS);
				timeInMs %= ONE_WEEK_MS;
				returnObject.weeks = weeks;
			}
			if (options.days) {
				const days = Math.floor(timeInMs / ONE_DAY_MS);
				timeInMs %= ONE_DAY_MS;
				returnObject.days = days;
			}
			if (options.hours) {
				const hours = Math.floor(timeInMs / ONE_HOUR_MS);
				timeInMs %= ONE_HOUR_MS;
				returnObject.hours = hours;
			}
			if (options.minutes) {
				const minutes = Math.floor(timeInMs / ONE_MINUTE_MS);
				timeInMs %= ONE_MINUTE_MS;
				returnObject.minutes = minutes;
			}
			if (options.seconds) {
				const seconds = Math.floor(timeInMs / ONE_SECOND_MS);
				returnObject.seconds = seconds;
			}

			return returnObject;
		},
	};

	/**
	 * All Convert functions.
	 */

	ConvertUtils = {
		/**
		 * Convert a hex color to decimal.
		 * @param {String} hex The hex color that needs to be converted.
		 * @returns {Number} The decimal color.
		 * @example convertHexToDecimal('#FFFFFF')
		 * convertHexToDecimal('0xFFFFFF')
		 * convertHexToDecimal('FFFFFF')
		 */

		hexToDecimal(hex) {
			// remove the # from the hex color
			hex = hex.replace('#', '');
			// convert the hex color to decimal
			return parseInt(hex, 16);
		},
	};
}

// let { ConvertUtils } = new Utilities();

// create a new class instance for the module
module.exports = new Utilities();

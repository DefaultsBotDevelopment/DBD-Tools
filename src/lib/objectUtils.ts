/**
 * Get a value from an object with a path.
 * @param {Object} object The object that needs to be searched.
 * @param {String} path The path to the value.
 * @returns {Any} the value of the path.
 */

// export function getValue<T>(object: object, path: string): T | undefined {
//     return path.split('.').reduce((obj, key) => (obj !== null && obj !== undefined ? obj[key] : undefined), object);
// };

export function getValue<T>(obj: Record<string, any>, path: string): T | undefined {
	return path.split('.').reduce((current, key) => (current && typeof current === 'object' && key in current ? current[key] : undefined), obj) as T | undefined;
}

//=====================================================================================

/**
 * Set a value in an object with a path.
 * @param {Object} object The object that needs to be updated.
 * @param {String} path The path to the value.
 * @param {Any} value The value that needs to be set.
 * @returns {Object} the updated object.
 * @note If Object does not contain the path, it will be created.
 */
export function setValue(object: Record<string, any>, path: string, value: any): Record<string, any> {
	const keys = path.split('.');
	const lastKey = keys.pop() as string;
	const targetObject = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), object);
	targetObject[lastKey] = value;
	return object;
}

//=====================================================================================

/**
 * Checks if an object has a specific key.
 * @param {Object} object The object that needs to be checked.
 * @param {String} key The key that needs to be checked.
 * @returns {Boolean} wether the object has the key.
 */

export function hasKey(object: object, key: string): boolean {
	return object.hasOwnProperty(key);
}

//=====================================================================================

/**
 * Checks if an object has a specific value.
 * @param {Object} object The object that needs to be checked.
 * @param {Any} value The value that needs to be checked.
 * @returns {Boolean} wether the object has the value.
 */

export function hasValue(object: object, value: any): boolean {
	return Object.values(object).includes(value);
}

//=====================================================================================

/**
 * Get the keys of an object.
 * @param {Object} object The object that needs to be checked.
 * @returns {Array} an array with the keys.
 */

export function getKeys(object: object): string[] {
	return Object.keys(object);
}

//=====================================================================================

/**
 * Get the values of an object.
 * @param {Object} object The object that needs to be checked.
 * @returns {Array} an array with the values.
 */

export function getValues(object: object): any[] {
	return Object.values(object);
}

// ===================================================================================================

/**
 * Gets all entries in an object.
 * @param {Object} object The object that needs to be checked.
 * @returns {Array} an array with the entries.
 */

export function getEntries(object: object): any[] {
	return Object.entries(object);
}

// ===================================================================================================

/**
 * Flattens an object.
 * @param {Object} object The object that needs to be flattened.
 * @returns {Object} a flattened object.
 * @example let object = flattenObject({ a: { b: { c: 1 } } });
 * console.log(object); // { 'a_b_c': 1 }
 */

export function flatten(object: object): object {
	const toReturn = {};

	for (const i in object) {
		if (!object.hasOwnProperty(i)) continue;

		if (typeof object[i] === 'object') {
			const flatObject = flatten(object[i]);
			for (const x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;

				toReturn[i + '_' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = object[i];
		}
	}
	return toReturn;
}

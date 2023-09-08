/**
 * @description Get a value from an object with a path.
 * @example getValue({ a: { b: { c: 1 } } }, 'a.b.c'); // returns 1
 */
export function getValue<T>(obj: Record<string, any>, path: string): T | undefined {
	return path.split('.').reduce((current, key) => (current && typeof current === 'object' && key in current ? current[key] : undefined), obj) as T | undefined;
}

/**
 * @description Set a value in an object with a path.
 * @note If the object does not contain the given path, it will be created.
 * @example setValue({ a: { b: { c: 1 } } }, 'a.b.c', 2); // returns { a: { b: { c: 2 } } }
 */
export function setValue(object: Record<string, any>, path: string, value: any): Record<string, any> {
	const keys = path.split('.');
	const lastKey = keys.pop() as string;
	const targetObject = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), object);
	targetObject[lastKey] = value;
	return object;
}

/**
 * @description Check recursively if an object has a specific key.
 * @example hasKey({ a: { b: { c: 1 } } }, 'c'); // returns true
 */

export function hasKey(object: Record<string, any>, key: string): boolean {
	if (object.hasOwnProperty(key)) return true;

	for (const i in object) {
		if (typeof object[i] === 'object' && hasKey(object[i], key)) return true;
	}

	return false;
}

/**
 * @description Checks if an object has a specific value.
 * @example hasValue({ a: { b: { c: 1 } } }, 1); // returns true
 */

export function hasValue(object: Record<string, any>, value: any): boolean {
	if (Object.values(object).includes(value)) return true;

	for (const i in object) {
		if (typeof value === 'object' && JSON.stringify(value) === JSON.stringify(object[i])) return true;
		else if (typeof object[i] === 'object' && hasValue(object[i], value)) return true;
	}

	return false;
}

/**
 * @description Get the keys of an object.
 * @example getKeys({ a: { b: { c: 1 } } }); // returns ['a', 'b', 'c']
 */
export function getKeys(object: Record<string, any>): string[] {
	return Object.keys(object).concat(
		...Object.values(object)
			.filter((value) => typeof value === 'object')
			.map((value) => getKeys(value))
	);
}

/**
 * @description Get the (nested) values of an object.
 * @note This function will not return objects. If you want to get objects, use `getEntries` instead.
 * @example getValues({ a: { b: { c: 1 } } }); // returns [1]
 */
export function getValues(object: Record<string, any>): any[] {
	return Object.values(object).flatMap((value) => (typeof value === 'object' ? getValues(value) : value));
}

/**
 * @description Gets all entries in an object.
 * @example getEntries({ a: { b: { c: 1 } } }); // returns [['a', { b: { c: 1 } }], ['b', { c: 1 }], ['c', 1]]
 */

export function getEntries(object: object): any[] {
	let entries = Object.entries(object);

	// If the value is an object, recursively call this function.
	for (const [key, value] of entries) {
		if (typeof value === 'object') {
			entries = entries.concat(getEntries(value));
		}
	}

	return entries;
}

/**
 * @description Flattens an object.
 * @example let object = flattenObject({ a: { b: { c: 1 } } }); // returns { a_b_c: 1 }
 */
export function flatten(object: Record<string, any>): object {
	const toReturn: Record<string, any> = {};

	for (const i in object) {
		if (!object.hasOwnProperty(i)) continue;

		if (typeof object[i] === 'object') {
			const flatObject: Record<string, any> = flatten(object[i]);
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

export const ObjectUtils = {
	getValue,
	setValue,
	hasKey,
	hasValue,
	getKeys,
	getValues,
	getEntries,
	flatten,
};

export default {
	getValue,
	setValue,
	hasKey,
	hasValue,
	getKeys,
	getValues,
	getEntries,
	flatten,
};

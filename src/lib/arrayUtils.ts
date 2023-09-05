/**
 * Chunk a array into sub arrays.
 * @param {Array} array the array that needs to be chunked.
 * @param {Number} size a number of the chunk size.
 * @returns {Array} a chunked array.
 * @example let array = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
 */

export function chunk(array: unknown[], size: number): any[][] {
	var results = [];
	while (array.length) {
		results.push(array.splice(0, size));
	}
	return results;
}

/**
 * Match arrays to find intersections.
 * @param {Array} array1 The first array.
 * @param {Array} array2 The second array.
 * @returns {Boolean} wether a array value intersects.
 */

export function hasMatches(array1: unknown[], array2: unknown[]): boolean {
	return array1.some((value) => array2.includes(value));
}

/**
 * Remove duplicates from an array.
 * @param {Array} array The array that needs to be cleaned.
 * @returns {Array} a cleaned array.
 */

export function filterDuplicates(array: unknown[]): unknown[] {
	return [...new Set(array)];
}

/**
 * Get the intersections of two arrays.
 * @param {Array} array1 The first array.
 * @param {Array} array2 The second array.
 * @returns {Array} an array with the intersections.
 */

export function getMatches(array1: unknown[], array2: unknown[]): unknown[] {
	return array1.filter((value) => array2.includes(value));
}

/**
 * Shuffle an array.
 * @param {Array} array The array that needs to be shuffled.
 * @returns {Array} a shuffled array.
 * @example let array = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 */

export function shuffle(array: unknown[]): unknown[] {
	return array.sort(() => Math.random() - 0.5);
}

/**
 * @description Chunk a array into sub arrays.
 * @example let array = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // returns [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 */

export function chunk(array: any[], size: number): any[][] {
	var results = [];
	while (array.length) {
		results.push(array.splice(0, size));
	}
	return results;
}

/**
 * @description Match arrays to find intersections.
 * @example hasMatches([1, 2, 3], [3, 4, 5]); // returns true
 */

export function hasMatches(array1: any[], array2: any[]): boolean {
	return array1.some((value) => array2.includes(value));
}

/**
 * @description Remove duplicates from an array.
 * @example let array = filterDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

export function filterDuplicates(array: any[]): any[] {
	return [...new Set(array)];
}

/**
 * @description Get the intersections of two arrays.
 * @example let array = getMatches([1, 2, 3], [3, 4, 5]); // returns [3]
 */

export function getMatches(array1: any[], array2: any[]): any[] {
	return array1.filter((value) => array2.includes(value));
}

/**
 * @description Shuffle an array.
 * @example let array = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // returns [9, 2, 3, 4, 5, 6, 7, 8, 1]
 */

export function shuffle(array: any[]): any[] {
	return array.sort(() => Math.random() - 0.5);
}

export default {
	chunk,
	hasMatches,
	filterDuplicates,
	getMatches,
	shuffle,
};

/**
 * Chunk a array into sub arrays.
 * @param {Array} array the array that needs to be chunked.
 * @param {Number} size a number of the chunk size.
 * @returns a chunked array.
 */

function chunkArray(array, size) {
	var results = [];
	while (array.length) {
		results.push(array.splice(0, size));
	}
	return results;
}

//=====================================================================================

/**
 * Match arrays to find duplicates.
 * @param {Array} array1 The first array.
 * @param {Array} array2 The second array.
 * @returns a boolean wether a array value intersects.
 */
function matchArray(array1, array2) {
	var boolean = false;
	array1.forEach((r, i) => {
		if (array2.some((a) => a == r)) return (boolean = true);
		i++;
	});
	return boolean;
}

//=====================================================================================

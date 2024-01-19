"use strict";
/**
 * @description Chunk a array into sub arrays.
 * @example let array = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // returns [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = exports.shuffle = exports.getMatches = exports.filterDuplicates = exports.hasMatches = exports.chunk = void 0;
function chunk(array, size) {
    if (!array.length || size < 1)
        return [];
    if (size >= array.length)
        return array;
    let copyArray = [...array];
    let results = [];
    while (copyArray.length) {
        results.push(copyArray.splice(0, size));
    }
    return results;
}
exports.chunk = chunk;
/**
 * @description Match arrays to find intersections.
 * @example hasMatches([1, 2, 3], [3, 4, 5]); // returns true
 */
function hasMatches(array1, array2) {
    return array1.some((value) => array2.includes(value));
}
exports.hasMatches = hasMatches;
/**
 * @description Remove duplicates from an array.
 * @example let array = filterDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
function filterDuplicates(array) {
    return [...new Set(array)];
}
exports.filterDuplicates = filterDuplicates;
/**
 * @description Get the intersections of two arrays.
 * @example let array = getMatches([1, 2, 3], [3, 4, 5]); // returns [3]
 */
function getMatches(array1, array2) {
    return array1.filter((value) => array2.includes(value));
}
exports.getMatches = getMatches;
/**
 * @description Shuffle an array.
 * @example let array = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // returns [9, 2, 3, 4, 5, 6, 7, 8, 1]
 */
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}
exports.shuffle = shuffle;
exports.ArrayUtils = {
    chunk,
    hasMatches,
    filterDuplicates,
    getMatches,
    shuffle,
};
exports.default = {
    chunk,
    hasMatches,
    filterDuplicates,
    getMatches,
    shuffle,
};

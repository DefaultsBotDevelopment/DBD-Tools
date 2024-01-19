/**
 * @description Chunk a array into sub arrays.
 * @example let array = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // returns [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 */
export declare function chunk<T>(array: T[], size: number): T[][] | T[];
/**
 * @description Match arrays to find intersections.
 * @example hasMatches([1, 2, 3], [3, 4, 5]); // returns true
 */
export declare function hasMatches<T>(array1: T[], array2: T[]): boolean;
/**
 * @description Remove duplicates from an array.
 * @example let array = filterDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
export declare function filterDuplicates<T>(array: T[]): T[];
/**
 * @description Get the intersections of two arrays.
 * @example let array = getMatches([1, 2, 3], [3, 4, 5]); // returns [3]
 */
export declare function getMatches<T>(array1: T[], array2: T[]): T[];
/**
 * @description Shuffle an array.
 * @example let array = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // returns [9, 2, 3, 4, 5, 6, 7, 8, 1]
 */
export declare function shuffle<T>(array: T[]): T[];
export declare const ArrayUtils: {
    chunk: typeof chunk;
    hasMatches: typeof hasMatches;
    filterDuplicates: typeof filterDuplicates;
    getMatches: typeof getMatches;
    shuffle: typeof shuffle;
};
declare const _default: {
    chunk: typeof chunk;
    hasMatches: typeof hasMatches;
    filterDuplicates: typeof filterDuplicates;
    getMatches: typeof getMatches;
    shuffle: typeof shuffle;
};
export default _default;
//# sourceMappingURL=array.d.ts.map
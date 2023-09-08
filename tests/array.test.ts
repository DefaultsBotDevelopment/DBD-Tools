import { ArrayUtils } from '../src/array';

describe('ArrayUtils chunk function', () => {
	it('should return a chunked array', () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const size = 4;

		const result = ArrayUtils.chunk(array, size);

		expect(result).toHaveLength(3);
		expect(result).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
	});

	it('should return an empty array if the array is empty', () => {
		const array: any[] = [];
		const size = 4;

		const result = ArrayUtils.chunk(array, size);

		expect(result).toHaveLength(0);
		expect(result).toEqual([]);
	});

	it('should return the original array if size is smaller than 1', () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const size = 0;

		const result = ArrayUtils.chunk(array, size);

		expect(result).toHaveLength(0);
		expect(result).toEqual([]);
	});

	it('should return the original array if size is larger than the array', () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const size = 10;

		const result = ArrayUtils.chunk(array, size);

		expect(result).toHaveLength(array.length);
		expect(result).toEqual(array);
	});
});

describe('ArrayUtils hasMatches function', () => {
	it('should return true if there are matches', () => {
		const array1 = [1, 2, 3];
		const array2 = [3, 4, 5];

		const result = ArrayUtils.hasMatches(array1, array2);

		expect(result).toBeTruthy();
	});

	it('should return false if there are no matches', () => {
		const array1 = [1, 2, 3];
		const array2 = [4, 5, 6];

		const result = ArrayUtils.hasMatches(array1, array2);

		expect(result).toEqual(false);
	});

	it('should return false if one of the arrays is empty', () => {
		const array1: any[] = [];
		const array2 = [4, 5, 6];

		const result = ArrayUtils.hasMatches(array1, array2);

		expect(result).toEqual(false);
	});
});

describe('ArrayUtils filterDuplicates function', () => {
	it('should return an array with no duplicates', () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

		const result = ArrayUtils.filterDuplicates(array);

		expect(result).toHaveLength(9);
		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('should return an empty array if the array is empty', () => {
		const array: any[] = [];

		const result = ArrayUtils.filterDuplicates(array);

		expect(result).toHaveLength(0);
		expect(result).toEqual([]);
	});
});

describe('ArrayUtils getMatches function', () => {
	it('should return an array of matches', () => {
		const array1 = [1, 2, 3];
		const array2 = [3, 4, 5];

		const result = ArrayUtils.getMatches(array1, array2);

		expect(result).toHaveLength(1);
		expect(result).toEqual([3]);
	});

	it('should return an empty array if there are no matches', () => {
		const array1 = [1, 2, 3];
		const array2 = [4, 5, 6];

		const result = ArrayUtils.getMatches(array1, array2);

		expect(result).toHaveLength(0);
		expect(result).toEqual([]);
	});

	it('should return an empty array if one of the arrays is empty', () => {
		const array1: any[] = [];
		const array2 = [4, 5, 6];

		const result = ArrayUtils.getMatches(array1, array2);

		expect(result).toHaveLength(0);
		expect(result).toEqual([]);
	});
});

describe('ArrayUtils shuffle function', () => {
	it('should return a shuffled array', () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		const result = ArrayUtils.shuffle(array);

		expect(result).toHaveLength(array.length);
		expect(result).not.toEqual(array);
	});

	it('should return an empty array if the array is empty', () => {
		const array: any[] = [];

		const result = ArrayUtils.shuffle(array);

		expect(result).toHaveLength(0);
		expect(result).toEqual([]);
	});
});

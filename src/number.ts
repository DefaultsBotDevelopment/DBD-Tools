/**
 * @description Generate a random number between min and max (both inclusive).
 * @returns {number} - a random number between min and max (both inclusive)
 */
export function getRandom(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const NumberUtils = {
	getRandom,
};

export default {
	getRandom,
};

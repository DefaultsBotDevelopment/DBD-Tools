import { NumberUtils } from '../src/number';

describe('NumberUtils getRandom function', () => {
	it('should generate a random number between min and max (both inclusive)', () => {
		for (let i = 0; i < 100; i++) {
			const result = NumberUtils.getRandom(i, i + 10);

			expect(result).toBeGreaterThanOrEqual(i);
			expect(result).toBeLessThanOrEqual(i + 10);
		}
	});
});

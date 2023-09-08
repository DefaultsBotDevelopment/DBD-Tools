import { ParseUtils } from '../src/parse';

describe('ParseUtils parseEmojis function', () => {
	it('should parse all emojis', () => {
		const text = 'Hello World! 😄😄😄';

		const result = ParseUtils.parseEmojis(text);

		expect(result).toEqual(['😄', '😄', '😄']);
	});

	it('should return an empty array if no emojis are found', () => {
		const text = 'Hello World!';

		const result = ParseUtils.parseEmojis(text);

		expect(result).toEqual([]);
	});
});

describe('ParseUtils parseHexColors function', () => {
	it('should parse all hex colors', () => {
		const text = 'Hello World! #FFFFFF';

		const result = ParseUtils.parseHexColors(text);

		expect(result).toEqual(['#FFFFFF']);
	});

	it('should return an empty array if no hex colors are found', () => {
		const text = 'Hello World!';

		const result = ParseUtils.parseHexColors(text);

		expect(result).toEqual([]);
	});
});

describe('ParseUtils parseRgbColors function', () => {
	it('should parse all rgb colors', () => {
		const text = 'Hello World! rgb(255, 255, 255)';

		const result = ParseUtils.parseRgbColors(text);

		expect(result).toEqual(['rgb(255, 255, 255)']);
	});

	it('should return an empty array if no rgb colors are found', () => {
		const text = 'Hello World!';

		const result = ParseUtils.parseRgbColors(text);

		expect(result).toEqual([]);
	});
});

describe('ParseUtils parseHslColors function', () => {
	it('should parse all hsl colors', () => {
		const text = 'Hello World! hsl(0, 100%, 50%)';

		const result = ParseUtils.parseHslColors(text);

		expect(result).toEqual(['hsl(0, 100%, 50%)']);
	});

	it('should return an empty array if no hsl colors are found', () => {
		const text = 'Hello World!';

		const result = ParseUtils.parseHslColors(text);

		expect(result).toEqual([]);
	});
});

describe('ParseUtils parseDecimalColors function', () => {
	it('should parse all decimal colors', () => {
		const text = 'Hello World! 16777215';

		const result = ParseUtils.parseDecimalColors(text);

		expect(result).toEqual(['16777215']);
	});

	it('should return an empty array if no decimal colors are found', () => {
		const text = 'Hello World!';

		const result = ParseUtils.parseDecimalColors(text);

		expect(result).toEqual([]);
	});
});

import { ConvertUtils } from '../src/convert';

describe('ConvertUtils hexToDecimal function', () => {
	it('should convert a hex color to decimal', () => {
		const hex = '#FFFFFF';

		const result = ConvertUtils.hexToDecimal(hex);

		expect(result).toBe(16777215);
	});

	it('should convert a hex color to decimal', () => {
		const hex = '#000000';

		const result = ConvertUtils.hexToDecimal(hex);

		expect(result).toBe(0);
	});

	it('should return null if the hex color is invalid', () => {
		const hex = 'string';

		const result = ConvertUtils.hexToDecimal(hex);

		expect(result).toBeNaN();
	});
});

describe('ConvertUtils toBoolean function', () => {
	it('should return true if the data is a boolean and the boolean option is true', () => {
		const data = true;
		const options = {
			boolean: true,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toEqual(true);
	});

	it('should return false if the data has a value of false and the boolean option is true', () => {
		const data = false;
		const options = {
			boolean: true,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toEqual(false);
	});

	it('should return null if the data is a boolean and the boolean option is false', () => {
		const data = true;
		const options = {
			boolean: false,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toBeNull();
	});

	it('should return true if the data is a number and the number option is true', () => {
		const data = 1;
		const options = {
			boolean: false,
			number: true,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toEqual(true);
	});

	it('should return false if the data is a number and the number option is true', () => {
		const data = 0;
		const options = {
			boolean: false,
			number: true,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toEqual(false);
	});

	it('should return null if the data is a number and the number option is false', () => {
		const data = 1;
		const options = {
			boolean: false,
			number: false,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toBeNull();
	});

	it('should return true if the data is a string and the string option is true', () => {
		const data = 'true';
		const options = {
			boolean: false,
			string: true,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toEqual(true);
	});

	it('should return false if the data is a string and the string option is true', () => {
		const data = 'false';
		const options = {
			boolean: false,
			string: true,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toEqual(false);
	});

	it('should return null if the data is a string and the string option is false', () => {
		const data = 'true';
		const options = {
			boolean: false,
			string: false,
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toBeNull();
	});

	it('should return true if the data is a string and the value is in the custom true array', () => {
		const data = 'yes';
		const options = {
			boolean: false,
			custom: {
				true: ['yes', 'y'],
				false: ['no', 'n'],
			},
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toEqual(true);
	});

	it('should return false if the data is a string and the value is in the custom false array', () => {
		const data = 'no';
		const options = {
			boolean: false,
			custom: {
				true: ['yes', 'y'],
				false: ['no', 'n'],
			},
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toEqual(false);
	});

	it('should return null if the data is a string and the value is not in the custom true or false array', () => {
		const data = 'maybe';
		const options = {
			boolean: false,
			custom: {
				true: ['yes', 'y'],
				false: ['no', 'n'],
			},
		};

		const result = ConvertUtils.toBoolean(data, options);

		expect(result).toBeNull();
	});
});

import { TimeUtils } from '../src/time';

describe('TimeUtils msToTimeObject function', () => {
	it('should convert milliseconds to a time object and return all units if no options are provided', () => {
		const timeInMs = 100000;

		const result = TimeUtils.msToTimeObject(timeInMs);

		expect(result).toEqual({ seconds: 40, minutes: 1, hours: 0, days: 0, weeks: 0, months: 0, years: 0 });
	});

	it('should convert milliseconds to a time object and return only the specified units', () => {
		const timeInMs = 100000;

		const result = TimeUtils.msToTimeObject(timeInMs, { seconds: true, minutes: true, hours: false, days: false, weeks: false, months: false, years: false });

		expect(result).toEqual({ seconds: 40, minutes: 1 });
	});

	it('should return null if the time is less than 1', () => {
		const timeInMs = 0;

		const result = TimeUtils.msToTimeObject(timeInMs);

		expect(result).toBeNull();
	});

	it('should return null if the time is not a number', () => {
		const timeInMs = '100000';

		// @ts-ignore
		const result = TimeUtils.msToTimeObject(timeInMs);

		expect(result).toBeNull();
	});

	it('should throw an error if the options parameter is not an object', () => {
		const timeInMs = 100000;

		// @ts-ignore
		expect(() => TimeUtils.msToTimeObject(timeInMs, 'options')).toThrow('options must be an object.');
	});

	it('should throw an error if one of the options has an invalid key', () => {
		const timeInMs = 100000;

		// @ts-ignore
		expect(() => TimeUtils.msToTimeObject(timeInMs, { seconds: true, minutes: true, hours: false, days: false, weeks: false, months: false, years: false, invalid: true })).toThrow('options.invalid is not a valid option.');
	});

	it('should throw an error if one of the option values is not of type boolean', () => {
		const timeInMs = 100000;

		// @ts-ignore
		expect(() => TimeUtils.msToTimeObject(timeInMs, { seconds: 'true', minutes: true, hours: false, days: false, weeks: false, months: false, years: false })).toThrow('options.seconds must be a boolean.');
	});
});

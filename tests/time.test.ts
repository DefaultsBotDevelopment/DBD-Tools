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
});

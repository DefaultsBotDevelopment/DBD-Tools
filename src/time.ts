/**
 * @description Converts milliseconds to a time object. If no options are provided, all time units will be included.
 * @example parseMilliseconds(1000, { seconds: true, minutes: true, hours: true, days: true, weeks: true, months: true, years: true }) // returns { seconds: 1 }
 */
export function msToTimeObject(
	timeInMs: number,
	options: { seconds?: boolean; minutes?: boolean; hours?: boolean; days?: boolean; weeks?: boolean; months?: boolean; years?: boolean } = {
		seconds: true,
		minutes: true,
		hours: true,
		days: true,
		weeks: true,
		months: true,
		years: true,
	}
): { seconds?: number; minutes?: number; hours?: number; days?: number; weeks?: number; months?: number; years?: number } | null {
	if (!timeInMs || isNaN(timeInMs) || timeInMs <= 0) return null;
	if (typeof options !== 'object') throw new TypeError('options must be an object.');
	// Check if options has any properties that are not valid
	for (const [name] of Object.entries(options)) {
		if (!['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'].includes(name)) throw new TypeError(`options.${name} is not a valid option.`);
	}
	// Check if options has any properties that are not booleans
	for (const [name, value] of Object.entries(options)) {
		if (typeof value !== 'boolean') throw new TypeError(`options.${name} must be a boolean.`);
	}

	const ONE_SECOND_MS = 1000;
	const ONE_MINUTE_MS = 60 * ONE_SECOND_MS;
	const ONE_HOUR_MS = 60 * ONE_MINUTE_MS;
	const ONE_DAY_MS = 24 * ONE_HOUR_MS;
	const ONE_WEEK_MS = 7 * ONE_DAY_MS;
	const ONE_MONTH_MS = 30 * ONE_DAY_MS;
	const ONE_YEAR_MS = 365 * ONE_DAY_MS;

	let returnObject: { seconds?: number; minutes?: number; hours?: number; days?: number; weeks?: number; months?: number; years?: number } | null = {};

	if (options.years) {
		const years = Math.floor(timeInMs / ONE_YEAR_MS);
		timeInMs %= ONE_YEAR_MS;
		returnObject.years = years;
	}
	if (options.months) {
		const months = Math.floor(timeInMs / ONE_MONTH_MS);
		timeInMs %= ONE_MONTH_MS;
		returnObject.months = months;
	}
	if (options.weeks) {
		const weeks = Math.floor(timeInMs / ONE_WEEK_MS);
		timeInMs %= ONE_WEEK_MS;
		returnObject.weeks = weeks;
	}
	if (options.days) {
		const days = Math.floor(timeInMs / ONE_DAY_MS);
		timeInMs %= ONE_DAY_MS;
		returnObject.days = days;
	}
	if (options.hours) {
		const hours = Math.floor(timeInMs / ONE_HOUR_MS);
		timeInMs %= ONE_HOUR_MS;
		returnObject.hours = hours;
	}
	if (options.minutes) {
		const minutes = Math.floor(timeInMs / ONE_MINUTE_MS);
		timeInMs %= ONE_MINUTE_MS;
		returnObject.minutes = minutes;
	}
	if (options.seconds) {
		const seconds = Math.floor(timeInMs / ONE_SECOND_MS);
		returnObject.seconds = seconds;
	}

	return returnObject;
}

export default {
	msToTimeObject,
};

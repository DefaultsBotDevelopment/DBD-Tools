export * from './utils/array';
export * from './utils/cache';
export * from './utils/convert';
export * from './utils/discord';
export * from './utils/number';
export * from './utils/object';
export * from './utils/parse';
export * from './utils/string';
export * from './utils/time';

export default {
	...require('./utils/array'),
	...require('./utils/cache'),
	...require('./utils/convert'),
	...require('./utils/discord'),
	...require('./utils/number'),
	...require('./utils/object'),
	...require('./utils/parse'),
	...require('./utils/string'),
	...require('./utils/time'),
};

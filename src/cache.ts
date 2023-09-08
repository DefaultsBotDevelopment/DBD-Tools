import fs from 'fs';
import { promisify } from 'util';

/**
 * @description Get cache file with its parsed json content.
 * @example const cache = getCache('./cache.json'); // returns cache file
 */

export function getCache(path: string): Record<string, any> {
	let cache = fs.readFileSync(path);
	return JSON.parse(cache.toString());
}

/**
 * @description Update cache file.
 * @throws {Error} - If the cache file could not be updated.
 * @example updateCache(cache, './cache.json'); // returns a promise
 * @async
 */

export async function updateCache(cache: Record<string, any>, path: string): Promise<boolean> {
	const writeFileAsync = promisify(fs.writeFile);

	try {
		await writeFileAsync(path, JSON.stringify(cache, null, 4));
		return true;
	} catch (error) {
		throw error;
	}
}

export const CacheUtils = {
	getCache,
	updateCache,
};

export default {
	getCache,
	updateCache,
};

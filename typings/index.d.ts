declare module 'dbd-tools' {
	interface StringUtils {
		formatText(text: string, type: 'pascal' | 'camel' | 'snake' | 'kebab'): string;
		generateId(size: number): string;
		generateUuid(): string;
		replacer(string: string, options: Record<string, string>): string;
	}

	interface NumberUtils {
		getRandom(min: number, max: number): number;
	}

	interface ArrayUtils {
		chunk<T>(array: T[], size: number): T[][];
		hasMatches(array1: any[], array2: any[]): boolean;
		filterDuplicates<T>(array: T[]): T[];
		getMatches(array1: any[], array2: any[]): any[];
		shuffle<T>(array: T[]): T[];
	}

	interface ObjectUtils {
		getValue(object: any, path: string): any;
		setValue(object: any, path: string | string[], value: any): any;
		hasKey(object: any, key: string): boolean;
		hasValue(object: any, value: any): boolean;
		getKeys(object: any): string[];
		getValues(object: any): any[];
		getEntries(object: any): [string, any][];
		flatten(object: Record<string, any>): Record<string, any>;
	}

	interface CacheUtils {
		getCache(path: string): any;
		updateCache(cache: any): Promise<boolean>;
	}

	interface DiscordUtils {
		formatButtons(buttons: any[]): any[];
		formatSelects(custom_id: string, placeholder: string, min_values: number, max_values: number, options: any[]): any[];
		getMentions(text: string, options: { users?: boolean; roles?: boolean; channel?: boolean }): { users?: string[]; roles?: string[]; channels?: string[] };
	}

	interface Utils {
		sleep(ms: number): Promise<void>;
	}

	interface ParseUtils {
		parseEmojis(text: string): string[];
		parseHexColors(text: string): string[];
		parseRgbColors(text: string): string[];
		parseHslColors(text: string): string[];
		parseDecimalColors(text: string): string[];
		parseMilliseconds(
			timeInMs: number,
			options?: {
				seconds?: boolean;
				minutes?: boolean;
				hours?: boolean;
				days?: boolean;
				weeks?: boolean;
				months?: boolean;
				years?: boolean;
			}
		): Record<string, number> | null;
	}

	interface ConvertUtils {
		hexToDecimal(hex: string): number;
	}

	class Utilities {
		StringUtils: StringUtils;
		NumberUtils: NumberUtils;
		ArrayUtils: ArrayUtils;
		ObjectUtils: ObjectUtils;
		CacheUtils: CacheUtils;
		DiscordUtils: DiscordUtils;
		Utils: Utils;
		ParseUtils: ParseUtils;
		ConvertUtils: ConvertUtils;
	}

	const instance: Utilities;
	export = instance;
}

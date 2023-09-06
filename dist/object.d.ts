/**
 * @description Get a value from an object with a path.
 * @example getValue({ a: { b: { c: 1 } } }, 'a.b.c'); // returns 1
 */
export declare function getValue<T>(obj: Record<string, any>, path: string): T | undefined;
/**
 * @description Set a value in an object with a path.
 * @note If the object does not contain the given path, it will be created.
 * @example setValue({ a: { b: { c: 1 } } }, 'a.b.c', 2); // returns { a: { b: { c: 2 } } }
 */
export declare function setValue(object: Record<string, any>, path: string, value: any): Record<string, any>;
/**
 * @description Check recursively if an object has a specific key.
 * @example hasKey({ a: { b: { c: 1 } } }, 'c'); // returns true
 */
export declare function hasKey(object: Record<string, any>, key: string): boolean;
/**
 * @description Checks if an object has a specific value.
 * @example hasValue({ a: { b: { c: 1 } } }, 1); // returns true
 */
export declare function hasValue(object: Record<string, any>, value: any): boolean;
/**
 * @description Get the keys of an object.
 * @example getKeys({ a: { b: { c: 1 } } }); // returns ['a', 'b', 'c']
 */
export declare function getKeys(object: Record<string, any>): string[];
/**
 * @description Get the (nested) values of an object.
 * @note This function will not return objects. If you want to get objects, use `getEntries` instead.
 * @example getValues({ a: { b: { c: 1 } } }); // returns [1]
 */
export declare function getValues(object: Record<string, any>): any[];
/**
 * @description Gets all entries in an object.
 * @example getEntries({ a: { b: { c: 1 } } }); // returns [['a', { b: { c: 1 } }], ['b', { c: 1 }], ['c', 1]]
 */
export declare function getEntries(object: object): any[];
/**
 * @description Flattens an object.
 * @example let object = flattenObject({ a: { b: { c: 1 } } }); // returns { a_b_c: 1 }
 */
export declare function flatten(object: Record<string, any>): object;
declare const _default: {
    getValue: typeof getValue;
    setValue: typeof setValue;
    hasKey: typeof hasKey;
    hasValue: typeof hasValue;
    getKeys: typeof getKeys;
    getValues: typeof getValues;
    getEntries: typeof getEntries;
    flatten: typeof flatten;
};
export default _default;
//# sourceMappingURL=object.d.ts.map
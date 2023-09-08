"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtils = exports.flatten = exports.getEntries = exports.getValues = exports.getKeys = exports.hasValue = exports.hasKey = exports.setValue = exports.getValue = void 0;
/**
 * @description Get a value from an object with a path.
 * @example getValue({ a: { b: { c: 1 } } }, 'a.b.c'); // returns 1
 */
function getValue(obj, path) {
    return path.split('.').reduce((current, key) => (current && typeof current === 'object' && key in current ? current[key] : undefined), obj);
}
exports.getValue = getValue;
/**
 * @description Set a value in an object with a path.
 * @note If the object does not contain the given path, it will be created.
 * @example setValue({ a: { b: { c: 1 } } }, 'a.b.c', 2); // returns { a: { b: { c: 2 } } }
 */
function setValue(object, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const targetObject = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), object);
    targetObject[lastKey] = value;
    return object;
}
exports.setValue = setValue;
/**
 * @description Check recursively if an object has a specific key.
 * @example hasKey({ a: { b: { c: 1 } } }, 'c'); // returns true
 */
function hasKey(object, key) {
    if (object.hasOwnProperty(key))
        return true;
    for (const i in object) {
        if (typeof object[i] === 'object' && hasKey(object[i], key))
            return true;
    }
    return false;
}
exports.hasKey = hasKey;
/**
 * @description Checks if an object has a specific value.
 * @example hasValue({ a: { b: { c: 1 } } }, 1); // returns true
 */
function hasValue(object, value) {
    if (Object.values(object).includes(value))
        return true;
    for (const i in object) {
        if (typeof value === 'object' && JSON.stringify(value) === JSON.stringify(object[i]))
            return true;
        else if (typeof object[i] === 'object' && hasValue(object[i], value))
            return true;
    }
    return false;
}
exports.hasValue = hasValue;
/**
 * @description Get the keys of an object.
 * @example getKeys({ a: { b: { c: 1 } } }); // returns ['a', 'b', 'c']
 */
function getKeys(object) {
    return Object.keys(object).concat(...Object.values(object)
        .filter((value) => typeof value === 'object')
        .map((value) => getKeys(value)));
}
exports.getKeys = getKeys;
/**
 * @description Get the (nested) values of an object.
 * @note This function will not return objects. If you want to get objects, use `getEntries` instead.
 * @example getValues({ a: { b: { c: 1 } } }); // returns [1]
 */
function getValues(object) {
    return Object.values(object).flatMap((value) => (typeof value === 'object' ? getValues(value) : value));
}
exports.getValues = getValues;
/**
 * @description Gets all entries in an object.
 * @example getEntries({ a: { b: { c: 1 } } }); // returns [['a', { b: { c: 1 } }], ['b', { c: 1 }], ['c', 1]]
 */
function getEntries(object) {
    let entries = Object.entries(object);
    // If the value is an object, recursively call this function.
    for (const [key, value] of entries) {
        if (typeof value === 'object') {
            entries = entries.concat(getEntries(value));
        }
    }
    return entries;
}
exports.getEntries = getEntries;
/**
 * @description Flattens an object.
 * @example let object = flattenObject({ a: { b: { c: 1 } } }); // returns { a_b_c: 1 }
 */
function flatten(object) {
    const toReturn = {};
    for (const i in object) {
        if (!object.hasOwnProperty(i))
            continue;
        if (typeof object[i] === 'object') {
            const flatObject = flatten(object[i]);
            for (const x in flatObject) {
                if (!flatObject.hasOwnProperty(x))
                    continue;
                toReturn[i + '_' + x] = flatObject[x];
            }
        }
        else {
            toReturn[i] = object[i];
        }
    }
    return toReturn;
}
exports.flatten = flatten;
exports.ObjectUtils = {
    getValue,
    setValue,
    hasKey,
    hasValue,
    getKeys,
    getValues,
    getEntries,
    flatten,
};
exports.default = {
    getValue,
    setValue,
    hasKey,
    hasValue,
    getKeys,
    getValues,
    getEntries,
    flatten,
};

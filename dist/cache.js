"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCache = exports.getCache = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
/**
 * @description Get cache file with its parsed json content.
 * @example const cache = getCache('./cache.json'); // returns cache file
 */
function getCache(path) {
    let cache = fs_1.default.readFileSync(path);
    return JSON.parse(cache.toString());
}
exports.getCache = getCache;
/**
 * @description Update cache file.
 * @throws {Error} - If the cache file could not be updated.
 * @example updateCache(cache, './cache.json'); // returns a promise
 */
async function updateCache(cache, path) {
    const writeFileAsync = (0, util_1.promisify)(fs_1.default.writeFile);
    try {
        await writeFileAsync(path, JSON.stringify(cache, null, 4));
        return true;
    }
    catch (error) {
        throw error;
    }
}
exports.updateCache = updateCache;
exports.default = {
    getCache,
    updateCache,
};

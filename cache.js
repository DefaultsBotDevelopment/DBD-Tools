/**
 * Get cache file with its parsed json content.
 * @returns Json parsed cache file.
 */

function getCache() {
  let cache = fs.readFileSync('./cache.json');
  return JSON.parse(cache);
}

//=====================================================================================

/**
 * Update cache file.
 * @param {Object} cache the cache file you wanna update
 * @returns updates cache file
 */

function updateCache(cache) {
  return new Promise(async (resolve, reject) => {
    fs.writeFile('./cache.json', JSON.stringify(cache, null, 2), function (err) {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

//=====================================================================================

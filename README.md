<!-- generate readme file -->

# DBD Tools

This is a collection of tools for javascript.

## Installation

```bash
npm install dbd-tools
```

## Tools

```javascript
const dbdTools = require('dbd-tools');

// Utils
dbdTools.Utils.sleep(ms); // Sleeps for a specific amount of time.

// String tools
dbdTools.StringUtils.formatText(text, type); // Formats text to a specific case.
dbdTools.StringUtils.generateId(size); // Generates a random string of a specific size.
dbdTools.StringUtils.generateUuid(); // Generates a random Unique User ID.
dbdTools.StringUtils.replacer(string, options); // Replaces a string with matching values.

// Number tools
dbdTools.NumberUtils.getRandom(min, max); // Generates a random number between a min and max value.

// Array tools
dbdTools.ArrayUtils.chunk(array, size); // Splits an array into chunks of a specific size.
dbdTools.ArrayUtils.hasMatches(array1, array2); // Checks if two arrays have any matching values.
dbdTools.ArrayUtils.clearDuplicates(array); // Gets all duplicate values in an array.
dbdTools.ArrayUtils.getMatches(array1, array2); // Gets all values that are in both arrays.

// Object tools
dbdTools.ObjectUtils.hasKey(object, key); // Checks if an object has a specific key.
dbdTools.ObjectUtils.hasValue(object, value); // Checks if an object has a specific value.
dbdTools.ObjectUtils.getKeys(object); // Gets all keys in an object.
dbdTools.ObjectUtils.getValue(object, path); // Gets a value from an object using a path.
dbdTools.ObjectUtils.setValue(object, path, value); // Sets a value in an object using a path.
dbdTools.ObjectUtils.getValues(object); // Gets all values in an object.
dbdTools.ObjectUtils.getEntries(object); // Gets all entries in an object.
dbdTools.ObjectUtils.flatten(object); // Flattens an object.

// Cache tools
dbdTools.CacheUtils.getCache(path); // Gets a cache file.
dbdTools.CacheUtils.updateCache(cache); // Updates a cache file.

// Discord tools
dbdTools.DiscordUtils.formatButtons(buttons); // Formats buttons for discord.js.
dbdTools.DiscordUtils.formatSelects(options); // Formats selects for discord.js.
dbdTools.DiscordUtils.getMentions(text, type); // Gets all mentions from a string.

// Parse tools
dbdTools.ParseUtils.parseEmojis(text); // Parses emojis from a string.
dbdTools.ParseUtils.parseHexColors(text); // Parses hex colors from a string.
dbdTools.ParseUtils.parseRgbColors(text); // Parses rgb colors from a string.
dbdTools.ParseUtils.parseHslColors(text); // Parses hsl colors from a string.
dbdTools.ParseUtils.parseDecimalColors(text); // Parses decimal colors from a string.
dbdTools.ParseUtils.parseMilliseconds(ms, { seconds: true, minutes: true }); // Parses milliseconds into a readable time.

// Convert tools
dbdTools.ConvertUtils.hexToDecimal(hex); // Converts a hex color to a decimal color.
```

## Usage

```javascript
const dbdTools = require('dbd-tools');
```

## Support

If you have any questions, please make an issue on the [GitHub repository]("https://github.com/Default-01/JS-Tools/issues").

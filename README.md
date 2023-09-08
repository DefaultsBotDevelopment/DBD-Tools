[![npm version](https://img.shields.io/npm/v/@defaultsbotdevelopment/dbd-tools.svg?style=flat-square)](https://www.npmjs.org/package/@defaultsbotdevelopment/dbd-tools)

# Default's Bot Development Tools

A collection of JavaScript utility functions.

## Installation

To install the package, run the following command:

```bash
npm install @defaultsbotdevelopment/dbd-tools
```

## Usage

In your project, import the package either using `require` or `import`:

```js
const dbdTools = require('@defaultsbotdevelopment/dbd-tools');
// or
import dbdTools from '@defaultsbotdevelopment/dbd-tools';
```

You can also destructure the package to only import the functions you need:

```js
const { getKeys, getValues } = require('@defaultsbotdevelopment/dbd-tools');
// or
import { getKeys, getValues } from '@defaultsbotdevelopment/dbd-tools';

// You can even import all functions as a collection
const { ArrayUtils, CacheUtils, ConvertUtils, DiscordUtils, NumberUtils, ObjectUtils, ParseUtils, StringUtils, TimeUtils } = require('@defaultsbotdevelopment/dbd-tools');
// or
import { ArrayUtils, CacheUtils, ConvertUtils, DiscordUtils, NumberUtils, ObjectUtils, ParseUtils, StringUtils, TimeUtils } from '@defaultsbotdevelopment/dbd-tools';
```

## Functions

The functions are categorized into the following collections:

- [Array](#array)
- [Cache](#cache)
- [Convert](#convert)
- [Discord](#discord)
- [Number](#number)
- [Object](#object)
- [Parse](#parse)
- [String](#string)
- [Time](#time)

### Array

All available array utility functions.

#### `chunk`

Chunks an array into smaller arrays.

```js
import { chunk } from '@defaultsbotdevelopment/dbd-tools';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(chunk(array, 3)); // => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

#### `hasMatches`

Checks if an array has any matches with another array.

```js
import { hasMatches } from '@defaultsbotdevelopment/dbd-tools';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [9, 10, 11];

console.log(hasMatches(array, array2)); // => true
```

#### `getMatches`

Gets all matches from an array.

```js
import { getMatches } from '@defaultsbotdevelopment/dbd-tools';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [1, 9, 10, 11];

console.log(getMatches(array, array2)); // => [1, 9]
```

#### `filterDuplicates`

Filters out duplicate values from an array.

```js
import { filterDuplicates } from '@defaultsbotdevelopment/dbd-tools';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];

console.log(filterDuplicates(array)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### `shuffle`

Shuffles an array.

```js
import { shuffle } from '@defaultsbotdevelopment/dbd-tools';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(shuffle(array)); // => [9, 3, 1, 5, 4, 2, 6, 7, 8]
```

### Cache

All available cache utility functions.

#### `getCache`

Retrieve JSON data from a cache file in a synchronous manner.

```js
import { getCache } from '@defaultsbotdevelopment/dbd-tools';

const data = getCache('cache.json');

console.log(data); // => { "key": "value" }
```

#### `updateCache`

Update a cache file with new JSON data in an asynchronous manner.

```js
import { updateCache, getCache } from '@defaultsbotdevelopment/dbd-tools';

let data = getCache('cache.json');

data.key = 'new value';

data = await updateCache('cache.json', data);

console.log(data); // => { key: "new value" }
```

### Convert

All available convert utility functions.

#### `hexToDecimal`

Converts a hexadecimal string to a decimal number.

```js
import { hexToDecimal } from '@defaultsbotdevelopment/dbd-tools';

const hex = '#FFFFFF';

console.log(hexToDecimal(hex)); // => 16777215
```

#### `toBoolean`

Converts a value to a boolean. Returns `null` if the value cannot be converted.
This function accepts a range of values, including strings, numbers, and booleans.
It even supports custom strings, which can be passed in the options object. All checks are case-insensitive.

```js
import { toBoolean } from '@defaultsbotdevelopment/dbd-tools';

let options = {
    boolean: true, // Accept booleans
    string: true, // Accept strings
    number: true, // Accept numbers
    // Custom strings
    custom:{
        true: ['yes', 'y', 'ja'],
        false: ['no', 'n', 'nee']
    }

console.log(toBoolean(true, options)); // => true
console.log(toBoolean('true', options)); // => true
console.log(toBoolean(1, options)); // => true
console.log(toBoolean('yes', options)); // => true

console.log(toBoolean(false, options)); // => false
console.log(toBoolean('false', options)); // => false
console.log(toBoolean(0, options)); // => false
console.log(toBoolean('no', options)); // => false

console.log(toBoolean('maybe', options)); // => null (not specified as a custom string)
};
```

### Discord

All available Discord utility functions.

#### `formatButtons`

Formats buttons into action rows to be used in a message.

```js
import { formatButtons } from '@defaultsbotdevelopment/dbd-tools';

const buttons = [
    {
        button_data...
    },
    {
        button_data...
    },
    {
        button_data...
    }
    Twelve more buttons...
];

const actionRows = formatButtons(buttons); // => Returns an array of action rows with buttons
```

#### `formatSelects`

Formats an array of strings in (multiple) select menus with a max of 25 options per menu.

```js
import { formatSelects } from '@defaultsbotdevelopment/dbd-tools';

const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    95 more...
];

const selectMenus = formatSelects(options); // => Returns an array of action rows with select menus. Each select menu has a max of 25 options.
```

#### `getMentions`

Get mentions from a string. Supports users, roles, and channels.
Returns an object with the following properties: `users`, `roles`, `channels`.
Each property is an array of IDs.

```js
import { getMentions } from '@defaultsbotdevelopment/dbd-tools';

let options = {
	users: true, // Accept users
	roles: true, // Accept roles
	channels: true, // Accept channels
};

const string = 'Hello world! <@1234567890> <@&1234567890> <#1234567890>';

console.log(getMentions(string, options)); // => { users: ['1234567890'], roles: ['1234567890'], channels: ['1234567890'] }
```

#### Number

All available number utility functions.

#### `getRandom`

Get a random number between a minimum and maximum value. Both the minimum and maximum value are inclusive.

```js
import { getRandom } from '@defaultsbotdevelopment/dbd-tools';

console.log(getRandom(1, 10)); // => 5
```

### Object

All available object utility functions.

#### `getValue`

Get a value from an object using a path. The path is a string with keys separated by a dot.

```js
import { getValue } from '@defaultsbotdevelopment/dbd-tools';

const object = {
	key: {
		key2: 'value',
	},
};

console.log(getValue(object, 'key.key2')); // => 'value'
```

#### `setValue`

Set a value in an object using a path. The path is a string with keys separated by a dot.
If the path does not exist, it will be created.

```js
import { setValue } from '@defaultsbotdevelopment/dbd-tools';

const object = {
	key: {
		key2: 'value',
	},
};

console.log(setValue(object, 'key.key3', 'another value')); // => { key: { key2: 'value', key3: 'another value' } }
```

#### `hasKey`

Check if an object has a key. Works with nested objects.

```js
import { hasKey } from '@defaultsbotdevelopment/dbd-tools';

const object = {
	key: {
		key2: 'value',
	},
};

console.log(hasKey(object, 'key')); // => true
console.log(hasKey(object, 'key2')); // => true
```

#### `hasValue`

Check if an object has a value. Works with nested objects.

```js
import { hasValue } from '@defaultsbotdevelopment/dbd-tools';

const object = {
	key: {
		key2: 'value',
	},
};

console.log(hasValue(object, 'value')); // => true
```

#### `getKeys`

Get all keys from an object. Returns an array of keys. Works with nested objects.

```js
import { getKeys } from '@defaultsbotdevelopment/dbd-tools';

const object = {
	key: {
		key2: 'value',
	},
};

console.log(getKeys(object)); // => ['key', 'key2']
```

#### `getValues`

Get all values from an object. Returns an array of values. Works with nested objects.

```js
import { getValues } from '@defaultsbotdevelopment/dbd-tools';

const object = {
	key: {
		key2: 'value',
	},
};

console.log(getValues(object)); // => ['value']
```

#### `getEntries`

Get all entries from an object. Returns an array of entries. Works with nested objects.

```js
import { getEntries } from '@defaultsbotdevelopment/dbd-tools';

const object = {
	key: {
		key2: 'value',
	},
};

console.log(getEntries(object)); // => [['key', { key2: 'value' }], ['key2', 'value']]
```

#### `flatten`

Flatten an object. Returns an object with all nested objects flattened.
Only the last key of each nested object is kept.

```js
const object = {
	key: {
		key2: 'value',
	},
};

console.log(flatten(object)); // => { key_key2: 'value' }
```

### Parse

All available parse utility functions.

#### `parseEmojis`

Parse emojis from a string. Returns all emojis in an array.
Only unicode emojis are supported.

```js
import { parseEmojis } from '@defaultsbotdevelopment/dbd-tools';

const string = 'Hello world! 😃';

console.log(parseEmojis(string)); // => ['😃']
```

#### `parseHexColors`

Parse hex colors from a string. Returns all hex colors in an array.

```js
const string = 'Hello world! #FFFFFF';

console.log(parseHexColors(string)); // => ['#FFFFFF']
```

#### `parseRgbColors`

Parse RGB colors from a string. Returns all RGB colors in an array.

```js
const string = 'Hello world! rgb(255, 255, 255)';

console.log(parseRgbColors(string)); // => ['rgb(255, 255, 255)']
```

#### `parseHslColors`

Parse HSL colors from a string. Returns all HSL colors in an array.

```js
const string = 'Hello world! hsl(0, 0%, 100%)';

console.log(parseHslColors(string)); // => ['hsl(0, 0%, 100%)']
```

#### `parseDecimalColors`

Parse decimal colors from a string. Returns all decimal colors in an array.

```js
const string = 'Hello world! 16777215';

console.log(parseDecimalColors(string)); // => ['16777215']
```

### String

All available string utility functions.

#### `generateUuid`

Generate a Universally Unique Identifier (UUID).

```js
import { generateUuid } from '@defaultsbotdevelopment/dbd-tools';

console.log(generateUuid()); // => 'f4e7a3d0-6b2f-4b1d-8a5c-8d9d9b9b9b9b'
```

#### `replacer`

Replaces all placeholders in a string with the corresponding values.

```js
import { replacer } from '@defaultsbotdevelopment/dbd-tools';

const string = '{greeting} {user}!';

const placeholders = {
	greeting: 'Hello',
	user: 'world',
};

console.log(replacer(string, placeholders)); // => 'Hello world!'
```

### Time

All available time utility functions.

#### `msToTimeObject`

Converts milliseconds to an object with the following available properties: `years`, `months`, `weeks`,`days`, `hours`, `minutes`, `seconds`, `milliseconds`.

You can also specify which properties you want to include in the object. All properties are included by default.

```js
import { msToTimeObject } from '@defaultsbotdevelopment/dbd-tools';

const ms = 1000000000;

console.log(msToTimeObject(ms)); // => { years: 0, months: 0, weeks: 1, days: 4, hours: 13, minutes: 46, seconds: 40 }

console.log(msToTimeObject(ms, { seconds: true, minutes: true })); // => { minutes: 16666, seconds: 40 }
```

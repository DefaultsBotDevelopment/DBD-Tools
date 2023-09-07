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
```

## Functions

The functions are categorized into the following categories:

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

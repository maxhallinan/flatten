# flatten

Flatten arbitrarily nested arrays into a new array.

This implementation avoids `Array` and `Array.prototype` methods, and the spread
syntax. Just for fun.

## Usage

```js
const flatten = require('flatten');

flatten([[1, 2, [3]], 4]);
//=> [1, 2, 3, 4]
```


## API

### flatten(array)

#### array

Type: `Array`

The array to flatten.

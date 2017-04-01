# flattin

Flatten arbitrarily nested arrays into a new array.

This implementation avoids `Array` and `Array.prototype` methods, and spread/rest.
Just for fun.

## Usage

```js
const flattin = require('flattin');

flattin([[1, 2, [3]], 4]);
//=> [1, 2, 3, 4]
```


## API

### flattin(array)

#### array

Type: `Array`

The array to flatten.

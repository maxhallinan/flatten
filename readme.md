# flatten

Flatten nested arrays into a new array.

This implementation intentionally uses no language methods or features; e.g.
`Array.prototype.reduce`, `Array.isArray`, and the spread operator.


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

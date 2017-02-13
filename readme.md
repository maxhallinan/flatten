# flatten

Flatten nested arrays into a new array.

This implementation intentionally uses no prototype methods (e.g.,
`Array.prototype.reduce`, `Array.isArray`, etc.) or relevant language features
(e.g., spread operator).


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

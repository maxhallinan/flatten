# flatten

Flatten nested arrays into a new array.

This implementation intentionally uses no prototype methods (e.g.,
`Array.prototype.reduce`, `Array.prototype.map`, `Array.isArray`, etc.) or
relevant language features (spread operator).


## Install

```
$ npm install --save flatten
```


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

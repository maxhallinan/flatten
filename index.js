'use strict';

/**
 * flatten nested arrays into a new array
 * @param {Array} array - the array to flatten
 * @returns {Array} - the new flattened array
 */
function flattin(array) {
  if (!isArray(array)) {
    throw new TypeError('Expected first argument to be an array.');
  }

  return (function _flatten(source, target) {
    return reduce(source, function (result, value) {
      if (isArray(value)) {
        return _flatten(value, result);
      }

      result[result.length] = value;

      return result;
    }, target);
  })(array, []);
}

/**
 * test if a value is an array
 * @private
 * @param {*} value - the value to test
 * @returns {boolean} - `true` if value is an array, or `false`.
 */
function isArray(value) {
  return value && value.constructor === Array;
}

/**
 * test if a value is a function
 * @private
 * @param {*} value - the value to test
 * @returns {boolean} - `true` if value is a function, or `false`.
 */
function isFunction(value) {
  return value && value.constructor === Function;
}

/**
 * reduces an array to a value by calling a function on every item in the array
 * @private
 * @param {Array} array - the array to reduce
 * @param {reducer} callback - the function called on every item in array
 * @param {*} [initialValue] - value to use as the first argument to the first call of callback. Defaults to an array.
 * @returns {*} the reduced value
 */
function reduce(array, callback, initialValue) {
  var result;

  if (!isArray(array)) {
    throw new Error('Expected first argument to be an array');
  }

  if (!isFunction(callback)) {
    throw new Error('Expected second argument to be a function');
  }

  result = initialValue || [];

  for (var i = 0; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }

  return result;
}

/**
 * @private
 * @callback reducer
 * @param {*} accumulator - the return value of the previous call or the initialValue if the first call.
 * @param {*} currentValue - the current element of the array
 * @param {Number} currentIndex - the current index of the array
 * @param {Array} array - the array supplied to `reduce`
 * @returns {*}
 */

module.exports = flattin;

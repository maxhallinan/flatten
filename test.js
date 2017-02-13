import test from 'ava';
import fn from '.';

const input = [[1, 2, [3]], 4];
const expected = [1, 2, 3, 4];
const result = fn(input);

test('flattens nested arrays into a new array', t => {
  t.deepEqual(result, expected);
});

test('throws a TypeError if first argument is not an array', t => {
  const errorClass = TypeError;
  const errorMessage = 'Expected first argument to be an array.';

  const boolError = t.throws(() => {
    fn(true);
  }, errorClass);

  const nullError = t.throws(() => {
    fn(null);
  }, errorClass);

  const numError = t.throws(() => {
    fn(0);
  }, errorClass);

  const objError = t.throws(() => {
    fn({});
  }, errorClass);

  const stringError = t.throws(() => {
    fn('');
  }, errorClass);

  const symError = t.throws(() => {
    fn(Symbol('test'));
  }, errorClass);

  const undefError = t.throws(() => {
    fn();
  }, errorClass);

  t.is(boolError.message, errorMessage);
  t.is(nullError.message, errorMessage);
  t.is(numError.message, errorMessage);
  t.is(objError.message, errorMessage);
  t.is(stringError.message, errorMessage);
  t.is(symError.message, errorMessage);
  t.is(undefError.message, errorMessage);
});

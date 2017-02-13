import test from 'ava';
import fn from '.';

const input = [[1, 2, [3]], 4];
const expected = [1, 2, 3, 4];
const result = fn(input);

test('flatten', t => {
  t.deepEqual(result, expected);
});

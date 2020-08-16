import { min } from '../index';

it.each([
  [-1, 2, -1],
  [2, -1, -1],
  [5, 10, 5],
])('min(%d, %d) is %d', (a, b, expected) => {
  expect(min(a, b)).toEqual(expected);
});

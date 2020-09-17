import and from './index';

test('and function should work', () => {
  expect(and(true, false)).toBe(false);
  expect(and(true, true)).toBe(true);
});

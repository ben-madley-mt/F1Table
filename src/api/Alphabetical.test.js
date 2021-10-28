import Alphabetical from './Alphabetical';

test('Alphabetical sorts alphabetically', () => {
  expect(new Alphabetical().getOrder([
    ['b', 'position', 3],
    ['a', 'position', 3],
  ])).toStrictEqual([
    ['a', 'position', 3],
    ['b', 'position', 3],
  ]);
});
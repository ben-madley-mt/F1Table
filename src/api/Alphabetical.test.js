import Alphabetical from './Alphabetical';

test('Alphabetical sorts alphabetically', () => {
  expect(new Alphabetical().getOrder({
    'b': {positions:['position'], total: 4},
    'a': {positions:['position'], total: 4},
  })).toStrictEqual(['a', 'b']);
});
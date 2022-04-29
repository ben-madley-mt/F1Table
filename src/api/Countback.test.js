import Countback from './Countback';

test('Example test', () => {
  expect(new Countback().getOrder({
    'b': { positions: ['2'], total: 0 },
    'a': { positions: ['1'], total: 3 },
  })).toStrictEqual(['a', 'b']);
});

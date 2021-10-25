import SeasonTotal from './SeasonTotal';

test('Test SeasonTotal', () => {
  expect(new SeasonTotal().getScoreForSeason({pointsFor: (x) => 4}, ['1','2','3'])).toBe(12);
  expect(new SeasonTotal().getScoreForSeason({pointsFor: (x) => parseInt(x)}, ['1','2','3'])).toBe(6);
});
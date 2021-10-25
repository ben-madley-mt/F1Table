import SeasonTotal from './SeasonTotal';

test('Test SeasonTotal', () => {
  expect(SeasonTotal.getScoreForSeason((x) => 4, ['1','2','3'])).toBe(12);
  expect(SeasonTotal.getScoreForSeason((x) => parseInt(x), ['1','2','3'])).toBe(6);
});
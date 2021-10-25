import BestRaceTotal from './BestRaceTotal';

test('Test BestRaceTotal', () => {
  expect(new BestRaceTotal(2).getScoreForSeason({pointsFor: (x) => 4}, ['1','2','3'])).toBe(8);
  expect(new BestRaceTotal(1).getScoreForSeason({pointsFor: (x) => 4}, ['1','2','3'])).toBe(4);
  expect(new BestRaceTotal(2).getScoreForSeason({pointsFor: (x) => parseInt(x)}, ['1','2','3'])).toBe(5);
});
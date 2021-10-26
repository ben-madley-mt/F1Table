import NormalScore from './NormalScore';

var points = {
  '1': 3,
  '2': 2,
  '3': 1,
};


test('Normal scoring works', () => {
  expect(new NormalScore(points, 0).pointsFor('1')).toBe(3);
  expect(new NormalScore(points, 0).pointsFor('2')).toBe(2);
  expect(new NormalScore(points, 0).pointsFor('3')).toBe(1);
  expect(new NormalScore(points, 0).pointsFor('11')).toBe(0);
  expect(new NormalScore(points, 0).pointsFor('12')).toBe(0);
  expect(new NormalScore(points, 0).pointsFor('')).toBe(0);
  expect(new NormalScore(points, 0).pointsFor('Ret')).toBe(0);
});

test('Point for fastest lap if included', () => {
  expect(new NormalScore(points, 1).pointsFor('1F')).toBe(4);
  expect(new NormalScore(points, 2).pointsFor('1F')).toBe(5);
  expect(new NormalScore(points, 1).pointsFor('1PF')).toBe(4);
  expect(new NormalScore(points, 1).pointsFor('1P')).toBe(3);
  expect(new NormalScore(points, 1).pointsFor('4F')).toBe(0);
});

test('No point for fastest lap if not included', () => {
  expect(new NormalScore(points, 0).pointsFor('1F')).toBe(3);
  expect(new NormalScore(points, 0).pointsFor('1PF')).toBe(3);
  expect(new NormalScore(points, 0).pointsFor('1P')).toBe(3);
  expect(new NormalScore(points, 0).pointsFor('4F')).toBe(0);
});

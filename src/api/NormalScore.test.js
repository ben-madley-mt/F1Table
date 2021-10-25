import NormalScore from './NormalScore';

test('Normal scoring works', () => {
  expect(NormalScore.pointsFor('1')).toBe(25);
  expect(NormalScore.pointsFor('2')).toBe(18);
  expect(NormalScore.pointsFor('3')).toBe(15);
  expect(NormalScore.pointsFor('4')).toBe(12);
  expect(NormalScore.pointsFor('5')).toBe(10);
  expect(NormalScore.pointsFor('6')).toBe(8);
  expect(NormalScore.pointsFor('7')).toBe(6);
  expect(NormalScore.pointsFor('8')).toBe(4);
  expect(NormalScore.pointsFor('9')).toBe(2);
  expect(NormalScore.pointsFor('10')).toBe(1);
  expect(NormalScore.pointsFor('11')).toBe(0);
  expect(NormalScore.pointsFor('12')).toBe(0);
  expect(NormalScore.pointsFor('')).toBe(0);
  expect(NormalScore.pointsFor('Ret')).toBe(0);
});

test('Point for fastest lap', () => {
  expect(NormalScore.pointsFor('1F')).toBe(26);
  expect(NormalScore.pointsFor('1PF')).toBe(26);
  expect(NormalScore.pointsFor('1P')).toBe(25);
  expect(NormalScore.pointsFor('11F')).toBe(0);
});

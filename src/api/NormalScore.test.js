import NormalScore from './NormalScore';

test('Normal scoring works', () => {
  expect(new NormalScore().pointsFor('1')).toBe(25);
  expect(new NormalScore().pointsFor('2')).toBe(18);
  expect(new NormalScore().pointsFor('3')).toBe(15);
  expect(new NormalScore().pointsFor('4')).toBe(12);
  expect(new NormalScore().pointsFor('5')).toBe(10);
  expect(new NormalScore().pointsFor('6')).toBe(8);
  expect(new NormalScore().pointsFor('7')).toBe(6);
  expect(new NormalScore().pointsFor('8')).toBe(4);
  expect(new NormalScore().pointsFor('9')).toBe(2);
  expect(new NormalScore().pointsFor('10')).toBe(1);
  expect(new NormalScore().pointsFor('11')).toBe(0);
  expect(new NormalScore().pointsFor('12')).toBe(0);
  expect(new NormalScore().pointsFor('')).toBe(0);
  expect(new NormalScore().pointsFor('Ret')).toBe(0);
});

test('Point for fastest lap', () => {
  expect(new NormalScore().pointsFor('1F')).toBe(26);
  expect(new NormalScore().pointsFor('1PF')).toBe(26);
  expect(new NormalScore().pointsFor('1P')).toBe(25);
  expect(new NormalScore().pointsFor('11F')).toBe(0);
});

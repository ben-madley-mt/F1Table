import Countback from './Countback';

test('Test Countback sorts by last column', () => {
  expect(new Countback().getOrder([
    ['worst', '2', '1', '2', 4],
    ['best', '1', '2', '1', 5],
  ])).toStrictEqual([
    ['best', '1', '2', '1', 5],
    ['worst', '2', '1', '2', 4],
  ]);
});

test('Test Countback sorts by best position if same points', () => {
  expect(new Countback().getOrder([
    ['worst', '3', '2', '2', 4],
    ['middle', '1', '3', '3', 4],
    ['best', '2', '1', '1', 5],
  ])).toStrictEqual([
    ['best', '2', '1', '1', 5],
    ['middle', '1', '3', '3', 4],
    ['worst', '3', '2', '2', 4],
  ]);
});

test('Test Countback sorts by most of best position if same best position', () => {
  expect(new Countback().getOrder([
    ['worst', '3', '3', '2', 4],
    ['middle', '2', '2', '3', 4],
    ['best', '1', '1', '1', 5],
  ])).toStrictEqual([
    ['best', '1', '1', '1', 5],
    ['middle', '2', '2', '3', 4],
    ['worst', '3', '3', '2', 4],
  ]);
});

test('Test Countback sorts by second best position if same number of equal number of best position', () => {
  expect(new Countback().getOrder([
    ['worst', '4', '5', '2', 4],
    ['middle', '2', '4', '3', 4],
    ['best', '1', '1', '1', 5],
  ])).toStrictEqual([
    ['best', '1', '1', '1', 5],
    ['middle', '2', '4', '3', 4],
    ['worst', '4', '5', '2', 4],
  ]);
});

test('Test Ignores fl and pole', () => {
  expect(new Countback().getOrder([
    ['worst', '3F', '2', '2', 4],
    ['middle', '1', '3P', '3', 4],
    ['best', '2F', '1', '1P', 5],
  ])).toStrictEqual([
    ['best', '2F', '1', '1P', 5],
    ['middle', '1', '3P', '3', 4],
    ['worst', '3F', '2', '2', 4],
  ]);
});

test('Test Ignores empty, dnf etc.', () => {
  expect(new Countback().getOrder([
    ['worst', '', '', '', 4],
    ['middle', '1', '3', 'DNF', 4],
    ['best', '2', '1', '1', 5],
  ])).toStrictEqual([
    ['best', '2', '1', '1', 5],
    ['middle', '1', '3', 'DNF', 4],
    ['worst', '', '', '', 4],
  ]);
});

import Countback from './Countback';

test('Countback sorts by last column', () => {
  expect(new Countback().getOrder([
    ['worst', '2', '1', '2', 4],
    ['best', '1', '2', '1', 5],
  ])).toStrictEqual([
    ['best', '1', '2', '1', 5],
    ['worst', '2', '1', '2', 4],
  ]);
});

test('Countback sorts by best position if same points', () => {
  expect(new Countback().getOrder([
    ['worst', '3', 4],
    ['best', '1', 4],
  ])).toStrictEqual([
    ['best', '1', 4],
    ['worst', '3', 4],
  ]);
});

test('Countback sorts by 2nd best position if same 1st best position', () => {
  expect(new Countback().getOrder([
    ['worst', '1', '2', 4],
    ['best', '1', '1', 4],
  ])).toStrictEqual([
    ['best', '1', '1', 4],
    ['worst', '1', '2', 4],
  ]);
});

test('Countback works when results are not in order', () => {
  expect(new Countback().getOrder([
    ['worst', '2', '1', 4],
    ['best', '1', '1', 4],
  ])).toStrictEqual([
    ['best', '1', '1', 4],
    ['worst', '2', '1', 4],
  ]);
});

test('Countback sorts by second best position if same number of equal number of best position', () => {
  expect(new Countback().getOrder([
    ['worst', '1', '3', 4],
    ['best', '1', '2', 4],
  ])).toStrictEqual([
    ['best', '1', '2', 4],
    ['worst', '1', '3', 4],
  ]);
});

test('Countback sorts by most of best position if same best position', () => {
  expect(new Countback().getOrder([
    ['worst', '1', '1', '2', 4],
    ['best', '1', '1', '1', 4],
  ])).toStrictEqual([
    ['best', '1', '1', '1', 4],
    ['worst', '1', '1', '2', 4],
  ]);
});

test('Ignores fl and pole', () => {
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

test('dnf count as worst possible score', () => {
  expect(new Countback().getOrder([
    ['worst', 'DNF', 4],
    ['best', '1', 4],
  ])).toStrictEqual([
    ['best', '1', 4],
    ['worst', 'DNF', 4],
  ]);
});

test('empty count as worst possible score', () => {
  expect(new Countback().getOrder([
    ['worst', '', 4],
    ['best', '1', 4],
  ])).toStrictEqual([
    ['best', '1', 4],
    ['worst', '', 4],
  ]);
});

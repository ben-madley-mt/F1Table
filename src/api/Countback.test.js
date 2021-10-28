import Countback from './Countback';

test('Countback sorts by last column', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['2', '1', '2'], total: 4 },
    'best': { positions: ['1', '2', '1'], total: 5 },
  })).toStrictEqual(['best', 'worst']);
});

test('Countback sorts by best position if same points', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['3'], total: 4 },
    'best': { positions: ['1'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

test('Countback sorts by 2nd best position if same 1st best position', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['1', '2'], total: 4 },
    'best': { positions: ['1', '1'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

test('Countback works when results are not in order', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['1', '2', '3'], total: 4 },
    'best': { positions: ['2', '1', '1'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

test('Countback sorts by second best position if same number of equal number of best position', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['1', '3'], total: 4 },
    'best': { positions: ['1', '2'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

test('Countback sorts by most of best position if same best position', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['1', '1', '2'], total: 4 },
    'best': { positions: ['1', '1', '1'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

test('Ignores fl and pole', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['3F', '2', '2'], total: 4 },
    'middle': { positions: ['1', '3P', '3'], total: 4 },
    'best': { positions: ['2F', '1', '1P'], total: 5 },
  })).toStrictEqual(['best', 'middle', 'worst']);
});

test('dnf count as worst possible score', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['DNF'], total: 4 },
    'best': { positions: ['1'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

test('empty count as worst possible score', () => {
  expect(new Countback().getOrder({
    'worst': { positions: [''], total: 4 },
    'best': { positions: ['1'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

test('Countback works when results are two digits', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['1', '4', '5'], total: 4 },
    'best': { positions: ['1', '11', '3'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

test('First race retirement', () => {
  expect(new Countback().getOrder({
    'worst': { positions: ['2', '2'], total: 4 },
    'best': { positions: ['Ret', '1'], total: 4 },
  })).toStrictEqual(['best', 'worst']);
});

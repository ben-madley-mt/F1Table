import { render, screen } from '@testing-library/react';
import Countback from './api/Countback';
import SeasonTotal from './api/SeasonTotal';
import ChampionshipTable from './ChampionshipTable';


test('Test table generation', () => {
  const smallTable = {
    "best": ["1", "2", "1"],
    "worst": ["2", "1", "2"],
  };

  const testScorer = {pointsFor: (position) => 0};
  const testTotaler = {getScoreForSeason: (allPositions) => 1234};

  render(
    <ChampionshipTable results={smallTable} scorer={testScorer} totaler={testTotaler} orderer={new Countback()}></ChampionshipTable>,
  );

  const output = getTableAsArray();

  expect(output).toStrictEqual([
    ['Driver', '1', '2', '3', 'Points'],
    ['best', '1', '2', '1', '1234'],
    ['worst', '2', '1', '2', '1234'],
  ]);
});

test('Test table ordered by points', () => {
  const smallTable = {
    "worst": ["2", "1", "2"],
    "best": ["1", "2", "1"],
  };

  const testScorer = {pointsFor: (position) => 3 - parseInt(position)};

  render(
    <ChampionshipTable results={smallTable} scorer={testScorer} totaler={new SeasonTotal()} orderer={new Countback()}></ChampionshipTable>,
  );

  const output = getTableAsArray();

  expect(output[1][0]).toBe('best');
  expect(output[2][0]).toBe('worst');
});

function getTableAsArray() {
  const table = screen.getByTestId('test-table');

  const head = table.getElementsByTagName('thead')[0];
  const body = table.getElementsByTagName('tbody')[0];

  let output = [];
  (Array.from(head.children).concat(Array.from(body.children))).forEach(element => {
    let newRow = [];
    Array.from(element.children).forEach(e2 => {
      newRow.push(e2.innerHTML);
    });

    output.push(newRow);
  });
  return output;
}

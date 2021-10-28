function ChampionshipTable(props) {
  
  function calculateDriverScore(allPositions) {
    return props.totaler.getScoreForSeason(props.scorer, allPositions);
  }

  const seasonResults = props.results;

  const seasonLength = seasonResults[Object.keys(seasonResults)[0]].length;
  let header = ['Driver'];
  for (let i = 0; i < seasonLength; i++) {
    header.push(i + 1);
  }
  header.push('Points');

  header = header.map((cell) => <th key={cell}>{cell}</th>)


  let driverRestultsAndTotals = {};
  for (const driver in seasonResults) {
    const results = seasonResults[driver].slice();

    driverRestultsAndTotals[driver] = {positions:results, total: calculateDriverScore(results)}
  }

  const driverOrder = props.orderer.getOrder(driverRestultsAndTotals)

  let table = driverOrder.map((driver) => [driver].concat(driverRestultsAndTotals[driver].positions, [driverRestultsAndTotals[driver].total]));

  table = table.map((row, i) => <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)

  return (
    <table data-testid="test-table">
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>
        {table}
      </tbody>
    </table>
  );
}

export default ChampionshipTable;

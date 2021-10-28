function ChampionshipTable(props) {

  const seasonResults = props.results;

  let header = createHeader();
  let table = createBody();

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

  function createHeader() {
    const seasonLength = seasonResults[Object.keys(seasonResults)[0]].length;
    let header = ['Driver'];
    for (let i = 0; i < seasonLength; i++) {
      header.push(i + 1);
    }
    header.push('Points');

    header = header.map((cell) => <th key={cell}>{cell}</th>);

    return header;
  }

  function createBody() {
    let driverRestultsAndTotals = {};
    for (const driver in seasonResults) {
      const results = seasonResults[driver].slice();

      driverRestultsAndTotals[driver] = {
        positions: results,
        total: calculateDriverScore(results)
      };
    }

    const driverOrder = props.orderer.getOrder(driverRestultsAndTotals);

    let table = driverOrder.map(
      (driver) => [driver].concat(driverRestultsAndTotals[driver].positions, [driverRestultsAndTotals[driver].total])
    );

    table = table.map((row) => <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)

    return table;
  }

  function calculateDriverScore(allPositions) {
    return props.totaler.getScoreForSeason(props.scorer, allPositions);
  }
}

export default ChampionshipTable;

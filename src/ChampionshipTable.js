import React from "react";

class ChampionshipTable extends React.Component {
  render() {
    const seasonResults = this.props.results;

    const seasonLength = seasonResults[Object.keys(seasonResults)[0]].length;
    let header = ['Driver'];
    for (let i = 0; i < seasonLength; i++) {
      header.push(i + 1);
    }
    header.push('Points');

    header = header.map((cell) => <th key={cell}>{cell}</th>)


    let table = [];
    for (const driver in seasonResults) {
      const results = seasonResults[driver];
      const row = [driver].concat(results);
      row.push(this.calculateDriverScore(results));

      table.push(row)
    }

    table.sort((a, b) => b[seasonLength + 1] - a[seasonLength + 1])

    table = table.map((row, i) => <tr key={i}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)

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

  calculateDriverScore(allPositions) {
    return this.props.totaler.getScoreForSeason(this.props.scorer, allPositions);
  }
}

export default ChampionshipTable;

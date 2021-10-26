import './App.css';
import ChampionshipTable from './ChampionshipTable';
import seasonResults from './api/2020Results';
import SeasonTotal from './api/SeasonTotal';
import NormalScore from './api/NormalScore';
import BestRaceTotal from './api/BestRaceTotal';
import React from 'react';
import Utility from './api/Utility';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalValue: 'all', scoreValue: "10fl" };
    this.handleTotalerChange = this.handleTotalerChange.bind(this);
    this.handleScorerChange = this.handleScorerChange.bind(this);

    this.totaler = new SeasonTotal();
    this.scorer = new NormalScore(Utility.pointsSystems.top10, 1);
  }

  handleTotalerChange(event) {
    this.setState({ totalValue: event.target.value });

    switch (event.target.value) {
      case "all":
        this.totaler = new SeasonTotal();
        break;
      case "5":
        this.totaler = new BestRaceTotal(5);
        break;
      case "10":
        this.totaler = new BestRaceTotal(10);
        break;
      default:
        this.totaler = new SeasonTotal();
        break;
    }
  }

  handleScorerChange(event) {
    this.setState({ scoreValue: event.target.value });

    switch (event.target.value) {
      case "10fl":
        this.scorer = new NormalScore(Utility.pointsSystems.top10, 1);
        break;
      case "10nofl":
        this.scorer = new NormalScore(Utility.pointsSystems.top10, 0);
        break;
      case "8":
        this.scorer = new NormalScore(Utility.pointsSystems.top8, 0);
        break;
      case "6":
        this.scorer = new NormalScore(Utility.pointsSystems.top6, 0);
        break;
      case "6trad":
        this.scorer = new NormalScore(Utility.pointsSystems.top6trad, 0);
        break;
      case "5":
        this.scorer = new NormalScore(Utility.pointsSystems.top5, 0);
        break;
      case "fl":
        this.scorer = new NormalScore(Utility.pointsSystems.none, 1);
        break;
      default:
        this.scorer = new NormalScore(Utility.pointsSystems.top10, 1);
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <ChampionshipTable results={seasonResults} totaler={this.totaler} scorer={this.scorer}></ChampionshipTable>
        <label htmlFor="totaler-select">Totaler</label>
        <select name="totaler-select" id="totaler-select" value={this.state.totalValue} onChange={this.handleTotalerChange}>
          <option value="all">All Results</option>
          <option value="10">Best 10</option>
          <option value="5">Best 5</option>
        </select>

        <label htmlFor="scorer-select">Scorer</label>
        <select name="scorer-select" id="scorer-select" value={this.state.scoreValue} onChange={this.handleScorerChange}>
          <option value="10fl">Top 10 (FL)</option>
          <option value="10nofl">Top 10 (No FL)</option>
          <option value="8">Top 8</option>
          <option value="6">Top 6</option>
          <option value="6trad">Top 6 (traditional)</option>
          <option value="5">Top 5</option>
          <option value="fl">FL Only</option>
        </select>
      </div>
    );
  }
}
export default App;

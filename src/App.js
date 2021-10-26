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
    this.state = { value: 'all' };
    this.handleChange = this.handleChange.bind(this);

    this.totaler = new SeasonTotal();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

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

  render() {
    return (
      <div className="App">
        <ChampionshipTable results={seasonResults} totaler={this.totaler} scorer={new NormalScore(Utility.pointsSystems.standard, 1)}></ChampionshipTable>
        <label htmlFor="totaler-select">Totaler</label>
        <select name="totaler-select" id="totaler-select" value={this.state.value} onChange={this.handleChange}>
          <option value="all">All Results</option>
          <option value="10">Best 10</option>
          <option value="5">Best 5</option>
        </select>
      </div>
    );
  }
}
export default App;

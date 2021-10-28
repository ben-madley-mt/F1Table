import './App.css';
import ChampionshipTable from './ChampionshipTable';
import seasonResults from './api/2020Results';
import React from 'react';
import useMethodologyChange from './useMethodologyChange';

function App() {
  const [totaler, scorer, orderer, handleTotalerChange, handleScorerChange, handleOrdererChange] = useMethodologyChange();

  return (
    <div className="App">
      <ChampionshipTable results={seasonResults} totaler={totaler} scorer={scorer} orderer={orderer}></ChampionshipTable>
      <label htmlFor="totaler-select">Totaler</label>
      <select name="totaler-select" id="totaler-select" onChange={handleTotalerChange}>
        <option value="all">All Results</option>
        <option value="10">Best 10</option>
        <option value="5">Best 5</option>
      </select>

      <label htmlFor="scorer-select">Scorer</label>
      <select name="scorer-select" id="scorer-select" onChange={handleScorerChange}>
        <option value="10fl">Top 10 (FL)</option>
        <option value="10nofl">Top 10 (No FL)</option>
        <option value="8">Top 8</option>
        <option value="6">Top 6</option>
        <option value="6trad">Top 6 (traditional)</option>
        <option value="5">Top 5</option>
        <option value="20">All 20 drivers score (FL)</option>
        <option value="fl">FL Only</option>
      </select>

      <label htmlFor="orderer-select">Orderer</label>
      <select name="orderer-select" id="orderer-select" onChange={handleOrdererChange}>
        <option value="position">Position</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}

export default App;

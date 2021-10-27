import './App.css';
import ChampionshipTable from './ChampionshipTable';
import seasonResults from './api/2020Results';
import React, { useState } from 'react';
import useMethodologyChange from './useMethodologyChange';
import Countback from './api/Countback';

function App() {
  const [totaler, scorer, handleTotalerChange, handleScorerChange] = useMethodologyChange();

  return (
    <div className="App">
      <ChampionshipTable results={seasonResults} totaler={totaler} scorer={scorer} orderer={new Countback()}></ChampionshipTable>
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
        <option value="fl">FL Only</option>
      </select>
    </div>
  );
}

export default App;

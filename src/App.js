import logo from './logo.svg';
import './App.css';
import ChampionshipTable from './ChampionshipTable';
import seasonResults from './api/2020Results';
import SeasonTotal from './api/SeasonTotal';
import NormalScore from './api/NormalScore';

function App() {
  return (
    <div className="App">
      <ChampionshipTable results={seasonResults} totaler={SeasonTotal} scorer={NormalScore}></ChampionshipTable>
    </div>
  );
}

export default App;

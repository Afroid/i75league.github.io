import logo from './logo.svg';
import pioli from './Pioli.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pioli} className="App-logo" alt="logo" />
        <p>
         09/13/2023 Recap
        </p>
        <p>
         This is where the recap goes.
        </p>
        <a
          className="App-link"
          href="https://fantasy.espn.com/football/league/scoreboard?leagueId=849836"
          target="_blank"
          rel="noopener noreferrer"
        >
          I75 League Scoreboard
        </a>
      </header>
    </div>
  );
}

export default App;

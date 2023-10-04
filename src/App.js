// import logo from './logo.svg';
import pioli from './Pioli.png';

import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Careers from './routes/Careers';
import Home from './routes/Home';
// import Navbar from './NavBar';

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <div className="App">
      <header className="App-header">
        <img src={pioli} className="App-logo" alt="logo" />
        <p>
         10/03/2023 Recap
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

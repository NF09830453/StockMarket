import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ConfigPlay from './ConfigPlayer/ConfigPlay';
import GameMode from './GameM/GameMode';
import Profile from './Portfolio/Profile';
import './App.css';

function App() {
  const location = useLocation();
  const hideButtons = () => {
    // specify the routes for hidden buttons
    
    return(
      location.pathname === '/ConfigPlay'||
      location.pathname === '/GameMode' ||
      location.pathname === '/Profile'
    ); 

  };
  return (
    //<Router>
      <div className="App">

        <header className="App-header">
        <img src="/logoStockm.png"></img>
        {hideButtons() ? null : (
          <>
          <Link to="/Profile">
            <button onClick = {startRound} class= "round">Start Round</button>
          </Link>
          <Link to="/ConfigPlay">
            <button onClick = {configurePlayer} class= "round">Configure Player</button>
          </Link>
            <button onClick = {configureAI} class= "round">Configure AI</button>
          <Link to="/GameMode">
            <button onClick = {configureGameMode} class= "round">Game Mode</button>
          </Link>
          </>
        )}  
          <Routes>
            <Route path="/ConfigPlay" element={<ConfigPlay />} />
            <Route path="/GameMode" element={<GameMode />} />
            <Route path="/Profile" element={<Profile />}/>
          </Routes>
        </header>
        
      </div>
      
    //</Router>
  );
}

function startRound() {
  
}

function configurePlayer() {

}

function configureAI() {

}

function configureGameMode() {

}
export default App;

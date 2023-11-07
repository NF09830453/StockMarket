import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blogs from './ConfigPlayer/Blogs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <header className="App-header">
        <img src="/logoStockm.png"></img>

          <button onClick = {startRound} class= "round">Start Round</button>
          <Link to="/blogs">
            <button onClick = {configurePlayer} class= "round">Configure Player</button>
          </Link>
          <button onClick = {configureAI} class= "round">Configure AI</button>
          <button onClick = {configureGameMode} class= "round">Game Mode</button>
          <Routes>
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
          <button as={Link} to="/Configure-Player">Home</button>
        </header>
        
      </div>
      
    </Router>
  );
}

function startRound() {
  // Handle logic for starting a round
}

function configurePlayer() {

}

function configureAI() {
  // Handle logic for configuring AI
}

function configureGameMode() {
  // Handle logic for configuring the game mode
}
export default App;

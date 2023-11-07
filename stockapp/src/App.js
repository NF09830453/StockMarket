import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src="/logoStockm.png"></img>
        <button onClick = {startRound} class= "round">Start Round</button>
        <button onClick = {configurePlayer} class= "round">Configure Player</button>
        <button onClick = {configureAI} class= "round">Configure AI</button>
        <button onClick = {configureGameMode} class= "round">Game Mode</button>
      </header>
    </div>
  );
}

function startRound() {
  // Handle logic for starting a round
}

function configurePlayer() {
  // Handle logic for configuring players
}

function configureAI() {
  // Handle logic for configuring AI
}

function configureGameMode() {
  // Handle logic for configuring the game mode
}
export default App;

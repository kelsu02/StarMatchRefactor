import { useState } from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  const [gameId, setGameId] = useState(1);
  return <Game key = {gameId} startNewGame = {() => setGameId(gameId +1)}/>;
}

export default App;

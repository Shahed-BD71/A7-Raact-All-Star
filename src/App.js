import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import fakeData from '../src/fakeData/data.json'
import { useState } from 'react';
import Player from './components/Player/Player';
import { useEffect } from 'react';
import Team from './Team/Team';
//API in online: https://api.mocki.io/v1/6c38bbd9

function App() {
  const [players, setPlayers] = useState([]);
  const [myPlayer, setMyPlayer] = useState([]);
  useEffect(() => {
      setPlayers(fakeData)
  },[])
  const handleAddPlayer = (player) => {
      const teamPlayer = [...myPlayer, player]
      setMyPlayer(teamPlayer);
  }
  return (
    <div className="App">
      <h2 className="mt-5">Available Player: {players.length}</h2>
      <h3>Player Added: {myPlayer.length} </h3>
      <Team team={myPlayer}></Team>
          {
            players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
          }
    </div>
  );
}

export default App;

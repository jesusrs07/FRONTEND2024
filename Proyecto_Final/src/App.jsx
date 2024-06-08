import PlayerCard from './components/index'
import './assets/css/index.css'
import SearchPlayer from './SearchPlayer'
import { useState } from 'react'


const App = () => {
  const [players, setPlayers] = useState(["Cristiano Ronaldo"])
 
  return (
    <div className='container'>
      
      <h1 style={{color: "#FFFFFF"}}>Football Api</h1>
      <hr />
      <SearchPlayer players={players} setPlayers={setPlayers} />
      <hr />

      <div className='row'>
      {
        players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))
      }
      </div>
      
      </div>
  )
}

export default App

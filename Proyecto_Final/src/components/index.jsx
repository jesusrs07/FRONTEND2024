import { useEffect, useState } from "react"
import { getPlayer } from "../api/SoccerApi"
import PlayerCardContent from "./PlayerCardContent"
import PlayerCardPlaceholder from "./PlayerCardPlaceholder"

const PlayerCard = ({player}) => {

    const [football, setFootball] = useState(null)

  useEffect(() => {
     const getPlayerFootball = async () => {
    setFootball(await getPlayer(player))
  }

 getPlayerFootball()

  }, [player])

    return(
      
        <div className="col-1 card m-2" style={{width: '18rem'}}>
          
           {
            football ?
            <PlayerCardContent football={football}
            /> :

            <PlayerCardPlaceholder />
           } 
        </div>

    )
}
export default PlayerCard
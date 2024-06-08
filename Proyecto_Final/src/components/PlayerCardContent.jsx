import React from "react"
import PlayerModal from "../SearchPlayer/PlayerModal"
const PlayerCardContent = ({football}) => {
   console.log({football})
    return(
        <>
         <img 
            src={`${football[0].player_image}`} 
            className="card-img-top mt-2" 
            alt="football.player_image.condition.text"/>

            <div className="card-body">
                <h5 className="card-title">{football[0].player_name}</h5>
                <p className="card-text">{football[0].player_complete_name}</p>
                <p className="card-text"> <i className="bi bi-fire"></i>  Posición: {football[0].player_type}</p>
                <p className="card-text"> <ion-icon name="shirt"></ion-icon>  Dorsal: {football[0].player_number}</p>
                <p className="card-text"> <i className="bi bi-flag-fill"></i>  Equipo: {football[0].team_name}</p>
            
                </div> 
                <PlayerModal football={football}/>

                <button
                style={{backgroundColor: "#5CBE57"}}
                type="button" 
                className="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#playerModal">Info</button>
               
                
        </>
    )
}

export default PlayerCardContent
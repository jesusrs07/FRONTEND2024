import React from "react"
const PlayerModal =({football}) => {

    return(
        <div>
            {football && (
        <div className="modal" 
        id="playerModal"
        tabindex="-1">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Información</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="card-text"><ion-icon name="person"></ion-icon> Edad: {football[0].player_age}</p>
      <p className="card-text"><ion-icon name="female"></ion-icon> Fecha Nacimiento: {football[0].player_birthdate}</p>
      <p className="card-text"><ion-icon name="barbell"></ion-icon>  Partidos jugados: {football[0].player_match_played}</p>
      <p className="card-text"><ion-icon name="football"></ion-icon>  Goles: {football[0].player_goals}</p>
      <p className="card-text"><ion-icon name="footsteps"></ion-icon>  Asistencias: {football[0].player_assists}</p>          
      <p className="card-text"> <ion-icon name="walk"></ion-icon>   Minutos Jugados: {football[0].player_minutes}</p>
      <p className="card-text"> <ion-icon name="rocket"></ion-icon>  Tiros: {football[0].player_shots_total}</p>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )}
</div>
    )
}

export default PlayerModal
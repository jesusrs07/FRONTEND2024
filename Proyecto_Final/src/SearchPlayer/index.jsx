import { useForm } from "../Hooks/UseForm"
import Swal from "sweetalert2"


const SearchPlayer = ({players, setPlayers}) => {
    const [values, handleInputChange, reset] = useForm ({
        player: ''
    })

    const handleSearchPlayer = () => {

        if (!values.player) {
            Swal.fire({
              icon: "error",
              title: 'Oopps...',
              text: "Failed to retrieve player data...",
              position: 'center', // Posición de la alerta
        showClass: {
          popup: 'swal2-noanimation', // Desactivar animación de entrada
        },
              footer: 'Please enter a player name'
            });
            return;
          }
      
        const newPlayers = [...players, values.player]
        setPlayers(newPlayers)
        console.log(values.player)
        reset()
    }
    return (
        <div className="input-group">
            <span className="input-group-text">Player</span>
            <input 
            type="text" 
            className="form-control" 
            id="player"
            name="player"
            onChange={handleInputChange}
            value={values.player}/>
    
            <button className="btn btn-primary"
            onClick={handleSearchPlayer}
             type="button">Search</button>
          
        </div>        
    )
}

export default SearchPlayer
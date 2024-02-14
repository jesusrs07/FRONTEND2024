import ListItem from "./ListItem"

const personas = [
  {
    nombre: 'Jesús',
    direccion: 'Tuxtepec, Oaxaca',
    telefono: '2871294770',
    correo: 'jesusrs12@gmail.com'
  },
  {
    nombre: 'Carla',
    direccion: 'Tuxtepec, Oaxaca',
    telefono: '2871451915',
    correo: 'carla08@gmail.com'
  },
  {
    nombre: 'Ronaldo',
    direccion: 'Orizaba, Veracruz',
    telefono: '2871182523',
    correo: 'cr7@gmail.com'
  }
]

function App() {

  return (
    <div>
      <h1>Agenda</h1>
      <hr />
      <ul>
        {
          personas.map((persona) => (
           <ListItem
           key={persona.correo}
           nombre={persona.nombre}
           direccion={persona.direccion}
           telefono={persona.telefono}
           correo={persona.correo}
           />
         
          ))
        }
      </ul>
    </div>
    
  )
}

export default App

const persona = {
  nombre : 'Jesús Isidro Regules Santiago',
  edad : '22 años',
  fecha_nacimiento : '21/10/2001',
  lugar_nacimiento : 'Tuxtepec, Oaxaca',
  signo : 'Libra',
  pasatiempos: [
    'Hacer ejercicio',
    'Jugar fútbol',
    'Videojuegos',
    'Estudiar',
    'Programar'
  ],
}
function App() {

  return (
    <div>
      <h1>Información Personal</h1>
      <hr />
      <ul>
        <li>Nombre completo: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Fecha de Nacimiento: {persona.fecha_nacimiento}</li>
        <li>Lugar de Nacimiento: {persona.lugar_nacimiento}</li>
        <li>Pasatiempos:
          <ul>
            {
              persona.pasatiempos.map((pasatiempo) => {
                return <li key={pasatiempo}>{pasatiempo}</li>
              })
            }
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default App

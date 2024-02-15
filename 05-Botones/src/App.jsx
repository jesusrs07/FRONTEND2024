import { useState } from "react"

let contador = 1


function App() {
  const [contador, setcontador]  = useState(0)

  const handleBotonIncrementar = () => {
    setcontador(contador + 1)
  }

  const handleBotonReiniciar = () => {
    setcontador(0)
  }

  const handleBotonDecrementar = () => {
    setcontador(contador - 1)
  }

  return (
    <div>
      <h1>Contador</h1>
      <hr />
      <h2>{contador}</h2>
      <button onClick={handleBotonIncrementar}>Incrementar</button>
      <button onClick={handleBotonReiniciar}>Reiniciar</button>
      <button onClick={handleBotonDecrementar}>Decrementar</button>
    </div>
  )
}

export default App

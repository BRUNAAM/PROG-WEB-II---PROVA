import './App.css'
import Header from "./componentes/Header/Header"
import Inicio from "./componentes/Inicio/Inicio"
import Evento from "./componentes/Evento/Evento"
import Inscricao from "./componentes/Inscricao/Inscricao"
import Palestrantes from "./componentes/Palestrantes/Palestrantes"
import Cronograma from "./componentes/Cronograma/Cronograma"
import Oficinas from './componentes/Oficinas/Oficinas'

function App() {

  return (
    <>
      <Header />
      <Inicio />
      <Evento />
      <Palestrantes />
      <Inscricao />
      <Oficinas />
      <Cronograma />
    </>
  )
}

export default App

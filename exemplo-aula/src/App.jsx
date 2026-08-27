import Carregando from './components/Carregando'
import ListaUsuarios from './components/ListaUsuarios'

export default function App() {
  return (
    <>
      <Carregando/>
      <h1>Lista de Usuário</h1>
      <ListaUsuarios/>
    </>
  )
}

////export default App (é a mesma coisa do export default function App())

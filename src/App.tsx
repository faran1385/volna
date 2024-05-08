import { Player } from "./components/ui/Player/Player"
import { Sidebar } from "./components/ui/Sidebar/Sidebar"
import { Header } from "./components/ui/header/Header"

function App() {

  return (
    <>
      <main>
        <Sidebar />
        <Header/>
        <Player/>
      </main>
    </>
  )
}

export default App

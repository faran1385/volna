import { createContext, useState } from "react"
import { Player } from "./components/ui/Player/Player"
import { Sidebar } from "./components/ui/Sidebar/Sidebar"
import { Header } from "./components/ui/header/Header"
import { Home } from "./components/ui/Home/Home"
export interface StateMenuType {
  toggleMenu: boolean | null,
  setToggleMenu: (value: boolean) => void
}
export const ContextMenu = createContext<StateMenuType | null>(null)
function App() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  return (
    <>
      <ContextMenu.Provider value={{ toggleMenu, setToggleMenu }}>
        <Sidebar />
        <Header />
      </ContextMenu.Provider>
      <Player />
      <Home />
    </>
  )
}

export default App

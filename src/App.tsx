import { RefObject, createContext, createElement, useRef, useState } from "react"
import { Player } from "./components/ui/Player/Player"
import { Sidebar } from "./components/ui/Sidebar/Sidebar"
import { Header } from "./components/ui/header/Header.tsx"
import { Home } from "./Pages/Home/Home"
export interface StateMenuType {
  toggleMenu: boolean | null,
  setToggleMenu: (value: boolean) => void
}
export interface divRefType { DivMenuRef : RefObject<HTMLDivElement> | null}
export const ContextMenu = createContext<StateMenuType | null>(null)
function App() {
  const DivMenuRef = useRef<HTMLDivElement | null>(null)
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  return (
    <>
      <ContextMenu.Provider value={{ toggleMenu, setToggleMenu }}>
        <Sidebar DivMenuRef={DivMenuRef} />
        <Header  DivMenuRef={DivMenuRef} />
      </ContextMenu.Provider>
      <Player />
      <Home />
    </>
  )
}

export default App

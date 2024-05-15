import { RefObject, createContext, createElement, useRef, useState } from "react"
import { Player } from "./components/ui/Player/Player"
import { Sidebar } from "./components/ui/Sidebar/Sidebar"
import { Header } from "./components/ui/header/Header.tsx"
import { Home } from "./Pages/Home/Home"
export interface divRefType { DivMenuRef : RefObject<HTMLDivElement> | null}
function App() {
  const DivMenuRef = useRef<HTMLDivElement | null>(null)
  return (
    <>
      <Sidebar DivMenuRef={DivMenuRef} />
      <Header  DivMenuRef={DivMenuRef} />
      <Player />
      <Home />
    </>
  )
}

export default App

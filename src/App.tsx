import { RefObject, createContext, createElement, useRef, useState } from "react"
import { Player } from "./components/ui/Player/Player"
import { Sidebar } from "./components/ui/Sidebar/Sidebar"
import { Header } from "./components/ui/header/Header.tsx"
import { Home } from "./Pages/Home/Home"
export interface divRefType { DivMenuRef: RefObject<HTMLDivElement> | null }
interface ContextPlayType {
  played: boolean | null,
  setPlayed: (event: boolean) => void | null,
  name?: string,
  musician?: string,
  href?: string,
  imgSrc?: string,
  setPlayedItems?:(event: any) => void 
}
export const ContextPaly = createContext<ContextPlayType | null>(null)
function App() {
  const [played, setPlayed] = useState(false)
  const [playedItems, setPlayedItems] = useState({
    href:    "http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3"
    , imgSrc:  "https://volna.volkovdesign.com/img/covers/cover.svg"
    , name:    "Epic Cinematic"
    , musician:"AudioPizza"
  })
const DivMenuRef = useRef<HTMLDivElement | null>(null)
return (
  <>
    <ContextPaly.Provider value={{
      played,
      setPlayed
      , href: playedItems.href
      , imgSrc: playedItems.imgSrc
      , name: playedItems.name
      , musician: playedItems.musician
      ,setPlayedItems
    }}>
      <Sidebar DivMenuRef={DivMenuRef} />
      <Header DivMenuRef={DivMenuRef} />
      <Player />
      <Home />
    </ContextPaly.Provider>
  </>
)
}

export default App

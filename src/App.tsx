import { RefObject, useEffect, useRef } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Player } from "./components/ui/Player/Player"
import { Sidebar } from "./components/ui/Sidebar/Sidebar"
import { Header } from "./components/ui/header/Header.tsx"
import { Home } from "./Pages/Home/Home"
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Artists } from "./Pages/Artists/Artists.tsx";
import { Footer } from "./components/ui/Footer/Footer.tsx";
import { Releases } from "./Pages/Releases/Releases.tsx";
export interface divRefType { DivMenuRef: RefObject<HTMLDivElement> | null }
function App() {
  const DivMenuRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    // console.log(location.pathname)
    if (DivMenuRef && DivMenuRef.current) {
      console.log(DivMenuRef.current.querySelectorAll("nav > ul"))
      DivMenuRef.current.querySelectorAll("li").forEach(e => {
        e.querySelector(".main-link__text")?.classList.remove("main-link__text--active")
        e.querySelector(".main-link__icon")?.classList.remove("main-link__icon--active")
        if (e.querySelector("a")?.id === `sidebar-items-${location.pathname}`) {
          e.querySelector(".main-link__text")?.classList.add("main-link__text--active")
          e.querySelector(".main-link__icon")?.classList.add("main-link__icon--active")
        }
      })
    }
  }, []);
  return (
    <>
      <Header DivMenuRef={DivMenuRef} />
      <Sidebar DivMenuRef={DivMenuRef} />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="artists" element={<Artists />} />
            <Route path="releases" element={<Releases />} />
          </Routes>
        </BrowserRouter>
        <Player />
      </Provider>
      <Footer />
    </>
  )
}

export default App

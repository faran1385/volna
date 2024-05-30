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
import { Events } from "./Pages/Events/Events.tsx";
import { Podcasts } from "./Pages/Podcasts/Podcasts.tsx";
import { Products } from "./Pages/Products/Products.tsx";
import { NoPage } from "./Pages/404/NoPage.tsx";
import { News } from "./Pages/News/News.tsx";
import { Contacts } from "./Pages/Contacts/Contacts.tsx";
import { About } from "./Pages/About/About.tsx";
import { PricingPlans } from "./Pages/PricingPlans/PricingPlans.tsx";
import { Cart } from "./Pages/Cart/Cart.tsx";
import { Artist } from "./Pages/Artist/Artist.tsx";
import { Event } from "./Pages/Event/Event.tsx";
import { Privacy } from "./Pages/Privacy/Privacy.tsx";
import { ForgetPassword } from "./Pages/ForgetPassword/ForgetPassword.tsx";
import { Relaese } from "./Pages/Release/Relaese.tsx";
import { Article } from "./Pages/Article/Article.tsx";
import { Product } from "./Pages/Product/Product.tsx";
import { SignUp } from "./Pages/SignUp/SignUp.tsx";
import { SignIn } from "./Pages/SignIn/SignIn.tsx";
export interface divRefType { DivMenuRef: RefObject<HTMLDivElement> | null }
export interface NavRefType { DivNavLink: RefObject<HTMLDivElement> | null }
function App() {
  const DivMenuRef = useRef<HTMLDivElement | null>(null)
  const DivNavLink = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    // console.log(location.pathname)
    if (DivMenuRef && DivMenuRef.current) {
      DivMenuRef.current.querySelectorAll("li").forEach(e => {
        e.querySelector(".main-link__text")?.classList.remove("main-link__text--active")
        e.querySelector(".main-link__icon")?.classList.remove("main-link__icon--active")
        if (e.querySelector("a")?.id === `sidebar-items-${location.pathname}`) {
          e.querySelector(".main-link__text")?.classList.add("main-link__text--active")
          e.querySelector(".main-link__icon")?.classList.add("main-link__icon--active")
        }
      })
    }
    if (DivNavLink && DivNavLink.current) {
      DivNavLink.current.querySelectorAll("a").forEach(e => {
        e.classList.remove("Header-nav__links--active")
        if (e.id === `header_nav-${location.pathname}`) {
          console.log(e)
          e.classList.add("Header-nav__links--active")
        }
      })
    }
  }, []);
  return (
    <>
      <Header DivMenuRef={DivMenuRef} DivNavLink={DivNavLink}/>
      <Sidebar DivMenuRef={DivMenuRef} />

      <Provider store={store}>

        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="artists" element={<Artists />} />
            <Route path="releases" element={<Releases />} />
            <Route path="events" element={<Events />} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="store" element={<Products />} />
            <Route path="news" element={<News />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="about" element={<About />} />
            <Route path="pricing-plans" element={<PricingPlans />} />
            <Route path="cart" element={<Cart />} />
            <Route path="artist" element={<Artist />} />
            <Route path="event" element={<Event />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="release" element={<Relaese />} />
            <Route path="article" element={<Article />} />
            <Route path="product" element={<Product />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>

        <Player />
      </Provider>

      <Footer />
    </>
  )
}

export default App

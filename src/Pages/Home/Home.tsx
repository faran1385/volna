import { Slider } from "../../components/ui/Slider/Slider"
import { Releases } from "../../components/ui/NewReleases/Releases"
import "./Home.css"
import { Events } from "../../components/ui/Events/Events"
import { Artists } from "../../components/ui/Artists/Artists.tsx"
import { Podcasts } from "../../components/ui/Podcasts/Podcasts.tsx"
import { Songs } from "../../components/ui/Songs/Songs.tsx"
import { Products } from "../../components/ui/Products/Products.tsx"
import { Supporters } from "../../components/ui/Supporters/Supporters.tsx"
import { NewsList } from "../../components/ui/News/NewsList.tsx"
import { Footer } from "../../components/ui/Footer/Footer.tsx"

export const Home = () => {
    return <main className="home home--mobile w-full">
        <Slider />
        <Releases />
        <Events/>
        <Artists/>
        <Songs/>
        <Podcasts/>
        <Products/>
        <NewsList/>
        <Supporters/>
        <Footer/>
    </main>
}
import { Slider } from "../../components/ui/Slider/Slider" 
import { Releases } from "../../components/ui/NewReleases/Releases"
import "./Home.css"
import { Events } from "../../components/ui/Events/Events"
import { Artists } from "../../components/ui/Artists/Artists.tsx"
import { Podcasts } from "../../components/ui/Podcasts/Podcasts.tsx"
import { Products } from "../../components/ui/Products/Products.tsx"
export const Home = () => {
    return <main className="home home--mobile w-full">
        <Slider />
        <Releases />
        <Events/>
        <Artists/>

        <Podcasts/>
        <Products/>
    </main>
}
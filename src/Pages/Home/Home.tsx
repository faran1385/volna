import { Releases } from "../../components/ui/NewReleases/Releases"
import { Slider } from "../../components/ui/Slider/Slider"
import "./Home.css"
export const Home = () => {
    return <main className="home home--mobile w-full">
        <Slider />
        <Releases />
    </main>
}
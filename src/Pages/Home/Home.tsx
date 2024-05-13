import { Releases } from "../../components/ui/NewReleases/Releases"
import "./Home.css"
import { Slider } from "../../components/ui/Slider/Slider"
export const Home = () => {
    return <main className="home home--mobile w-full">
        <Slider/>
        <Releases />
    </main>
}
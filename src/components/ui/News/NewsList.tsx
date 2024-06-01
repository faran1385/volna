import { useRef } from "react"
import { PodcastsVideo } from "../Podcasts/PodcastsItems/PodcastsVideo/PodcastsVideo.tsx"
import { Title } from "../Title/Title.tsx"
import { Report } from "./Report/Resport.tsx"

export const NewsList = () => {
    const VideoIframe = useRef<HTMLIFrameElement>(null!)
    const Videobox = useRef<HTMLDivElement | null>(null)
    return <>
        <section className="px-8">
            <Title title="News" textLink="See all" href="./news" />
            <PodcastsVideo
                Videobox={Videobox}
                VideoIframe={VideoIframe}
            />
            <div className="my-5 gap-8 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                <Report title="Foo Fighters share new live version of ‘No Son Of Mine’" VideoIframe={VideoIframe} Videobox={Videobox} href={"https://www.youtube-nocookie.com/embed/w1wlpHzR2wE"} category="Music" timePassed={8} comments={68} img="https://volna.volkovdesign.com/img/posts/1.jpg" />
                <Report title="Tom Grennan ‘breaks the internet’ as fans overload servers during virtual gig" VideoIframe={VideoIframe} Videobox={Videobox} href="" category="Music" timePassed={3} comments={18} img="https://volna.volkovdesign.com/img/posts/2.jpg" />
                <Report title="Why do the Golden Globes always get it so wrong?" VideoIframe={VideoIframe} Videobox={Videobox} href="" category="Features" timePassed={9} comments={54} img="https://volna.volkovdesign.com/img/posts/3.jpg"/>
            </div>
        </section>
    </>
}
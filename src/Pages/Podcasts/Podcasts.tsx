import React, { useRef } from 'react'
import './Podcasts.css'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { Filter } from '../../components/ui/Filter/Filter'
import { PodcastsItems } from '../../components/ui/Podcasts/PodcastsItems/PodcastsItems'
import { PodcastsVideo } from '../../components/ui/Podcasts/PodcastsItems/PodcastsVideo/PodcastsVideo'
import { BtnGreen } from '../../components/ui/BtnGreen/BtnGreen'
import { SongAndEvent } from '../../components/ui/SongAndEvent/SongAndEvent'
import { Supporters } from '../../components/ui/Supporters/Supporters'
export const Podcasts: React.FC = () => {
    const VideoIframe = useRef<HTMLIFrameElement>(null!)
    const Videobox = useRef<HTMLDivElement | null>(null)
    return (
        <main className='pages pages--mobile'>
            <PodcastsVideo
                Videobox={Videobox}
                VideoIframe={VideoIframe}
            />
            <HeadPages title='podcasts' Items={[{ text: "home", href: "/" }, { text: "podcasts" }]} />
            <div className='xl:sticky '>
                <Filter
                    placeholder='search...'
                    DropItems={
                        [
                            {
                                boxId: "podcasts__filter__drop",
                                items: [
                                    { text: "Popular", hasActive: true },
                                    { text: "Live   " },
                                    { text: "Newest " }
                                ]
                            }
                        ]
                    }
                    RadioItems={
                        {
                            items: [
                                "Popular",
                                "Live    ",
                                "Newest ",
                            ],
                            boxId: "podcasts__filter__radio"
                        }
                    }
                />
                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 py-4'>
                    <PodcastsItems
                        name='Beautiful Stories From Anonymous People'
                        view={1700}
                        hasLive
                        href='https://www.youtube-nocookie.com/embed/KvJyOQ3u-q8'
                        imgSrc='https://volna.volkovdesign.com/img/live/1.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                    <PodcastsItems
                        name='Song Exploder'
                        view={800}
                        hasLive
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/2.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                    <PodcastsItems
                        name='Broken Record'
                        view={800}
                        hasLive
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/3.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                    <PodcastsItems
                        name='Desert Island Discs'
                        view={800}
                        hasLive
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/4.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                    <PodcastsItems
                        name='Riffs On Riffs'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/5.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                    <PodcastsItems
                        name='Popcast'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/6.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                    <PodcastsItems
                        name='Rolling Stone Music Now'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/7.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                    <PodcastsItems
                        name='Song vs. Song'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/8.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                    <PodcastsItems
                        name='Disgraceland'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/9.jpg'
                        Videobox={Videobox}
                        VideoIframe={VideoIframe}
                    />
                </div>
                <BtnGreen>
                    load more
                </BtnGreen>
            </div>
            <SongAndEvent/>
            <Supporters/>
        </main>
    )
}

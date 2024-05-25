import React, { useEffect, useRef, useState } from 'react'
import './News.css'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { BtnNews } from '../../components/ui/BtnNews/BtnNews'
import { PodcastsVideo } from '../../components/ui/Podcasts/PodcastsItems/PodcastsVideo/PodcastsVideo'
import { Report } from '../../components/ui/News/Report/Resport'
import { BtnGreen } from '../../components/ui/BtnGreen/BtnGreen'
export const News: React.FC = () => {
    const BtnsBox = useRef<HTMLUListElement>(null)
    const listUlRef = useRef<HTMLUListElement>(null)
    const VideoIframe = useRef<HTMLIFrameElement>(null!)
    const Videobox = useRef<HTMLDivElement | null>(null)
    const [Id, setId] = useState(1)
    const [Typeing, setTypeing] = useState(
        [
            { text: "all", hasActive: true },
            { text: "music", hasActive: false },
            { text: "review", hasActive: false },
            { text: "Interviews", hasActive: false },
        ]
    )
    const [Data, setData] = useState(
        [
            {
                id: 1,
                title: "Tom Grennan ‘breaks the internet’ as fans overload servers during virtual gig",
                href: "",
                category: "music",
                timePassed: 8,
                comments: 68,
                img: "https://volna.volkovdesign.com/img/posts/2.jpg"
            },
            {
                id: 1,
                title: "Why do the Golden Globes always get it so wrong?",
                href: "",
                category: "Features",
                timePassed: 8,
                comments: 68,
                img: "https://volna.volkovdesign.com/img/posts/3.jpg"
            },
            {
                id: 1,
                title: "Foo Fighters share new live version of ‘No Son Of Mine’",
                href: "https://www.youtube-nocookie.com/embed/w1wlpHzR2wE",
                category: "music",
                timePassed: 8,
                comments: 68,
                img: "https://volna.volkovdesign.com/img/posts/1.jpg"
            },
            {
                id: 1,
                title: "Foo Fighters share new live version of ‘No Son Of Mine’",
                href: "",
                category: "music",
                timePassed: 8,
                comments: 68,
                img: "https://volna.volkovdesign.com/img/posts/4.jpg"
            },
            {
                id: 1,
                title: "Tom Grennan ‘breaks the internet’ as fans overload servers during virtual gig",
                href: "",
                category: "music",
                timePassed: 8,
                comments: 68,
                img: "https://volna.volkovdesign.com/img/posts/5.jpg"
            },
            {
                id: 1,
                title: "Why do the Golden Globes always get it so wrong?",
                href: "",
                category: "Features",
                timePassed: 8,
                comments: 68,
                img: "https://volna.volkovdesign.com/img/posts/6.jpg"
            },
            {
                id: 2,
                title: "Tom Grennan ‘breaks the internet’ as fans overload servers during virtual gig",
                href: "",
                category: "",
                timePassed: 8,
                comments: 68,
                img: "https://volna.volkovdesign.com/img/posts/9.jpg"
            },
        ]
    )
    const HandlerTyping = (id: number) => {
        if (BtnsBox && BtnsBox.current) {
            BtnsBox.current.querySelectorAll("li").forEach((e) => {
                e.querySelector(".main-link__icon")?.classList.remove("main-link__icon--active")
                e.querySelector(".main-link__text")?.classList.remove("main-link__text--active")
                if(listUlRef && listUlRef.current){
                    listUlRef.current.querySelectorAll('li').forEach((e)=>{
                        e.classList.remove('opacity-1')
                        e.classList.add('opacity-0')
                    })
                }
                if (e.id === `btn_news_${id}`) {
                    e.querySelector(".main-link__icon")?.classList.add("main-link__icon--active")
                    e.querySelector(".main-link__text")?.classList.add("main-link__text--active")
                    let timer = setTimeout(()=>{
                        setId(id)
                    },700)
                    return ()=>{
                        clearInterval(timer)
                    }
                }
            })
        }
    }
    useEffect(() => {
        if(listUlRef && listUlRef.current){
            listUlRef.current.querySelectorAll('li').forEach((e)=>{
                e.classList.remove('opacity-0')
                e.classList.add('opacity-1')
            })
        }
    }, [Id]);
    return (
        <main className='pages pages--mobile'>
            <PodcastsVideo
                Videobox={Videobox}
                VideoIframe={VideoIframe}
            />
            <HeadPages title='news' Items={[{ text: "home", href: "/" }, { text: "news" }]} />
            <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 px-8' ref={BtnsBox} >
                {
                    Typeing.map((e, index) => {
                        return (
                            <li key={`btn_news_${index + 1}`} id={`btn_news_${index + 1}`} >
                                <BtnNews handler={HandlerTyping} id={index + 1} text={e.text} hasActive={e.hasActive} />
                            </li>
                        )
                    })
                }
            </ul>
            <ul ref={listUlRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-8'>
                {
                    Data.map((e, index) => {
                        if(e.id === Id){
                            return (
                                <li key={`list_news_${index + 1}`} id={`list_news_${e.id}`} className='opacity-0 block transition-opacity duration-700'>
                                    <Report title={e.title} VideoIframe={VideoIframe} Videobox={Videobox} href={e.href} category={e.category} timePassed={e.timePassed} comments={e.comments} img={e.img} />
                                </li>
                            )
                        }
                    })
                }
            </ul>
            {
                Id === 1 ?
                    <BtnGreen>
                        load more
                    </BtnGreen>
                    :
                    null
            }
        </main>
    )
}

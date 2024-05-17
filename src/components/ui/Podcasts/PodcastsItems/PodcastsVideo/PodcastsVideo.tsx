import React, { FC, RefObject, useEffect, useState } from 'react'
import './PodcastsVideo.css'
import { VideoType } from '../../Podcasts'
interface PodcastsVideoType {
    link: string
} 
export const PodcastsVideo: FC<PodcastsVideoType & VideoType> = ({ link, VideoIframe, Videobox }) => {
    // const [disablad, setDisablad] = useState(VideoIframe?.current?.src)
    const closeHandler = () => {
        if(VideoIframe && VideoIframe.current && Videobox && Videobox.current){
            Videobox.current.classList.add("opacity-0")
            Videobox.current.classList.add("pointer-events-none")
            VideoIframe.current.src = ""
            document.body.style.overflow = "auto"
        }
    }
    // useEffect(() => {
    //     const dispaly = VideoIframe?.current?.src ? 'auto' : 'hidden'
    //     console.log(VideoIframe?.current?.src)
    // }, [VideoIframe?.current?.src])
    return (
        <div ref={Videobox}  className={` podcasts-video opacity-0 pointer-events-none  transition-all duration-700 fixed z-50 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-gray-700 bg-opacity-45`}>
            <div className='podcasts-video__box relative'>
                <button onClick={closeHandler} className='podcasts-video__box__close text-4xl absolute -top-10 right-0 '>×</button>
                <div dir='rtl' className='podcasts-video__box__video overflow-hidden  pt' >
                    <iframe ref={VideoIframe} src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

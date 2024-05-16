import React, { FC } from 'react'
import './PodcastsVideo.css'
interface PodcastsVideoType {
    link: string
    ,disabled:boolean
    ,setDisabald:(e : boolean)=>void
}
export const PodcastsVideo: FC<PodcastsVideoType> = ({ link, disabled , setDisabald}) => {
    return (
        <div className={` podcasts-video ${!disabled ? 'opacity-0 pointer-events-none' : ""} transition-all duration-700 fixed z-50 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-gray-700 bg-opacity-45`}>
            <div className='podcasts-video__box relative'>
                <button onClick={()=>setDisabald(false)} className='podcasts-video__box__close text-4xl absolute -top-10 right-0 '>×</button>
                <div dir='rtl' className='podcasts-video__box__video overflow-hidden rounded-lg pt' >
                    <iframe  src={disabled ? link : ''} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

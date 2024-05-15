import { FC } from 'react'
import './PodcastsItems.css'
interface PodcastsItemsType {
    hasLive?: boolean
    , name: string
    , href: string
    , view: number
    , imgSrc: string
}
export const PodcastsItems: FC<PodcastsItemsType> = ({ hasLive, name, href, view, imgSrc }) => {
    return (
        <a href={href} className='podcasts__Items'>
            <div className={`podcasts__Items__header ${hasLive ? "podcasts__Items__header--active" : ""} relative overflow-hidden`}>
                <img className='podcasts__Items__header__img w-full' loading='lazy' fetchPriority='high' src={imgSrc} title={`podcast ${name}`}/>
                <span className='podcasts__Items__header__view absolute z-10 sm:bottom-7 sm:left-7 bottom-4 left-4'>{view} {hasLive ? "viewres" : "view"}</span>
                <svg className='podcasts__Items__header__icon absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
                
                <span className='podcasts__Items__header--live absolute z-10  sm:left-7 sm:top-7 top-4 left-4 capitalize'>live</span>
            </div>
            <h3 className='podcasts__Items__footer overflow-hidden block w-full mt-4'>{name}</h3>
        </a>
    )
}

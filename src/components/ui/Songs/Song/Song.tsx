import React, { useContext, useRef } from "react";
import "./Song.css";
import { ContextPaly } from "../../../../App";

interface SongProps {
    rank?: Rank
    name: string,
    singer: string
    isLive: number | boolean,
    img: string,
    href: string
}

type Rank = {
    number: number,
    icon: "fail" | "success",
    iconNumber: number,
}

export const Song: React.FC<SongProps> = (T) => {
    const { rank, name, singer, img, isLive, href } = T

    return <>
        <div className="w-full flex song pt-4 pb-3">
            <div className="flex items-center">
                {rank && (<>
                    <span className="song__rank__number me-2">{rank.number}</span>
                    <div className="flex flex-col items-center">
                        {rank.icon === "fail" ? (
                            <svg className="song__rank__icon song__rank__icon--fail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11.29,11.46a1,1,0,0,0,1.42,0l3-3A1,1,0,1,0,14.29,7L12,9.34,9.71,7A1,1,0,1,0,8.29,8.46Zm3,1.08L12,14.84l-2.29-2.3A1,1,0,0,0,8.29,14l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z"></path>
                            </svg>
                        ) : (
                            <svg className="song__rank__icon song__rank__icon--success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.71,12.54a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,17L12,14.66,14.29,17a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-3-1.08L12,9.16l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Z"></path>
                            </svg>
                        )}
                        <span className="song__rank__icon__number">{rank.iconNumber}</span>
                    </div>
                </>)}
            </div>
            <div className={`flex w-full ${rank && "ms-3"}`}>
                <BtnPlaying img={img} name={name} musicaian={singer} href={href} />
                <div className="ms-2 w-full flex justify-between">
                    <div className=" flex flex-col">
                        <a href="#" className="song__name">{name}</a>
                        <a href="#" className="song__singer">{singer}</a>
                    </div>
                    <div className="flex items-center justify-center">
                        {typeof isLive === "boolean" ? (
                            <span className="ms-2 song__time--live">Live</span>
                        ) : (
                            <span className="ms-2 song__time--seconds">{(isLive / 60) < 1 ? "0" : Math.floor(isLive / 60)}:{(isLive % 60) < 10 ? "0" + Math.floor(isLive % 60) : Math.floor(isLive % 60)}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
}
interface BtnPlayingType {
    img: string,
    name: string,
    musicaian: string,
    href: string
}
const BtnPlaying: React.FC<BtnPlayingType> = ({ img, name, href, musicaian }) => {
    const ContextPlaying = useContext(ContextPaly)
    const hadlerPlay = () => {
        ContextPlaying?.setPlayed(!ContextPlaying.played)
        if (ContextPlaying && ContextPlaying.setPlayedItems) {
            ContextPlaying.setPlayedItems(
                {
                    href: href
                    , imgSrc: img
                    , name: name
                    , musician: musicaian
                }
            )
        }
    }
    return (
        <button onClick={hadlerPlay} className="song__button rounded-xl relative flex items-center justify-center">
            {/* <svg className={`song__img__icon`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"></path></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="song__img__icon" viewBox="0 0 24 24">
                <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path>
            </svg>

            <img loading="lazy" src={img} className="w-full song__img absolute h-full rounded-xl" />
        </button>
    )
}
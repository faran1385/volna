import React, { RefObject } from "react"
interface EventProps {
    img: string,
    isAvailable: boolean,
    date: string,
    time: string
    title: string
    location: string
    TiketRef: RefObject<HTMLDivElement> | null
}
import "./Event.css"

export const Event: React.FC<EventProps> = (T) => {
    const { img, isAvailable, date, time, title, location, TiketRef } = T
    const tiketHandlder = () => {
        // opacity-0 pointer-events-none
        TiketRef?.current?.classList.remove("pointer-events-none")
        TiketRef?.current?.classList.remove("opacity-0")
        TiketRef?.current?.querySelector(".tiket__card")?.classList.add("tiket__card--active")
        document.body.style.overflow = "hidden"
    }
    return <>
        <div className="relative event rounded-xl">
            <img loading="lazy" className="rounded-xl w-full h-full event__image" src={img} title="event" />
            <div className="h-1/2 px-4 pt-4 sm:px-8 sm:pt-8 top-0 absolute w-full">
                {
                    isAvailable ? (
                        <button onClick={tiketHandlder} className="md:px-6 px-4 event__button event__button--available flex items-center rounded-xl justify-center">
                            <svg className="event__button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
                            </svg>
                            <span className="ms-2">Buy ticket</span>
                        </button>
                    )
                        :
                        (<div className="md:px-6 w-fit px-4 event__button event__button--unavailable flex items-center rounded-xl justify-center">
                            <span>Sold out</span>
                        </div>)
                }
            </div>
            <div className="h-1/2 px-4 pb-4 sm:px-8 sm:pb-8 bottom-0 absolute w-full">
                <h2 className="event__date">{date}</h2>
                <p className="event__time pb-5">{time}</p>
                <a href="#" className="event__title md:text-3xl text-2xl">
                    {title}
                </a>
                <p className="text-sm event__location pt-2">{location}</p>
            </div>
        </div>
    </>
}
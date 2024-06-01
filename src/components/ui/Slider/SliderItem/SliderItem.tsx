import React from "react"
import "./SliderItem.css"
import { VideoType } from "../../Podcasts/Podcasts"
interface SliderItemProps {
    imageSrc: string
    title: string,
    buttons: button[],
    children?: React.ReactNode,
    href?: string
    moreText?: string,
}

type button = {
    text: string
    background: "black" | "green"
    animation: "text" | "toGreen" | "toBlack",
    hasIcon?: boolean
}

export const SliderItem: React.FC<SliderItemProps & VideoType> = ({ imageSrc, title, buttons, children, href, VideoIframe, Videobox, moreText }) => {
    // const  = T
    const handlerVideo = (href: any, hasIcon: any) => {
        if (hasIcon) {
            if (VideoIframe && VideoIframe.current && Videobox && Videobox.current) {
                Videobox.current.classList.remove("opacity-0")
                Videobox.current.classList.remove("pointer-events-none")
                VideoIframe.current.src = href
                document.body.style.overflow = "hidden"
            }
        }
    }
    return <div className="h-full w-full relative item user-select-none flex items-center cursor-default">
        <img className="item__img w-full h-full absolute rounded-2xl" loading="lazy" src={imageSrc} />
        <div className="item__content-container">
            <h1 className="item__title">{title}</h1>
            {
                moreText == undefined ?
                    <p className="item__subtitle pt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look even slightly believable</p>
                    :
                    <p className="item__subtitle pt-2">{moreText}</p>

            }
            <div className={"flex flex-wrap mt-12"}>
                {buttons.map((button, i) => {
                    return <button key={i} onClick={() => handlerVideo(href, button.hasIcon)} className={`rounded-xl mt-3 me-5  md:me-6 flex items-center justify-center text-center item__button font-medium uppercase item__button--${button.background} item__button--${button.animation}`}>

                        {button.hasIcon ? children : ""}
                        <span>{button.text}</span>
                    </button>
                })}
            </div>
        </div>
    </div>
}
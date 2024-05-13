import React from "react"
import "./SliderItem.css"
interface SliderItemProps {
    imageSrc: string
    title: string,
    buttons: button[],
    children?: React.ReactNode,
}

type button = {
    text: string
    background: "black" | "green"
    animation: "text" | "toGreen" | "toBlack",
    hasIcon:boolean
}

export const SliderItem: React.FC<SliderItemProps> = (T) => {
    const { imageSrc, title, buttons,hasIcon, children } = T
    return <div className="h-full w-full relative item user-select-none flex items-center cursor-default">
        <img className="item__img w-full h-full absolute rounded-2xl" src={imageSrc} />
        <div className="item__content-container">
            <h1 className="item__title">{title}</h1>
            <p className="item__subtitle pt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even slightly believable</p>
            <div className={"flex"}>
            {buttons.map((button, i) => {
                return <button key={i} className={`rounded-xl me-5  md:me-6 flex items-center justify-center text-center item__button font-medium uppercase mt-12 item__button--${button.background} item__button--${button.animation}`}>
                    
                    {button.hasIcon?children:""}
                    <span>{button.text}</span>
                </button>
            })}
            </div>
        </div>
    </div>
}
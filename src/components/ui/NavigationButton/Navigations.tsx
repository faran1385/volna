import React from "react"
import { NavigationButton } from "./NavigationButton.tsx"

interface NavigationButtonsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    swiperRef: React.MutableRefObject<any>,
    preViewCount: number,
    totalSlides: number
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = (T) => {
    const { swiperRef, preViewCount, totalSlides } = T
    const array = new Array(preViewCount).fill(undefined)
    console.log(preViewCount, totalSlides);

    return <>
        {array.map((_, i) => {
            return <NavigationButton key={i} aditionalClass="event" whereTo={preViewCount !== totalSlides ? (totalSlides / preViewCount) * i : i} swiperRef={swiperRef} isActive={i === 0} />
        })}
        <div className="md:block hidden">
            <NavigationButton aditionalClass="event" whereTo={"prev"} swiperRef={swiperRef} isActive={false} />
            <NavigationButton aditionalClass="event" whereTo={"next"} swiperRef={swiperRef} isActive={false} />
        </div>
    </>
}

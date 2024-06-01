import React from "react"
import { NavigationButton } from "./NavigationButton.tsx"

interface NavigationButtonsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    swiperRef: React.MutableRefObject<any>,
    preViewCount: number,
    totalSlides: number,
    aditionalClass: string

}

export const NavigationButtons: React.FC<NavigationButtonsProps> = (T) => {
    const { swiperRef, preViewCount, totalSlides, aditionalClass } = T
    const array = new Array(preViewCount).fill(undefined)

    return <>
        {array.map((_, i) => {
            return <NavigationButton key={i} aditionalClass={aditionalClass} whereTo={preViewCount !== totalSlides ? (totalSlides / preViewCount) * i : i} swiperRef={swiperRef} isActive={i === 0} />
        })}
        {preViewCount > 0 ? (<div className="md:block hidden">
            <NavigationButton aditionalClass={aditionalClass} whereTo={"prev"} swiperRef={swiperRef} isActive={false} />
            <NavigationButton aditionalClass={aditionalClass} whereTo={"next"} swiperRef={swiperRef} isActive={false} />
        </div>) : ""}
    </>
}

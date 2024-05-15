import React from "react"
import { NavigationButton } from "../NavigationButton/NavigationButton.tsx"

interface EventNavigationButtonsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    swiperRef: React.MutableRefObject<any>,
    count: number
}

export const EventNavigationButtons: React.FC<EventNavigationButtonsProps> = (T) => {
    const { swiperRef, count } = T
    const array = new Array(count).fill(undefined)
    
    return <>
        {array.map((_, i) => {
            return <NavigationButton key={i} aditionalClass="event" whereTo={i} swiperRef={swiperRef} isActive={i === 0} />
        })}
        <div className="md:block hidden">
            <NavigationButton aditionalClass="event" whereTo={"prev"} swiperRef={swiperRef} isActive={false} />
            <NavigationButton aditionalClass="event" whereTo={"next"} swiperRef={swiperRef} isActive={false} />
        </div>
    </>
}

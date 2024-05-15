import React from "react";
import { useNavigationHandler } from "../../logic/NavigationButton/useNavigationHandler";
import "./NavigationButton.css"

interface NavigationButtonProps {
    whereTo: "next" | "prev" | number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    swiperRef: React.MutableRefObject<any>,
    isActive: boolean,
    aditionalClass: string
}

export const NavigationButton: React.FC<NavigationButtonProps> = (T) => {
    const { whereTo, swiperRef, isActive, aditionalClass } = T
    const { navigationHandler } = useNavigationHandler()

    if (whereTo === "next") {
        return <>
            <button onClick={() => navigationHandler("next", swiperRef)} className="mx-2">
                <svg className="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                </svg>
            </button>
        </>
    } else if (whereTo === "prev") {
        return <>
            <button onClick={() => navigationHandler("prev", swiperRef)}>
                <svg className="button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path>
                </svg>
            </button>
        </>
    }
    return <>
        <button onClick={() => navigationHandler(whereTo, swiperRef)} className={`button h-1 me-2 rounded-xl w-3 button-${aditionalClass}--active ${isActive ?  `button--active` : ""}`}></button>
    </>
}
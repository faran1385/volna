import React from "react";

export const useNavigationHandler = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navigationHandler = (whereTo: "next" | "prev" | number, swiperRef: React.MutableRefObject<any>) => {
        console.log(whereTo);
        
        if (whereTo == "next") {
            swiperRef.current.swiper.slideNext();
        } else if (whereTo === "prev") {
            swiperRef.current.swiper.slidePrev();
        } else {
            swiperRef.current.swiper.slideToLoop(whereTo);
        }
    }

    return { navigationHandler }
}
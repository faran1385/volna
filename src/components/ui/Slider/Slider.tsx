import "./Slider.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react"
import { SliderItem } from "./SliderItem/SliderItem";
import { useRef } from "react";


export const Slider = () => {

    const onSlideChangeHandler = () => {
        const sliderNavItems = document.querySelectorAll(".slider__nav__item")
        const sliderItems = document.querySelectorAll(".swiper-slide")
        let activeIndex = 0;
        sliderItems.forEach((slide) => {
            if (slide.classList.contains("swiper-slide-active")) {
                activeIndex = +(slide.getAttribute("data-swiper-slide-index") as string);
            }
        })
        console.log(activeIndex);

        sliderNavItems.forEach((button, i) => {

            if (activeIndex === i) {
                button.classList.add("slider__nav__item--active")
            } else if (button.classList.contains("slider__nav__item--active")) {
                button.classList.remove("slider__nav__item--active")
            }
        })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>()
    const navigationHandler = (whereTo: "next" | "prev" | number) => {
        if (whereTo == "next") {
            swiperRef.current.swiper.slideNext();
        } else if (whereTo === "prev") {
            swiperRef.current.swiper.slidePrev();
        } else {
            swiperRef.current.swiper.slideTo(whereTo);
        }
    }

    return <div className="w-full py-6 px-8">
        <div className="relative">
            <Swiper
                ref={swiperRef}
                speed={1000}
                loop={true}
                spaceBetween={30}
                onTransitionStart={onSlideChangeHandler}
                className="slider relative overflow-y-visible slider--mobile"
            >
                <SwiperSlide>
                    <SliderItem buttons={[{ background: "black", animation: "text", text: "learn more" }]} title="New Artist of Our Label" imageSrc="https://volna.volkovdesign.com/img/home/slide3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem buttons={[{ text: "buy now", background: "green", animation: "toBlack" }, { background: "black", animation: "text", text: "learn more" }]} title="Record Label & Music streaming" imageSrc="https://volna.volkovdesign.com/img/home/slide1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem buttons={[{ background: "green", animation: "toBlack", text: "learn more" }, { background: "black", animation: "toGreen", text: "watch video", hasIcon: true }]} title="New Artist of Our Label" imageSrc="https://volna.volkovdesign.com/img/home/slide2.jpg">
                        <svg className={"item__button__icon me-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                        </svg>
                    </SliderItem>
                </SwiperSlide>
            </Swiper>
            <div className="w-full z-10 absolute top-100 md:bottom-0 md:pe-12 h-12 items-center flex justify-center md:justify-end">
                <button onClick={() => navigationHandler(0)} className="slider__nav__item h-1 me-2 rounded-xl w-3 slider__nav__item--active"></button>
                <button onClick={() => navigationHandler(1)} className="slider__nav__item h-1 me-2 rounded-xl w-3"></button>
                <button onClick={() => navigationHandler(2)} className="slider__nav__item h-1 me-2 rounded-xl w-3"></button>
                <div className="md:block hidden">
                    <button onClick={() => navigationHandler("prev")} className="mx-2 slider__trigger--prev">
                        <svg className="slider__trigger__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path>
                        </svg>
                    </button>
                    <button onClick={() => navigationHandler("next")} className="slider__trigger--next">
                        <svg className="slider__trigger__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
}
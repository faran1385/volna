import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react"
import { SliderItem } from "./SliderItem/SliderItem";
import { useRef } from "react";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import { useHandleOnSlideChange } from '../../logic/NavigationButton/useHandleOnSlideChange';


export const Slider = () => {

    const { onSlideChangeHandler } = useHandleOnSlideChange()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>()

    return <section className="w-full py-6 px-8">
        <div className="relative">
            <Swiper
                ref={swiperRef}
                speed={1000}
                loop={true}
                spaceBetween={30}
                onTransitionStart={() => onSlideChangeHandler(".slider", ".button-slider", undefined)}
                className="slider relative overflow-y-visible"
                style={{ height: "28.75rem" }}
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
                <NavigationButton aditionalClass='slider' isActive={true} whereTo={0} swiperRef={swiperRef} />
                <NavigationButton aditionalClass='slider' isActive={false} whereTo={1} swiperRef={swiperRef} />
                <NavigationButton aditionalClass='slider' isActive={false} whereTo={2} swiperRef={swiperRef} />
                <div className="md:block hidden">
                    <NavigationButton aditionalClass='slider' isActive={false} whereTo={"prev"} swiperRef={swiperRef} />
                    <NavigationButton aditionalClass='slider' isActive={false} whereTo={"next"} swiperRef={swiperRef} />
                </div>
            </div>
        </div>
    </section>
}
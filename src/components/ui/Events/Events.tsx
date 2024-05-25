import { Swiper, SwiperSlide } from "swiper/react"
import { Title } from "../Title/Title.tsx"
import { Event } from "./Event/Event.tsx"
import { useRef, useState } from "react"
import { useHandleOnSlideChange } from "../../logic/NavigationButton/useHandleOnSlideChange.ts"
import { NavigationButtons } from "../NavigationButton/Navigations.tsx"
import { Tiket } from "./Tiket/Tiket.tsx"



export const Events = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(window.innerWidth < 768 ? 6 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 3 : 2)
    const { onSlideChangeHandler } = useHandleOnSlideChange()
    const TiketRef = useRef<HTMLDivElement>(null!)
    return <>
        <section className="px-8">
            <Title href="./events" textLink="See all" title={"Upcoming Events"} />
            <Tiket
                TiketRef={TiketRef}
            />
            <div className="my-5">
                <Swiper
                    speed={1000}
                    slidesPerView={3}
                    loop={true}
                    onBreakpoint={() => setSlides(window.innerWidth < 768 ? 6 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 3 : 2)}
                    spaceBetween={30}
                    ref={swiperRef}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        },
                    }}
                    className="event-slider"
                    onTransitionStart={() => onSlideChangeHandler(".event-slider", ".button-event", { total: 6, count: slidesPerView })}
                >
                    <SwiperSlide>
                        <Event
                            img="https://volna.volkovdesign.com/img/events/event1.jpg"
                            isAvailable={true}
                            date="March 14, 2021"
                            title="Sorry Babushka"
                            location="1 East Plumb Branch St.Saint Petersburg, FL 33702"
                            time="8:00 pm"
                            TiketRef={TiketRef}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Event
                            img="https://volna.volkovdesign.com/img/events/event2.jpg"
                            isAvailable={true}
                            date="March 16, 2021"
                            title="Big Daddy"
                            location="71 Pilgrim Avenue Chevy Chase, MD 20815                            "
                            time="7:00 pm"
                            TiketRef={TiketRef}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Event
                            img="https://volna.volkovdesign.com/img/events/event3.jpg"
                            isAvailable={false}
                            date="March 23, 2021"
                            title="Rocky Pup"
                            location="514 S. Magnolia St. Orlando, FL 32806"
                            time="9:30 pm"
                            TiketRef={TiketRef}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Event
                            img="https://volna.volkovdesign.com/img/events/event4.jpg"
                            isAvailable={true}
                            date="March 30, 2021"
                            title="big Club"
                            location="123 6th St. Melbourne, FL 32904"
                            time="6:00 pm"
                            TiketRef={TiketRef}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Event
                            img="https://volna.volkovdesign.com/img/events/event5.jpg"
                            isAvailable={false}
                            date="March 30, 2021"
                            title="Big Daddy"
                            location="71 Pilgrim Avenue Chevy Chase, MD 20815"
                            time="10:00 pm"
                            TiketRef={TiketRef}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Event
                            img="https://volna.volkovdesign.com/img/events/event6.jpg"
                            isAvailable={true}
                            date="March 31, 2021"
                            title="Rocky Pup"
                            location="514 S. Magnolia St. Orlando, FL 32806"
                            time="6:30 pm"
                            TiketRef={TiketRef}
                        />
                    </SwiperSlide>
                </Swiper>
                <div className="w-full flex items-center py-4 justify-center md:justify-end">
                    <NavigationButtons aditionalClass="event" totalSlides={6} preViewCount={slidesPerView} swiperRef={swiperRef} />
                </div>
            </div>
        </section>
    </>
}

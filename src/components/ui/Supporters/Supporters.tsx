import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SupportersItems } from './SupporterItems/SupportersItems';
export const Supporters : React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nameSlider = 'supporters';
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(window.innerWidth < 800 ? 4 : 2)
    return (
        <div className='supporters px-8 my-9'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{pauseOnMouseEnter:true,delay:5000}}
                speed={1000}
                slidesPerView={4}
                loop={true}
                onBreakpoint={() => setSlides(window.innerWidth < 800 ? 4 : 2)}
                spaceBetween={30}
                ref={swiperRef}
                breakpoints={{
                    0: {
                        slidesPerView: 2
                    },
                    800: {
                        slidesPerView: 4
                    }
                }}
                className={`my-4 ${nameSlider}-slider`}
            >
                <SwiperSlide>
                    <SupportersItems
                        srcImg='http://volna.volkovdesign.com/img/partners/codecanyon-light-background.png'
                        href='#'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SupportersItems
                        srcImg='http://volna.volkovdesign.com/img/partners/photodune-light-background.png'
                        href='#'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SupportersItems
                        srcImg='http://volna.volkovdesign.com/img/partners/3docean-light-background.png'
                        href='#'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SupportersItems
                        srcImg='http://volna.volkovdesign.com/img/partners/themeforest-light-background.png'
                        href='#'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SupportersItems
                        srcImg='http://volna.volkovdesign.com/img/partners/activeden-light-background.png'
                        href='#'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SupportersItems
                        srcImg='http://volna.volkovdesign.com/img/partners/audiojungle-light-background.png'
                        href='#'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

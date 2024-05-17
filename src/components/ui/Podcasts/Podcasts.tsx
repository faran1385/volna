import React, { useRef, useState } from 'react'
import { Title } from '../Title/Title.tsx'
import { PodcastsItems } from './PodcastsItems/PodcastsItems.tsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavigationButtons } from '../NavigationButton/Navigations.tsx'
import { useHandleOnSlideChange } from '../../logic/NavigationButton/useHandleOnSlideChange.ts'

export const Podcasts = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const total = 10;
    const nameSlider = 'podcasts';
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(window.innerWidth < 650 ? 10 : 5)
    const { onSlideChangeHandler } = useHandleOnSlideChange()
    return (
        <section className={`${nameSlider} px-8`}>
            <Title title={`${nameSlider}`} href='#' textLink='see all' />
            <Swiper
                speed={1000}
                slidesPerView={2}
                loop={true}
                onBreakpoint={() => setSlides(window.innerWidth < 650 ? 10 : 5)}
                spaceBetween={30}
                ref={swiperRef}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    650: {
                        slidesPerView: 2
                    }
                }}
                className={`my-4 ${nameSlider}-slider`}
                onTransitionStart={() => onSlideChangeHandler(`.${nameSlider}-slider`, `.button-${nameSlider}`, { total: total, count: slidesPerView })}
            >
                <SwiperSlide>
                    <PodcastsItems
                        name='Beautiful Stories From Anonymous People'
                        view={700}
                        hasLive
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/1.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Song Exploder'
                        view={800}
                        hasLive
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/2.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Broken Record'
                        view={800}
                        hasLive
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/3.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Desert Island Discs'
                        view={800}
                        hasLive
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/4.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Riffs On Riffs'
                        view={800}
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/5.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Popcast'
                        view={800}
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/6.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Rolling Stone Music Now'
                        view={800}
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/7.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Song vs. Song'
                        view={800}
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/8.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Disgraceland'
                        view={800}
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/9.jpg'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Rolling Stone Music Now'
                        view={800}
                        href='#'
                        imgSrc='https://volna.volkovdesign.com/img/live/7.jpg'
                    />
                </SwiperSlide>
            </Swiper>
            <div className="w-full flex items-center justify-center md:justify-end">
                <NavigationButtons aditionalClass={`${nameSlider}`} totalSlides={total} preViewCount={slidesPerView} swiperRef={swiperRef} />
            </div>
        </section>
    )
}

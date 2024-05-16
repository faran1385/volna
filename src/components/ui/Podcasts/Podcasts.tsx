import React, { useEffect, useRef, useState } from 'react'
import { Title } from '../Title/Title.tsx'
import { PodcastsItems } from './PodcastsItems/PodcastsItems.tsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavigationButtons } from '../NavigationButton/Navigations.tsx'
import { useHandleOnSlideChange } from '../../logic/NavigationButton/useHandleOnSlideChange.ts'
import { PodcastsVideo } from './PodcastsItems/PodcastsVideo/PodcastsVideo.tsx'

export const Podcasts = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const total = 10;
    const nameSlider = 'podcasts';
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(window.innerWidth < 650 ? 10 : 5)
    const { onSlideChangeHandler } = useHandleOnSlideChange()
    const [disabald, setDisabald] = useState(false)
    const [linkVideo, setLinkVideo] = useState('https://www.youtube-nocookie.com/embed/')
    useEffect(() => {
        const dispaly = disabald ? 'hidden' : 'auto'
        document.body.style.overflow = dispaly
    }, [disabald])
    return (
        <section className={`${nameSlider} px-8`}>
            <Title title={`${nameSlider}`} href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk' textLink='see all' />
            <PodcastsVideo link={linkVideo} disabled={disabald} setDisabald={setDisabald} />
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
                        href='https://www.youtube-nocookie.com/embed/KvJyOQ3u-q8'
                        imgSrc='https://volna.volkovdesign.com/img/live/1.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Song Exploder'
                        view={800}
                        hasLive
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/2.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Broken Record'
                        view={800}
                        hasLive
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/3.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Desert Island Discs'
                        view={800}
                        hasLive
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/4.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Riffs On Riffs'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/5.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Popcast'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/6.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Rolling Stone Music Now'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/7.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Song vs. Song'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/8.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Disgraceland'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/9.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PodcastsItems
                        name='Rolling Stone Music Now'
                        view={800}
                        href='https://www.youtube-nocookie.com/embed/T7xA4AnpSrk'
                        imgSrc='https://volna.volkovdesign.com/img/live/7.jpg'
                        setLinkVideo={setLinkVideo}
                        setDisablad={setDisabald}
                    />
                </SwiperSlide>
            </Swiper>
            <div className="w-full flex items-center justify-center md:justify-end">
                <NavigationButtons aditionalClass={`${nameSlider}`} totalSlides={total} preViewCount={slidesPerView} swiperRef={swiperRef} />
            </div>
        </section>
    )
}

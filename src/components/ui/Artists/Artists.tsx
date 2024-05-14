import React, { useRef, useState } from 'react'
import { Title } from '../Title/Title.tsx'
import { ArtistsItems } from './ArtistsItems/ArtistsItems.tsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useHandleOnSlideChange } from '../../logic/NavigationButton/useHandleOnSlideChange.ts'
import { NavigationButtons } from '../NavigationButton/Navigations.tsx' 

export const Artists = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(window.innerWidth < 768 ? 8 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 4 : 2)
    const { onSlideChangeHandler } = useHandleOnSlideChange()
    return (
        <div className='artists px-8'>
            <Title title='Artists' textLink='see all' href='#' />
            <Swiper
                speed={1000}
                slidesPerView={6}
                loop={true}
                onBreakpoint={() => setSlides(window.innerWidth < 768 ? 8 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 4 : 2)}
                spaceBetween={30}
                ref={swiperRef}
                breakpoints={{
                    0: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 6
                    },
                }}
                className="artists-slider my-5"
                onTransitionStart={() => onSlideChangeHandler(".event-slider", ".button-event", { total: 8, count: slidesPerView })}
            >
                <SwiperSlide>
                    <ArtistsItems nameArtists='BENEE Featuring' href='#' srcImg='https://volna.volkovdesign.com/img/artists/artist1.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArtistsItems nameArtists='Jason Aldean' href='#' srcImg='https://volna.volkovdesign.com/img/artists/artist2.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArtistsItems nameArtists='John Doe' href='#' srcImg='https://volna.volkovdesign.com/img/artists/artist3.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArtistsItems nameArtists='Megan Thee' href='#' srcImg='https://volna.volkovdesign.com/img/artists/artist4.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArtistsItems nameArtists='Stefflon Don' href='#' srcImg='https://volna.volkovdesign.com/img/artists/artist5.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArtistsItems nameArtists='Juice WRLD' href='#' srcImg='https://volna.volkovdesign.com/img/artists/artist6.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArtistsItems nameArtists='LOCASH' href='#' srcImg='https://volna.volkovdesign.com/img/artists/artist7.jpg'/>
                </SwiperSlide>
                <SwiperSlide>
                    <ArtistsItems nameArtists='NLE Choppa' href='#' srcImg='https://volna.volkovdesign.com/img/artists/artist8.jpg'/>
                </SwiperSlide>
            </Swiper>
            <div className="w-full flex items-center py-4 justify-end mb-20">
                <NavigationButtons totalSlides={8} preViewCount={slidesPerView} swiperRef={swiperRef} />
            </div>
        </div>
    )
}

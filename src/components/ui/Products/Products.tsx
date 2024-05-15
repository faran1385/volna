import React, { useRef, useState } from 'react'
import { Title } from '../Title/Title.tsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHandleOnSlideChange } from '../../logic/NavigationButton/useHandleOnSlideChange.ts';
import { NavigationButtons } from '../NavigationButton/Navigations.tsx';
import { ProductItems } from './ProductItems/ProductItems.tsx';

export const Products = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const total = 8;
    const nameSlider = 'products';
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(window.innerWidth < 800 ? 4 : 8)
    const { onSlideChangeHandler } = useHandleOnSlideChange()
    return (
        <div className='products px-8 '>
            <Title href='#' textLink='see all' title='Products' />
            <Swiper
                speed={1000}
                slidesPerView={2}
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
                onTransitionStart={() => onSlideChangeHandler(`.${nameSlider}-slider`, `.button-${nameSlider}`, { total: total, count: slidesPerView })}
            >
                <SwiperSlide>
                    <ProductItems
                        hasNew
                        href='#'
                        srcImg='https://volna.volkovdesign.com/img/store/item1.jpg'
                        name='Vinyl Player'
                        price={'1 099'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItems
                        href='#'
                        srcImg='https://volna.volkovdesign.com/img/store/item2.jpg'
                        name='Microphone R4'
                        price={'1 099'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItems
                        hasNew
                        href='#'
                        srcImg='https://volna.volkovdesign.com/img/store/item3.jpg'
                        name='Music Blank'
                        price={'1 099'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItems
                        href='#'
                        srcImg='https://volna.volkovdesign.com/img/store/item4.jpg'
                        name='Headphones ZR-991'
                        price={'1 099'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItems
                        href='#'
                        srcImg='https://volna.volkovdesign.com/img/store/item5.jpg'
                        name='Piano'
                        price={'1 099'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItems
                        href='#'
                        srcImg='https://volna.volkovdesign.com/img/store/item6.jpg'
                        name='Guitar'
                        price={'1 099'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItems
                        href='#'
                        srcImg='https://volna.volkovdesign.com/img/store/item7.jpg'
                        name='Microphone R4s'
                        price={'1 099'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItems
                        href='#'
                        srcImg='https://volna.volkovdesign.com/img/store/item8.jpg'
                        name='Microphone R4s'
                        price={'1 099'}
                    />
                </SwiperSlide>
            </Swiper>
            <div className="w-full flex items-center justify-center md:justify-end">
                <NavigationButtons aditionalClass={`${nameSlider}`} totalSlides={total} preViewCount={slidesPerView} swiperRef={swiperRef} />
            </div>
        </div>
    )
}

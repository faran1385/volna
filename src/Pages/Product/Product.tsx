import React, { useRef, useState } from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import './Product.css'
import { useHandleOnSlideChange } from '../../components/logic/NavigationButton/useHandleOnSlideChange'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavigationButtons } from '../../components/ui/NavigationButton/Navigations'
import { Amount } from '../../components/ui/ProductsCart/Amount/Amount'
import { BtnGreen } from '../../components/ui/BtnGreen/BtnGreen'
import { Shares } from '../../components/ui/Shares/Shares'
import { Title } from '../../components/ui/Title/Title.tsx'
import { Products } from '../../components/ui/Products/Products.tsx'
export const Product: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(2)
    const { onSlideChangeHandler } = useHandleOnSlideChange()
    return (
        <main className='product pages pages--mobile pb-5'>
            <HeadPages title='Headphones ZR-991' Items={[{ text: 'home', href: '/' }, { text: 'store', href: './store' }, { text: 'product' }]} />
            <section className='mx-8 my-5 card--border flex flex-col md:flex-row gap-4'>
                <div className='product__gallery'>
                    <Swiper
                        speed={1000}
                        slidesPerView={1}
                        loop={true}
                        onBreakpoint={() => setSlides(2)}
                        spaceBetween={30}
                        ref={swiperRef}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            }
                        }}
                        className="product-slider"
                        onTransitionStart={() => onSlideChangeHandler(".product-slider", ".button-product", { total: 2, count: slidesPerView })}
                    >

                        <SwiperSlide>
                            <img className='product__gallery__img' src="https://volna.volkovdesign.com/img/store/item4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='product__gallery__img' src="https://volna.volkovdesign.com/img/store/item4.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                    <div className="w-full flex items-center py-4 justify-center ">
                        <NavigationButtons aditionalClass="product" hasNavigationArrow totalSlides={2} preViewCount={slidesPerView} swiperRef={swiperRef} />
                    </div>
                </div>
                <div className='product__body'>
                    <h4 className='article__h4 mb-2'>
                        About Headphones ZR-991
                    </h4>
                    <b className='article__h3 font-semibold '>
                        $199
                    </b>
                    <p className='text-gary my-4'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have <a href="#" className='about-link'>suffered</a> alteration in some form, by injected humour, or randomised words which don't look even slightly believable. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </p>
                    <Amount count={1} />
                    <BtnGreen classBox='justify-strat mt-2' hasTagLink='#'>
                        add to cart
                    </BtnGreen>
                    <ul className='list-style__ul mt-4 mb-6'>
                        <li className='list-style__ul__li'>
                            Theme Forest
                        </li>
                        <li className='list-style__ul__li'>
                            Graphic River
                        </li>
                        <li className='list-style__ul__li'>
                            Audio Jungle
                        </li>
                        <li className='list-style__ul__li'>
                            3D Ocean
                        </li>
                        <li className='list-style__ul__li'>
                            Code Canayon
                        </li>
                    </ul>
                    <Shares classBox='ps-0 py-0' />
                </div>
            </section>
            <Products titleText='Recommend'/>
        </main>
    )
}

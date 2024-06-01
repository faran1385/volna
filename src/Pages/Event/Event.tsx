import React, { useRef } from 'react'
import { PodcastsVideo } from '../../components/ui/Podcasts/PodcastsItems/PodcastsVideo/PodcastsVideo'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderItem } from '../../components/ui/Slider/SliderItem/SliderItem'
import { NavigationButton } from '../../components/ui/NavigationButton/NavigationButton'
import { useHandleOnSlideChange } from '../../components/logic/NavigationButton/useHandleOnSlideChange'
import './Event.css'
import { Shares } from '../../components/ui/Shares/Shares'
import { Events } from '../../components/ui/Events/Events'
export const Event: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { onSlideChangeHandler } = useHandleOnSlideChange()
    const swiperRef = useRef<any>()
    const VideoIframe = useRef<HTMLIFrameElement>(null!)
    const Videobox = useRef<HTMLDivElement | null>(null)
    return (
        <main className=' pages pages--mobile'>
            <PodcastsVideo
                Videobox={Videobox}
                VideoIframe={VideoIframe}
            />
            <section className="w-full py-6 px-8">

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
                        {/* <SwiperSlide>
                            <SliderItem buttons={[{ background: "black", animation: "text", text: "learn more" }]} title="New Artist of Our Label" imageSrc="https://volna.volkovdesign.com/img/home/slide3.jpg" />
                        </SwiperSlide> */}
                        <SwiperSlide>
                            <SliderItem buttons={[{ text: "Buy ticket", background: "green", animation: "toBlack" }, { background: "black", animation: "text", text: "View location" }]} moreText='Rocky Pub, 221B Baker St, Marylebone, London' title="The long-awaited musician" imageSrc="https://volna.volkovdesign.com/img/home/slide1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderItem buttons={[{ background: "black", animation: "toGreen", text: "watch video", hasIcon: true }]} href="https://www.youtube.com/embed/S33kwqVmC3w" VideoIframe={VideoIframe} Videobox={Videobox} title="Rocky Pub" imageSrc="https://volna.volkovdesign.com/img/home/slide2.jpg">
                                <svg className={"item__button__icon me-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                                </svg>
                            </SliderItem>
                        </SwiperSlide>
                    </Swiper>
                    <div className="w-full z-10 absolute top-100 md:bottom-0 md:pe-12 h-12 items-center flex justify-center md:justify-end">
                        <NavigationButton aditionalClass='slider' isActive={true} whereTo={0} swiperRef={swiperRef} />
                        <NavigationButton aditionalClass='slider' isActive={false} whereTo={1} swiperRef={swiperRef} />
                        <div className="md:block hidden">
                            <NavigationButton aditionalClass='slider' isActive={false} whereTo={"prev"} swiperRef={swiperRef} />
                            <NavigationButton aditionalClass='slider' isActive={false} whereTo={"next"} swiperRef={swiperRef} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-8 xl:w-10/12'>
                <div className='event-loction flex md:flex-row flex-col gap-y-2  md:justify-between py-5'>
                    <a href="#" className='flex event-loction__text event-loction__text--link'>
                        <svg className='event-loction__icon pe-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.46,9.63A8.5,8.5,0,0,0,7.3,3.36,8.56,8.56,0,0,0,3.54,9.63,8.46,8.46,0,0,0,6,16.46l5.3,5.31a1,1,0,0,0,1.42,0L18,16.46A8.46,8.46,0,0,0,20.46,9.63ZM16.6,15.05,12,19.65l-4.6-4.6A6.49,6.49,0,0,1,5.53,9.83,6.57,6.57,0,0,1,8.42,5a6.47,6.47,0,0,1,7.16,0,6.57,6.57,0,0,1,2.89,4.81A6.49,6.49,0,0,1,16.6,15.05ZM12,6a4.5,4.5,0,1,0,4.5,4.5A4.51,4.51,0,0,0,12,6Zm0,7a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,13Z"></path></svg>
                        Rocky Pub, 221B Baker St, Marylebone, London NW1 6XE, UK
                    </a>
                    <span className='flex event-loction__text'>
                        <svg className='event-loction__icon pe-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg>
                        March 14, 2021
                    </span>
                </div>
                <p className='text-gary pb-6 '>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p className='text-gary pb-6 '>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <ul className='list-style__ul  mb-6'>
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
                <p className='text-gary '>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. <a href="#" className='about-link'>Link</a> the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
            </section>
            <Shares />
            <Events TitleText='Other Events'/>
        </main>
    )
}

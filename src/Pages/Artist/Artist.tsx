import React, { useRef, useState } from 'react'
import './Artist.css'
import { ArtistCard } from '../../components/ui/ArtistCard/ArtistCard'
import './../../components/ui/ListStyle/ListStyle.css'
import { Shares } from '../../components/ui/Shares/Shares'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Event } from '../../components/ui/Events/Event/Event'
import { Tiket } from '../../components/ui/Events/Tiket/Tiket'
import { useHandleOnSlideChange } from '../../components/logic/NavigationButton/useHandleOnSlideChange'
import { Title } from '../../components/ui/Title/Title.tsx'
import { NavigationButtons } from '../../components/ui/NavigationButton/Navigations'
import { Podcasts } from '../../components/ui/Podcasts/Podcasts.tsx'
import { Releases } from '../../components/ui/NewReleases/Releases.tsx'
import { Events } from '../../components/ui/Events/Events.tsx'
export const Artist: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(window.innerWidth < 768 ? 6 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 3 : 2)
    const { onSlideChangeHandler } = useHandleOnSlideChange()
    const TiketRef = useRef<HTMLDivElement>(null!)
    return (
        <main className='artist pages pages--mobile'>
            <Tiket
                TiketRef={TiketRef}
            />
            <ArtistCard srcImg='https://volna.volkovdesign.com/img/artists/artist1.jpg' title='Juice WRLD' name='John Doe' moreText='It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
            <p className='text-gary pb-6 px-8'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <p className='text-gary pb-6 px-8'>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <ul className='list-style__ul px-8 mb-6'>
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
            <p className='text-gary px-8'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. <a href="#" className='about-link'>Link</a> the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
            <Shares />
            <Podcasts TitleText='Music videos'/>
            <Releases TitleText='Releases'/>
            <Events TitleText='Events'/>
        </main>
    )
}

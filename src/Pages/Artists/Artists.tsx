import {useRef, useState} from 'react'
import './../ResponsivePages.css'
import {HeadPages} from '../../components/ui/HeadPages/HeadPages'
import {Filter} from '../../components/ui/Filter/Filter'
import {ArtistsItems} from '../../components/ui/Artists/ArtistsItems/ArtistsItems'
import {Title} from '../../components/ui/Title/Title.tsx'
import {useHandleOnSlideChange} from '../../components/logic/NavigationButton/useHandleOnSlideChange'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Event} from '../../components/ui/Events/Event/Event'
import {NavigationButtons} from '../../components/ui/NavigationButton/Navigations'
import {BtnGreen} from '../../components/ui/BtnGreen/BtnGreen.tsx'
// LOCASH

// NLE Choppa
const SomeArtits = [
    {
        name: "BENEE Featuring",
        href: "#",
        img: "1"
    },
    {
        name: "Jason Aldean",
        href: "#",
        img: "2"
    },
    {
        name: "John Doe",
        href: "#",
        img: "3"
    },
    {
        name: "Megan Thee",
        href: "#",
        img: "4"
    },
    {
        name: "Stefflon Don",
        href: "#",
        img: "5"
    },
    {
        name: "Juice WRLD",
        href: "#",
        img: "6"
    },
    {
        name: "LOCASH",
        href: "#",
        img: "7"
    },
    {
        name: "NLE Choppa",
        href: "#",
        img: "8"
    },
    {
        name: "BENEE Featuring",
        href: "#",
        img: "1"
    },
    {
        name: "Jason Aldean",
        href: "#",
        img: "2"
    },
    {
        name: "John Doe",
        href: "#",
        img: "3"
    },
    {
        name: "Megan Thee",
        href: "#",
        img: "4"
    },
    {
        name: "Stefflon Don",
        href: "#",
        img: "5"
    },
    {
        name: "Juice WRLD",
        href: "#",
        img: "6"
    },
    {
        name: "LOCASH",
        href: "#",
        img: "7"
    },
    {
        name: "NLE Choppa",
        href: "#",
        img: "8"
    },
    {
        name: "BENEE Featuring",
        href: "#",
        img: "1"
    },
    {
        name: "Jason Aldean",
        href: "#",
        img: "2"
    },
]
export const Artists = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null)
    const [slidesPerView, setSlides] = useState(window.innerWidth < 768 ? 6 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 3 : 2)
    const {onSlideChangeHandler} = useHandleOnSlideChange()
    const TiketRef = useRef<HTMLDivElement>(null!)

    return (
        <main className='pages pages--mobile xl:sticky'>
            <HeadPages title='artists' Items={[{text: "home", href: "/"}, {text: "artists", href: ""}]}/>
            <div className='xl:sticky '>
                <Filter
                    placeholder={"search..."}
                    DropItems={
                        [
                            {
                                boxId: "artists_list__drop", items:
                                    [
                                        {text: "All artists", hasActive: true},
                                        {text: "Legacy artists"},
                                        {text: "Active artists"}
                                    ]
                            },
                            {
                                boxId: "genres_list__drop", items:
                                    [
                                        {text: "All genres", hasActive: true},
                                        {text: "Alternative"},
                                        {text: "Blues"},
                                        {text: "Classical"},
                                        {text: "Country"},
                                        {text: "Electronic"},
                                        {text: "Hip-Hop/Rap"},
                                        {text: "Indie"},
                                        {text: "Jazz"},
                                        {text: "Latino"},
                                        {text: "R&B/Soul"},
                                        {text: "Rock"},
                                    ]
                            }
                        ]
                    }
                    RadioItems={{
                        items: [
                            "Featured",
                            "popular",
                            "newest",
                        ],
                        boxId: "checked_list__radio"
                    }}
                />

                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-7 py-5 px-8'>
                    {
                        SomeArtits.map((e, index) => {
                            return (
                                <li key={`releases_${index}`}>
                                    <ArtistsItems href={e.href}
                                                  srcImg={`https://volna.volkovdesign.com/img/artists/artist${e.img}.jpg`}
                                                  nameArtists={e.name}/>
                                </li>
                            )
                        })
                    }
                </ul>
                <BtnGreen>
                    laod more
                </BtnGreen>
            </div>
            <div className='px-8'>
                <Title title='Upcoming Events' href='#' textLink='see all'/>
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
                        onTransitionStart={() => onSlideChangeHandler(".event-slider", ".button-event", {
                            total: 6,
                            count: slidesPerView
                        })}
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
                        <NavigationButtons aditionalClass="event" totalSlides={6} preViewCount={slidesPerView}
                                           swiperRef={swiperRef}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

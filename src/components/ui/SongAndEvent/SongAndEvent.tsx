import React, { useRef } from 'react'
import { Song } from '../Songs/Song/Song'
import { Event } from '../Events/Event/Event'
import { Tiket } from '../Events/Tiket/Tiket'
import './SongAndEvent.css'
export const SongAndEvent: React.FC = () => {
    const TiketRef = useRef<HTMLDivElement>(null!)
    return (
        <>
            <Tiket
                TiketRef={TiketRef}
            />
            <div className='song-and-event px-8 grid grid-cols-3 gap-x-5 py-6'>
                <div className='song-and-event__events flex flex-col gap-4 xl:col-start-1 xl:col-end-3 col-start-1 col-end-4'>
                    <div className="flex items-center">
                        <a href="#" className="song__header__title">Upcoming events</a>
                    </div>
                    <div className='flex gap-5 justify-between md:flex-row flex-col xl:pb-0 pb-3'>
                        <Event
                            img="https://volna.volkovdesign.com/img/events/event1.jpg"
                            isAvailable={true}
                            date="March 14, 2021"
                            title="Sorry Babushka"
                            location="1 East Plumb Branch St.Saint Petersburg, FL 33702"
                            time="8:00 pm"
                            TiketRef={TiketRef}
                        />
                        <Event
                            img="https://volna.volkovdesign.com/img/events/event2.jpg"
                            isAvailable={true}
                            date="March 16, 2021"
                            title="Big Daddy"
                            location="71 Pilgrim Avenue Chevy Chase, MD 20815                            "
                            time="7:00 pm"
                            TiketRef={TiketRef}
                        />
                    </div>
                </div>
                <div className='song-and-event__song xl:col-start-3 xl:col-end-4 col-start-1 col-end-4 '>
                    <div className="flex items-center">
                        <a href="#" className="song__header__title">New Singles</a>
                    </div>
                    <div>
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover.svg" singer="AudioPizza" name="Cinematic" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover7.jpg" singer="AudioPizza" name="Adventure" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover8.jpg" singer="AudioPizza" name="Epic Motivational" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover9.jpg" singer="AudioPizza" name="Upbeat Rock" />
                        <Song isLive={155} href="" img="https://volna.volkovdesign.com/img/covers/cover10.jpg" singer="AudioPizza" name="Ambient Pop" />
                    </div>
                </div>
            </div>
        </>
    )
}

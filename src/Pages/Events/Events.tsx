import React, { useRef } from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { Filter } from '../../components/ui/Filter/Filter'
import { Event } from '../../components/ui/Events/Event/Event'
import { Tiket } from '../../components/ui/Events/Tiket/Tiket'
import { BtnGreen } from '../../components/ui/BtnGreen/BtnGreen'
import { Supporters } from '../../components/ui/Supporters/Supporters'

export const Events: React.FC = () => {

    const TiketRef = useRef<HTMLDivElement>(null!)
    return (
        <div className='pages pages--mobile'>
            <Tiket
                TiketRef={TiketRef}
            />
            <HeadPages title='events' Items={[{ text: "home", href: "/" }, { text: "events" }]} />
            <div className='xl:sticky pb-6'>
                <Filter
                    placeholder='data, place, etc.'
                    RadioItems={{
                        boxId: "evnets__filter__radio", items: [
                            "Upcoming",
                            "past",
                            "free",
                        ]
                    }}
                    DropItems={
                        [
                            {
                                boxId: "test",
                                items: [
                                    { text: "Upcoming events", hasActive: true },
                                    { text: "Past events" },
                                    { text: "Free events" },
                                ]
                            }
                        ]
                    }
                />
                <div className='grid gap-6 grid-cols-3 px-8 py-4'>
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
                    <Event
                        img="https://volna.volkovdesign.com/img/events/event3.jpg"
                        isAvailable={false}
                        date="March 23, 2021"
                        title="Rocky Pup"
                        location="514 S. Magnolia St. Orlando, FL 32806"
                        time="9:30 pm"
                        TiketRef={TiketRef}
                    />
                    <Event
                        img="https://volna.volkovdesign.com/img/events/event4.jpg"
                        isAvailable={true}
                        date="March 30, 2021"
                        title="big Club"
                        location="123 6th St. Melbourne, FL 32904"
                        time="6:00 pm"
                        TiketRef={TiketRef}
                    />
                    <Event
                        img="https://volna.volkovdesign.com/img/events/event5.jpg"
                        isAvailable={false}
                        date="March 30, 2021"
                        title="Big Daddy"
                        location="71 Pilgrim Avenue Chevy Chase, MD 20815"
                        time="10:00 pm"
                        TiketRef={TiketRef}
                    />
                    <Event
                        img="https://volna.volkovdesign.com/img/events/event6.jpg"
                        isAvailable={true}
                        date="March 31, 2021"
                        title="Rocky Pup"
                        location="514 S. Magnolia St. Orlando, FL 32806"
                        time="6:30 pm"
                        TiketRef={TiketRef}
                    />
                </div>
                <BtnGreen>
                    load more
                </BtnGreen>
            </div>
            <Supporters/>
        </div>
    )
}

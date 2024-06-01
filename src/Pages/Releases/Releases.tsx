import React, { useState } from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { Filter } from '../../components/ui/Filter/Filter'
import { BtnGreen } from '../../components/ui/BtnGreen/BtnGreen'
import { ReleasesCards } from '../../components/ui/NewReleases/ReleasesCards/ReleasesCards'
import './../ResponsivePages.css'
import './Releases.css'
import { SongAndEvent } from '../../components/ui/SongAndEvent/SongAndEvent'
export const Releases: React.FC = () => {
    return (
        <main className='pages pages--mobile'>
            <HeadPages title='releases' Items={[{ text: "home", href: "/" }, { text: "releases" }]} />
            <div className='xl:sticky pb-6'>
                <Filter
                    RadioItems={{
                        items : [
                            "Featured",
                            "popular",
                            "newest",
                        ],
                        boxId:"checked_list__radio"
                    }}
                    placeholder={"search..."}
                    DropItems={
                        [
                            {
                                boxId: "artists_list__drop", items:
                                    [
                                        { text: "All artists", hasActive: true },
                                        { text: "Legacy artists" },
                                        { text: "Active artists" }
                                    ]
                            },
                            {
                                boxId: "genres_list__drop", items:
                                    [
                                        { text: "All genres", hasActive: true },
                                        { text: "Alternative" },
                                        { text: "Blues" },
                                        { text: "Classical" },
                                        { text: "Country" },
                                        { text: "Electronic" },
                                        { text: "Hip-Hop/Rap" },
                                        { text: "Indie" },
                                        { text: "Jazz" },
                                        { text: "Latino" },
                                        { text: "R&B/Soul" },
                                        { text: "Rock" },
                                    ]
                            }
                        ]
                    }
                />
                <div className='px-8'>
                    <ReleasesCards />
                </div>
                <BtnGreen>
                    load more
                </BtnGreen>
            </div>
            <SongAndEvent/>
        </main>
    )
}

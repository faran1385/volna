import React from 'react'
import "./Filter.css"
import { SearchInput } from '../header/Search/SearchInput'
import { Drop } from './Drop/Drop'
import { Radio } from './Radio/Radio'
interface FilterType {
    placeholder: string
}
export const Filter: React.FC<FilterType> = ({ placeholder }) => {
    return (
        <div className='filter flex flex-col lg:flex-row px-8 py-4  lg:items-center lg:justify-between'>
            <div className='flex flex-col lg:flex-row'>
                <form className='filter__search lg:filter__search--width'>
                    <SearchInput placeholder={placeholder} />
                </form>
                <div className='flex my-5 lg: lg:my-0'>
                    <Drop
                        boxId='artists_list__drop'
                        items={[
                            { text: "All artists", hasActive: true },
                            { text: "Legacy artists" },
                            { text: "Active artists" }
                        ]}
                    />
                    <Drop
                        boxId='genres_list__drop'
                        items={[
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
                        ]}
                    />
                </div>
            </div>
            <Radio
                boxId='checked_list__radio'
                items={[
                    "Featured",
                    "popular",
                    "newest",
                ]}
            />
        </div>
    )
}

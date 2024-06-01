import React from 'react'
import "./Filter.css"
import { SearchInput } from '../header/Search/SearchInput'
import { Drop } from './Drop/Drop'
import { Radio } from './Radio/Radio'
interface DropItemsType {
    text: string,
    hasActive?: boolean
}
export interface DropType {
    items: DropItemsType[],
    boxId: string
}
export interface RadioType {
    items: string[],
    boxId: string
}
interface FilterType {
    placeholder: string,
    DropItems: DropType[],
    RadioItems : {
        items: string[],
        boxId: string
    }
    
}
export const Filter: React.FC<FilterType> = ({ placeholder, DropItems , RadioItems }) => {
    return (
        <div  className='filter lg:py-0 py-6 xl:sticky top-0 flex flex-col lg:flex-row px-8  lg:items-center lg:justify-between'>
            <div className='flex flex-col lg:flex-row'>
                <form className='filter__search lg:filter__search--width'>
                    <SearchInput placeholder={placeholder} />
                </form>
                <div className='flex my-5 lg: lg:my-0'>
                    {
                        DropItems.map((e, index) => {
                            return (
                                <Drop
                                    boxId={e.boxId}
                                    items={e.items}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <Radio
                boxId={RadioItems.boxId}
                items={RadioItems.items}
            />
        </div>
    )
}

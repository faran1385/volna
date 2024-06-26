import React from "react"
import './SearchInput.css'
interface SearchInputType {
    placeholder: string
}
export const SearchInput: React.FC<SearchInputType> = ({ placeholder }) => {
    return (
        <div className='Header-nav__searech xl:w-full flex flex-row justify-between py-2  px-5 items-center  gap-2'>
            <input className='w-11/12' type="text" title='search' placeholder={placeholder} />
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
            </button>
        </div>
    )
}
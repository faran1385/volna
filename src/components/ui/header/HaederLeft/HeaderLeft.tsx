import React from 'react'
import './HeaderLeft.css'
import { SearchInput } from './../Search/SearchInput'
import { StateSearchType } from './HeaderLeft'
export const HeaderLeft = ({ setToggleSearch, toggleSearch }: StateSearchType) => {
    return (
        <div className='Header-nav__left w-auto Header-nav__left--action   absolute  flex items-centerw'>
            <nav className='xl:block hidden Header-nav__links flex me-16'>
                <a href="#" className='capitalize me-7'>profile</a>
                <a href="#" className='capitalize me-7'>about</a>
                <a href="#" className='capitalize'>contacts</a>
            </nav>
            <div style={{ backgroundColor: "var(--background)" }} className={`xl:w-auto xl:static Header-nav__left__inputbox--resize   transition-all duration-500 flex justify-between xl:gap-2 fixed z-40 w-11/12 ${toggleSearch ? "top-4  " : "-top-36 "}`}>
                <SearchInput />
                <button className='xl:hidden block' title='cluse' onClick={() => setToggleSearch(false)}>
                    <svg className='Header-nav__controler__links__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

import { RefObject, forwardRef } from 'react'
import './HeaderLeft.css'
import { SearchInput } from './../Search/SearchInput'
export const HeaderLeft = ({ BoxSearch }: {BoxSearch : RefObject<HTMLDivElement> | null}) => {
    const DownSearch = () => {
        BoxSearch?.current?.classList.add("-top-36")
        BoxSearch?.current?.classList.remove("top-0")
    }
    return (
        <div className='Header-nav__left w-auto Header-nav__left--action   absolute  flex items-centerw'>
            <nav className='xl:flex hidden Header-nav__links flex items-center me-16'>
                <a href="#" className='capitalize me-7'>profile</a>
                <a href="#" className='capitalize me-7'>about</a>
                <a href="./contacts" className='capitalize'>contacts</a>
            </nav>
            <div ref={BoxSearch} className={`xl:w-auto xl:static Header-nav__left__inputbox--resize    transition-all duration-500 flex justify-between items-center xl:gap-2 fixed z-40 -top-36 `}>
                <SearchInput placeholder='Artist, track or podcast' />
                <button className='xl:hidden pe-4 block' title='cluse' onClick={DownSearch}>
                    <svg className='Header-nav__controler__links__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}



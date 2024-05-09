import React, { useContext, useState } from 'react'
import './Header.css'
import { ContextMenu, StateMenuType } from '../../../App'
export const Header: React.FC = () => {
    const [toggleSearch, setToggleSearch] = useState<boolean>(false)
    const StateMenu = useContext<StateMenuType | null>(ContextMenu)
    return (
        <div className='Header-nav flex justify-center xl:static fixed top-0 w-full  '>
            <div className='xl:Header-nav__box--xl w-10/12 transition-all duration-150 flex xl:justify-end xl:gap-x-32 justify-between items-center '>
                <nav className='xl:block hidden Header-nav__links flex gap-x-4'>
                    <a href="#" className='capitalize'>profile</a>
                    <a href="#" className='capitalize'>about</a>
                    <a href="#" className='capitalize'>contacts</a>
                </nav>
                <header className="xl:hidden p-5 flex items-center  sidebar__header">
                    <img className="h-full sidebar__header__image" src="https://volna.volkovdesign.com/img/logo.svg" />
                </header>
                <div style={{ backgroundColor: "var(--background)" }} className={`xl:w-96 xl:static  transition-all duration-500 flex gap-2 fixed z-40 w-10/12 ${toggleSearch ? "top-4 " : "-top-36"}`}>
                    <SearchInput />
                    <button className='xl:hidden block' title='cluse' onClick={() => setToggleSearch(false)}>
                        <svg className='Header-nav__controler__links__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                    </button>
                </div>
                <div className='Header-nav__controler flex'>
                    <div className='Header-nav__controler__links sidebar__nav__link flex gap-5 pe-4 border-r-2'>
                        <button onClick={() => setToggleSearch(!toggleSearch)} className='xl:hidden block' title='search'>
                            <svg className='Header-nav__controler__links__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
                        </button>
                        <a href="#" className='flex items-center'>
                            <svg className='Header-nav__controler__links__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M19.05566,2h-14a3.00328,3.00328,0,0,0-3,3V19a3.00328,3.00328,0,0,0,3,3h14a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19.05566,2Zm-14,2h14a1.001,1.001,0,0,1,1,1v8H17.59082a1.99687,1.99687,0,0,0-1.66406.89062L14.52051,16H9.59082L8.18457,13.89062A1.99687,1.99687,0,0,0,6.52051,13H4.05566V5A1.001,1.001,0,0,1,5.05566,4Zm14,16h-14a1.001,1.001,0,0,1-1-1V15H6.52051l1.40625,2.10938A1.99687,1.99687,0,0,0,9.59082,18h4.92969a1.99687,1.99687,0,0,0,1.66406-.89062L17.59082,15h2.46484v4A1.001,1.001,0,0,1,19.05566,20Z"></path></svg>
                            <span className='Header-nav__controler__links__count Header-nav__controler__links__count--message'>17</span>
                        </a>
                        <a href="#" className='flex items-center'>
                        <svg className="sidebar__nav__link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
                        </svg>
                            <span className='Header-nav__controler__links__count Header-nav__controler__links__count--shop '>3</span>
                        </a>
                    </div>
                    <a href="#" className="flex ps-4 w-fit sidebar__nav__link">
                        <span className=" sidebar__nav__link__text capitalize">sign in</span>
                        <svg className="sidebar__nav__link__icon ms-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path></svg>
                    </a>

                    <button onClick={()=>StateMenu?.setToggleMenu(!StateMenu?.toggleMenu)} title='menu' className={`Header-nav__controler_btn xl:hidden block ${StateMenu?.toggleMenu?"Header-nav__controler_btn--active":""} ms-3 `}>
                        <span style={{width:"100%",top:"0px"}}></span>
                        <span style={{width:"70%",top:"50%",transform:'translateY(-50%)'}}></span>
                        <span style={{width:"40%",bottom:"0px"}}></span>
                    </button>
                </div>
            </div>
        </div>
    )
}




const SearchInput : React.FC = () => {
    return (
        <div className='Header-nav__searech flex justify-between items-center  px-4 py-2 rounded-md gap-2'>
            <input className='w-full' type="search" title='search' placeholder='Artist, track or podcast' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
        </div>
    )
}
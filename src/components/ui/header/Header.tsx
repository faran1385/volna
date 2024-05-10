import React, { ClassAttributes, DetailedHTMLProps, HTMLAttributes, useContext, useState } from 'react'
import './Header.css'
import { ContextMenu, StateMenuType } from '../../../App'
import { TypeDropDown } from './Header'
export const Header: React.FC = () => {
    const [toggleSearch, setToggleSearch] = useState<boolean>(false)
    const StateMenu = useContext<StateMenuType | null>(ContextMenu)
    return (
        <div className='Header-nav flex justify-end xl:static fixed top-0 w-full  '>
            <div className='Header-nav__box--xl relative  transition-all duration-150 flex xl:justify-end justify-end items-center '>
                <header className={`xl:hidden ${toggleSearch?"absolute -translate-y-24":""} transition-all duration-300 absolute left-3 p-5 flex items-center  sidebar__header`}>
                    <img className="h-full sidebar__header__image" src="https://volna.volkovdesign.com/img/logo.svg" title={'logo'} />
                </header>
                <div className='Header-nav__left w-auto Header-nav__left--action   absolute  flex items-center ps-7'>
                    <nav className='xl:block hidden Header-nav__links flex me-16'>
                        <a href="#" className='capitalize me-7'>profile</a>
                        <a href="#" className='capitalize me-7'>about</a>
                        <a href="#" className='capitalize'>contacts</a>
                    </nav>
                    <div style={{ backgroundColor: "var(--background)" }} className={`xl:w-auto xl:static Header-nav__left__inputbox--resize   transition-all duration-500 flex justify-between xl:gap-2 fixed z-40 w-11/12 ${toggleSearch ? "top-4  " : "-top-36 "}`}>
                        <SearchInput />
                        <button className='xl:hidden block' title='cluse' onClick={() => setToggleSearch(false)}>
                            <svg className='Header-nav__controler__links__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                        </button>
                    </div>
                </div>
                <div className={`Header-nav__controler ${toggleSearch?"absolute -translate-y-24":""} transition-all duration-300 pe-7 flex items-center`}>
                    <div className='Header-nav__controler__links sidebar__nav__link flex gap-7 pe-8 '>
                        <button onClick={() => setToggleSearch(!toggleSearch)} className='xl:hidden block' title='search'>
                            <svg className='Header-nav__controler__links__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
                        </button>
                        <div className='Header-nav__controler__links__drop relative py-4 ps-2'>
                            <a href="#" className='flex items-center'>
                                <svg className='Header-nav__controler__links__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.05566,2h-14a3.00328,3.00328,0,0,0-3,3V19a3.00328,3.00328,0,0,0,3,3h14a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19.05566,2Zm-14,2h14a1.001,1.001,0,0,1,1,1v8H17.59082a1.99687,1.99687,0,0,0-1.66406.89062L14.52051,16H9.59082L8.18457,13.89062A1.99687,1.99687,0,0,0,6.52051,13H4.05566V5A1.001,1.001,0,0,1,5.05566,4Zm14,16h-14a1.001,1.001,0,0,1-1-1V15H6.52051l1.40625,2.10938A1.99687,1.99687,0,0,0,9.59082,18h4.92969a1.99687,1.99687,0,0,0,1.66406-.89062L17.59082,15h2.46484v4A1.001,1.001,0,0,1,19.05566,20Z"></path></svg>
                                <span className='Header-nav__controler__links__count Header-nav__controler__links__count--message'>17</span>
                            </a>
                            <DropDown title='view all'>
                                <DropDownNotifation />
                            </DropDown>
                        </div>
                        <div className='Header-nav__controler__links__drop relative py-4 ps-2'>
                            <a href="#" className='flex items-center'>
                                <svg className='Header-nav__controler__links__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path></svg>
                                <span className='Header-nav__controler__links__count Header-nav__controler__links__count--shop '>3</span>
                            </a>
                            <DropDown title='go to cart'>
                                <DropDownCart/>
                            </DropDown>
                        </div>
                    </div>
                    <a href="#" className="flex ps-8 w-fit Header-nav__controler__signin sidebar__nav__link">
                        <span className=" sidebar__nav__link__text capitalize">sign in</span>
                        <svg className="sidebar__nav__link__icon ms-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path></svg>
                    </a>

                    <button onClick={() => StateMenu?.setToggleMenu(!StateMenu?.toggleMenu)} title='menu' className={`Header-nav__controler_btn xl:hidden block ${StateMenu?.toggleMenu ? "Header-nav__controler_btn--active" : ""} ms-3 `}>
                        <span style={{ width: "100%", top: "0px" }}></span>
                        <span style={{ width: "70%", top: "50%", transform: 'translateY(-50%)' }}></span>
                        <span style={{ width: "40%", bottom: "0px" }}></span>
                    </button>
                </div>
            </div>
        </div>
    )
}




const SearchInput: React.FC = () => {
    return (
        <div className='Header-nav__searech xl:w-full flex flex-row justify-between py-2  px-5 items-center  gap-2'>
            <input className='w-11/12' type="text" title='search' placeholder='Artist, track or podcast' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
        </div>
    )
}

const DropDown = ({ children , title }: TypeDropDown) => {
    return (
        <div className='Header-nav__controler__links--dropdown px-3 py-3 '>
            <div className='Header-nav__controler__links--dropdown__box '>
                <a href="#" className='Header-nav__controler__links--dropdown__header w-full inline-block text-center capitalize'>{title}</a>
                <ul className='Header-nav__controler__links--dropdown__body'>
                    {children}
                </ul>
            </div>
        </div>
    )
}


const DropDownCart = () => {
    return (
        <>
            <li className='relative flex w-auto'>
                <img className='Header-nav__controler__links--dropdown__body__img' src="https://volna.volkovdesign.com/img/store/item4.jpg" title='prodect' />
                <div className=' flex flex-col w-auto ps-3'>
                    <a href='#' className='Header-nav__controler__links--dropdown__body__link--cart flex text-base items-center'>
                        Headphones ZR-991
                    </a>
                    <span className='Header-nav__controler__links--dropdown__body__time Header-nav__controler__links--dropdown__body__price'>
                        $99
                    </span>
                </div>
                <button className='absolute right-2 bottom-4 w-3 h-auto Header-nav__controler__links--dropdown__body__link--cart' type='button' title='close'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></button>
            </li>
            <li className='relative flex w-auto'>
                <img className='Header-nav__controler__links--dropdown__body__img' src="https://volna.volkovdesign.com/img/store/item4.jpg" title='prodect' />
                <div className=' flex flex-col w-auto ps-3'>
                    <a href='#' className='Header-nav__controler__links--dropdown__body__link--cart flex text-base items-center'>
                        Headphones ZR-991
                    </a>
                    <span className='Header-nav__controler__links--dropdown__body__time Header-nav__controler__links--dropdown__body__price'>
                        $99
                    </span>
                </div>
                <button className='absolute right-2 bottom-4 w-3 h-auto Header-nav__controler__links--dropdown__body__link--cart' type='button' title='close'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></button>
            </li>
            <li className='relative flex w-auto'>
                <img className='Header-nav__controler__links--dropdown__body__img' src="https://volna.volkovdesign.com/img/store/item4.jpg" title='prodect' />
                <div className=' flex flex-col w-auto ps-3'>
                    <a href='#' className='Header-nav__controler__links--dropdown__body__link--cart flex text-base items-center'>
                        Headphones ZR-991
                    </a>
                    <span className='Header-nav__controler__links--dropdown__body__time Header-nav__controler__links--dropdown__body__price'>
                        $99
                    </span>
                </div>
                <button className='absolute right-2 bottom-4 w-3 h-auto Header-nav__controler__links--dropdown__body__link--cart' type='button' title='close'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></button>
            </li>
        </>
    )
}


const DropDownNotifation = () => {
    return (
        <>
            <li className=' flex flex-col w-auto'>
                <p className='Header-nav__controler__links--dropdown__body__text flex items-center'>
                    <svg className='Header-nav__controler__links--dropdown__body__icon' style={{ fill: "var(--green-color)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path></svg>
                    <a href="#" className='Header-nav__controler__links--dropdown__body__link me-2'>Payment #51</a>
                    was successful!
                </p>
                <span className='Header-nav__controler__links--dropdown__body__time'>
                    1 hour ago
                </span>
            </li>
            <li className=' flex flex-col w-auto'>
                <p className='Header-nav__controler__links--dropdown__body__text flex items-center'>
                    <svg className='Header-nav__controler__links--dropdown__body__icon' style={{ fill: "red" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z"></path></svg>
                    <a href="#" className='Header-nav__controler__links--dropdown__body__link me-2'>Payment #50</a>
                    failed!
                </p>
                <span className='Header-nav__controler__links--dropdown__body__time'>
                    2 hour ago
                </span>
            </li>
            <li className=' flex flex-col w-auto'>
                <p className='Header-nav__controler__links--dropdown__body__text flex items-center'>
                    <svg className='Header-nav__controler__links--dropdown__body__icon' style={{ fill: "var(--gray-color)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                    <a href="#" className='Header-nav__controler__links--dropdown__body__link me-2'>Example</a>
                    of notification.
                </p>
                <span className='Header-nav__controler__links--dropdown__body__time'>
                    3 hour ago
                </span>
            </li>
            <li className=' flex flex-col w-auto'>
                <p className='Header-nav__controler__links--dropdown__body__text flex items-center'>
                    <svg className='Header-nav__controler__links--dropdown__body__icon' style={{ fill: "purple" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,7h-.35A3.45,3.45,0,0,0,18,5.5a3.49,3.49,0,0,0-6-2.44A3.49,3.49,0,0,0,6,5.5,3.45,3.45,0,0,0,6.35,7H6a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H5v6a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V13h1a1,1,0,0,0,1-1V10A3,3,0,0,0,18,7ZM11,20H8a1,1,0,0,1-1-1V13h4Zm0-9H5V10A1,1,0,0,1,6,9h5Zm0-4H9.5A1.5,1.5,0,1,1,11,5.5Zm2-1.5A1.5,1.5,0,1,1,14.5,7H13ZM17,19a1,1,0,0,1-1,1H13V13h4Zm2-8H13V9h5a1,1,0,0,1,1,1Z"></path></svg>
                    <a href="#" className='Header-nav__controler__links--dropdown__body__link me-2'>You have received</a>
                    a gift!
                </p>
                <span className='Header-nav__controler__links--dropdown__body__time'>
                    1 hour ago
                </span>
            </li>
        </>
    )
}
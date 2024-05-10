import React, { ClassAttributes, DetailedHTMLProps, HTMLAttributes, useContext, useState } from 'react'
import './Header.css'
import { ContextMenu, StateMenuType } from '../../../App'
import { TypeDropDown } from './Header'
import {HeaderLeft} from './HaederLeft/HeaderLeft.tsx'
import {HeaderControler} from './HeaderControler/HeaderControler.tsx'
export const Header: React.FC = () => {
    const [toggleSearch, setToggleSearch] = useState<boolean>(false)
    const StateMenu = useContext<StateMenuType | null>(ContextMenu)
    return (
        <div className='Header-nav flex justify-end xl:static fixed top-0 w-full  '>
            <div className='Header-nav__box--xl relative  transition-all duration-150 flex xl:justify-end justify-end items-center '>
                <header className={`xl:hidden ${toggleSearch?"absolute -translate-y-24":""} transition-all duration-300 absolute left-3 p-5 flex items-center  sidebar__header`}>
                    <img className="h-full sidebar__header__image" src="https://volna.volkovdesign.com/img/logo.svg" title={'logo'} />
                </header>
                <HeaderLeft setToggleSearch={setToggleSearch} toggleSearch={toggleSearch}/>
                <HeaderControler setToggleSearch={setToggleSearch} toggleSearch={toggleSearch}/>
            </div>
        </div>
    )
}

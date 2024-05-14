import React, {useRef} from 'react'
import './Header.css'
import { HeaderLeft } from './HaederLeft/HeaderLeft.tsx'
import { HeaderControler } from './HeaderControler/HeaderControler.tsx'
import {divRefType as divMenuRef , } from '../../../App.tsx';
export interface divRefType {BoxSearch: React.RefObject<HTMLDivElement> | null}

export const Header: React.FC<divMenuRef> = ({DivMenuRef}) => {
    const BoxSearch = useRef<HTMLDivElement | null>(null)
    return (
        <div className='Header-nav flex justify-end xl:static fixed top-0 w-full '>
            <div className='Header-nav__box--xl relative  transition-all duration-150 flex xl:justify-end justify-end items-center '>
                <header className={`xl:hidden   transition-all duration-300 absolute left-3 p-5 flex items-center  sidebar__header`}>
                    <img className="h-full sidebar__header__image" src="https://volna.volkovdesign.com/img/logo.svg" title={'logo'} />
                </header>
                <HeaderLeft BoxSearch={BoxSearch} />
                <HeaderControler BoxSearch={BoxSearch}  DivMenuRef={DivMenuRef} />
            </div>
        </div>
    )
}

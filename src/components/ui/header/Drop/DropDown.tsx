import React from "react"
import './DropDown.css'
import { TypeDropDown } from "../header"
export const DropDown = ({ children , title , href}: TypeDropDown) => {
    return (
        <div className='Header-nav__controler__links--dropdown px-3 py-3 '>
            <div className='Header-nav__controler__links--dropdown__box '>
                <a href={`${href !== "" ? href : "#"}`} className='Header-nav__controler__links--dropdown__header w-full inline-block text-center capitalize'>{title}</a>
                <ul className='Header-nav__controler__links--dropdown__body'>
                    {children}
                </ul>
            </div>
        </div>
    )
}
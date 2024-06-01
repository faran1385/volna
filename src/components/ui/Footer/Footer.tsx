import React from 'react'
import './Footer.css'
import { FooterUP } from './FooterUP/FooterUP'
import { FooterDown } from './FooterDown/FooterDown.tsx'
import './../../../Pages/ResponsivePages.css'
export const Footer : React.FC = () => {
    return (
        <footer className='pages pages--mobile py-8 px-8'>
            <FooterUP/>
            <FooterDown/>
        </footer>
    )
}

import React from 'react'
import './FooterDown.css'
import { LinkIcons } from './LinkIcons'
export const FooterDown = () => {
    return (
        <div className='footer-down flex sm:flex-row flex-col gap-y-6 justify-between items-center pt-10 pb-5'>
            <p className='footer-down__text footer__text '>© Volna, 2021. Created by Dmitry <a className='footer__text  footer__link' href="#">Volkov</a>.</p>
            <LinkIcons/>
        </div>
    )
}

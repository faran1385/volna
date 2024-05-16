import React from 'react'
import './FootrLeft.css'
interface FooterLeftType {
    srcImg: string,
    moreText: string,
    email: string,
    phone: string | number,
    hrefEamli: string,
    hrefPhone: string
}
export const FooterLeft: React.FC<FooterLeftType> = ({ hrefEamli, hrefPhone, srcImg, moreText, email, phone }) => {
    return (
        <div className='footer-up__left xl:w-3/12 sm:w-full flex flex-col gap-y-4 '>
            <img loading='lazy' fetchPriority='low' className=' h-auto w-28' src={srcImg} alt="vodia" />
            <p className=' footer__text'>{moreText}</p>
            <a href={hrefEamli} className='footer__text footer__link flex'>
                <svg className='footer-up__left__icon w-5 h-auto me-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H5A3,2,0,0,0,2,7V17a3,2,0,0,0,2,3H19a3,2,0,0,0,2-3V7A3,2,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,2,0,0,0,4.24,0L20,7.41Z"></path></svg>
                {email}
            </a>
            <a href={hrefPhone} className='footer-up__left__phone footer__text footer__link flex'>
                <svg className='footer-up__left__icon w-5 h-auto me-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,2,0,0,0-2-2.49h-3a3,2,0,0,0-2,2.41A19,19,0,0,0,18.53,21.91l.38,0a3,2,0,0,0,2-.76,2,2,0,0,0,1-2.25v-3A3,2,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"></path></svg>
                {phone}
            </a>
        </div>
    )
}

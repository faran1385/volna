import React from 'react'
import './SupportersItems.css'
interface SupportersItemsType {
    srcImg : string,
    href:string
}
export const SupportersItems : React.FC<SupportersItemsType> = ({srcImg,href}) => {
    return (
        <a href={href}>
            <img loading='lazy' className='supporter__img' src={srcImg} alt='img supporter' />
        </a>
    )
}

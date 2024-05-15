import React from 'react'
import './FooterLinks.css'
interface FooterLinksType {
    title?:string 
    , 
    links : {
        href : string,
        text:string
    }[]
}
export const FooterLinks : React.FC<FooterLinksType> = ({title , links}) => {
    return (
        <div className='footer-up__Links relative xl:w-1/4 lg:w-1/4 sm:w-1/2 w-full  pt-8'>
            <span className='capitalize absolute top-0 z-10 left-0'>{title}</span>
            <ul className='w-full'>
                {
                    links.map((e,index)=>{
                        return(
                            <li key={`footerUpLinks_${index}`} className='w-full block'>
                                <a className='footer__text footer__link capitalize block mt-5' href={e.href}>{e.text}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

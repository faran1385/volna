import React from 'react'
import { TitlePagesType } from './HeadPages'
import './TitlePages.css'
export const TitlePages: React.FC<TitlePagesType> = ({Items}) => {
    return (
        <ul className='head-pages__status flex'>
            {
                Items.map((e, index) => {
                    return (
                        <li className='head-pages__status__item flex items-center relative pe-8 ' key={`headName_${index}`}>
                            {
                                e?.href ?
                                    <>
                                        <a className='head-pages__status__item__text--link head-pages__status__item__text capitalize ' href={e?.href}>{e.text}</a>
                                        <svg className='absolute right-1 head-pages__status__item__icon  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#c0c0c0" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z" /></svg>
                                    </>
                                    :
                                    <span className='head-pages__status__item__text capitalize ms-1'>
                                        {e.text}
                                    </span>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

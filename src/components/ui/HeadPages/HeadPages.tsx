import React from 'react'
export interface TitlePagesType {
    Items: {
        text: string
        href?: string
    }[]
}
interface HeadNameType {
    title:string
}
import './HeadPages.css'
import './TitlePages.css'
import { TitlePages } from './TitlePages'
export const HeadPages: React.FC<HeadNameType & TitlePagesType> = ({ Items , title }) => {
    return (
        <header className='head-pages py-7 px-8'>
            <TitlePages Items={Items}/>
            <h2 className='head-pages__title capitalize'>
                {title}
            </h2>
        </header>
    )
}

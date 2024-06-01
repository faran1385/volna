import React from 'react'
import './HeadPages.css'
import './TitlePages.css'
import {TitlePages} from './TitlePages'

export interface TitlePagesType {
    Items: {
        text: string
        href?: string
    }[]
}

interface HeadNameType {
    title: string
}


export const HeadPages: React.FC<HeadNameType & TitlePagesType> = ({Items, title}) => {
    return (
        <div className='head-pages py-7 px-8'>
            <TitlePages Items={Items}/>
            <div style={{marginTop: "50px"}}>
                <b className='head-pages__title capitalize'>
                    {title}
                </b>
            </div>
        </div>
    )
}

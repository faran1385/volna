import React from 'react'
import {TypeTitle} from './Title.ts'
export const Title = ({title,textLink,href}:TypeTitle) => {
    return (
        <div className='title-card px-4 flex justify-between items-end h-24'>
            <h1 className='text-3xl capitalize'>
                {title}
            </h1>
            <a className='main-link flex items-center ps-4' href={href} hrefLang='en' lang='en'>
                <span className="main-link__text capitalize">{textLink}</span>
                <svg className="main-link__icon ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg>
            </a>
        </div>
    )
}

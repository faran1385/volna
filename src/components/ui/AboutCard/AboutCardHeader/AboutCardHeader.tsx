import React from 'react'
interface AboutCardHeaderType {
    index: number,
    title: string,
    text: string,
    icon?: any,
    backgroundColor?: string,
    Color?: string
}
import './AboutCardHeader.css'
export const AboutCardHeader: React.FC<AboutCardHeaderType> = ({ index, title, text, icon, backgroundColor, Color }) => {
    console.log(icon)
    return (
        <div className={`about-card-header${icon === undefined ? "--border p-5" : ''}  `}>
            <div className={`about-card-header__header flex items-center gap-x-4 mb-3 font-medium`}>
                <span style={{
                    backgroundColor: `${backgroundColor !== undefined ? backgroundColor : ""}`,
                    color: `${Color !== undefined ? Color : ""}`,
                    fill: `${Color !== undefined ? Color : ""}`
                }} className='about-card-header__header__index flex justify-center items-center'>
                    {icon === undefined ?
                        index > 10 ? index : "0" + index
                        :
                        null
                    }
                    {icon !== undefined ?
                        icon
                        :
                        null
                    }
                </span>
                <h4 className='about-card-header__header__title capitalize'>{title}</h4>
            </div>
            <p className='about-card-header__body text-gary '>{text}</p>
        </div>
    )
}

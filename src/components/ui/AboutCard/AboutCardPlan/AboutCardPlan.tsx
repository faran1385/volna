import React from 'react'
interface AboutCardPlanItemsType {
    text: string,
    hasActive: boolean
}
interface AboutCardPlanType {
    title: string,
    color: string,
    price: number,
    items: AboutCardPlanItemsType[]
}
import './AboutCardPlan.css'
export const AboutCardPlan: React.FC<AboutCardPlanType> = ({ title, price, color, items }) => {
    return (
        <div className='about-card-plan p-5'>
            <div className='about-card-plan__header flex flex-col'>
                <span className={`about-card-plan__header__title about-card-plan__header__title--${color}  capitalize mb-4`}>{title}</span>
                <span className='about-card-plan__header__price pb-5 '>${price}<span className='about-card-plan__header__month ps-1'>/month</span></span>
            </div>
            <ul className='about-card-plan__body py-5 flex flex-col gap-y-2'>
                {
                    items.map((e, index) => {
                        return (
                            <li key={`about-card-plan__${index + 1}`} className={`about-card-plan__body__items--${e.hasActive ? "" : "disablad"} flex gap-x-2`}>
                                {
                                    e.hasActive ?
                                        <svg className={`about-card-plan__body__items__icon about-card-plan__body__items__icon--${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"></path></svg>
                                        :
                                        <svg className={`about-card-plan__body__items__icon about-card-plan__body__items__icon--disablad`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                                }
                                {e.text}
                            </li>
                        )
                    })
                }
            </ul>
            <button className={`about-card-plan__footer about-card-plan__footer--${color} uppercase w-full`}>
                select plan
            </button>
        </div>
    )
}

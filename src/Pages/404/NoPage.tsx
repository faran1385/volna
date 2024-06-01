import React from 'react'
import './NoPage.css'
import './../ResponsivePages.css'
import { TitlePages } from '../../components/ui/HeadPages/TitlePages'
export const NoPage: React.FC = () => {
    return (
        <main className='no-pages pages pages--mobile px-8 pt-6'>
            <TitlePages Items={[{ text: 'home', href: "/" }, { text: "404" }]} />
            <div className='flex justify-center items-center my-20'>
                <div className='no-page__card py-10 px-10'>
                    <h3 className='no-page__card__title font-medium text-center'>404</h3>
                    <p className='no-page__card__text text-center pt-3 pb-8'>The page you are looking for not available!</p>
                    <a href='/' className="block py-4 w-full rounded-xl text-center h-auto item__button font-medium uppercase item__button--green item__button--toBlack">
                        <span >go back</span>
                    </a>
                </div>
            </div>
        </main>
    )
}

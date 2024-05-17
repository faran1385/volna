import React from 'react'
import { Title } from '../Title/Title.tsx'
import { ReleasesCards } from './ReleasesCards/ReleasesCards.tsx'
export const Releases : React.FC = () => {
    return (
        <section className='releases px-8'>
            <Title title='new releases' href='#' textLink='see all'/>
            <ReleasesCards/>
        </section>
    )
}

import React from 'react'
import { Title } from '../Title/Title.tsx'
import './Releases.css'
import { ReleasesCards } from './ReleasesCards/ReleasesCards.tsx'
export const Releases : React.FC = () => {
    return (
        <div className='releases '>
            <Title title='new releases' href='#' textLink='see all'/>
            <ReleasesCards/>
        </div>
    )
}

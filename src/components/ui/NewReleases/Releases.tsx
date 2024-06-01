import React from 'react'
import { Title } from '../Title/Title.tsx'
import { ReleasesCards } from './ReleasesCards/ReleasesCards.tsx'
interface PodcastsType{
    TitleText?:string
}
export const Releases: React.FC<PodcastsType> = ({TitleText}) => {
    return (
        <section className='releases px-8'>
            {
                TitleText == undefined ?
                <Title title='new releases' href='./releases' textLink='see all' />
                    :
                    <Title title={`${TitleText}`} href='' textLink='' />
            }
            <ReleasesCards />
        </section>
    )
}

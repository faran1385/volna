import React from 'react'
import './ArtistCard.css'
interface ArtistCardType {
    moreText:string,
    name:string,
    title:string,
    srcImg : string
}
export const ArtistCard: React.FC<ArtistCardType> = ({moreText,name,srcImg,title}) => {
    return (
        <section className='artist-card flex py-8 px-8 md:flex-row flex-col gap-y-3'>
            <img className='artist-card__img me-5' src={srcImg} alt="" />
            <div className='artist-card__texts'>
                <h4 className='artist-card__texts__title'>{title}</h4>
                <h6 className='artist-card__texts__name text-gary'>{name}</h6>
                <p className='text-gary mt-8'>{moreText}</p>
            </div>
        </section>
    )
}

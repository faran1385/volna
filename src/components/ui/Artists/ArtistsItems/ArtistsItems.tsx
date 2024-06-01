import React, { FC } from 'react'
import './ArtistsItems.css'
interface ArtistsType {nameArtists:string, srcImg:string , href:string }
export const ArtistsItems : FC<ArtistsType> = ({nameArtists, srcImg , href }) => {
    return (
        <a href={href} className='artists__Items'>
            <div className='artists__Items__img relative overflow-hidden'>
                <img loading='lazy'  src={srcImg} alt={`artits ${nameArtists}`} />
            </div>
            <h3 className='artists__Items__name text-center py-1 my-2 '>{nameArtists}</h3>
        </a>
    )
}

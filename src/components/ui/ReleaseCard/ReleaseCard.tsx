import React, { useRef } from 'react'
import './Release.css'
import { PlayList } from './PlayList/PlayList'
import { Tiket } from '../Events/Tiket/Tiket'
interface ReleaseCardHeaderType {
    srcImg: string,
    numTrack: number,
    numPlayed: number,
    price: number
}
interface ReleaseCardPlaylistItemsType {
    name: string,
    artist: string,
    srcImg: string,
    hrefArtist: string,
    hrefTrack: string,
    herfAudio: string,
    herfAdd: string,
    herfDownload: string
}
export interface ReleaseCardPlaylistType {
    playlist: ReleaseCardPlaylistItemsType[]
}
export const ReleaseCard: React.FC<ReleaseCardHeaderType & ReleaseCardPlaylistType> = ({ srcImg, numPlayed, numTrack, price, playlist }) => {
    const tiketHandlder = () => {
        // opacity-0 pointer-events-none
        TiketRef?.current?.classList.remove("pointer-events-none")
        TiketRef?.current?.classList.remove("opacity-0")
        TiketRef?.current?.querySelector(".tiket__card")?.classList.add("tiket__card--active")
        document.body.style.overflow = "hidden"
        console.log(12)
    }
    const TiketRef = useRef<HTMLDivElement>(null!)
    return (
        <>
            <Tiket
                TiketRef={TiketRef}
                price={'18.00'}
                titleChange='Buy music album'
            />
            <section className='release-card mx-8  flex md:flex-row flex-col gap-4'>
                <div className='release-card__header flex flex-col gap-4'>
                    <img className="release-card__header__img" src={srcImg} alt="" />
                    <div className='flex justify-between'>
                        <span className='release-card__header__text text-gary  flex gap-2'>
                            <svg className='release-card__header__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path></svg>
                            {numTrack} tracks
                        </span>
                        <span className='release-card__header__text text-gary  flex gap-2'>
                            <svg className='release-card__header__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z"></path></svg>
                            {
                                numPlayed > 1000 ?
                                    <div>
                                        <span className='me-1'>
                                            {(119848 - 119848 % 1000) / 1000}
                                        </span>
                                        <span>
                                            {
                                                19848 % 1000
                                            }
                                        </span>
                                    </div>
                                    :
                                    numPlayed
                            }
                        </span>
                    </div>
                    <button onClick={tiketHandlder} className='contact-form__submit w-full uppercase'>
                        buy album - ${price}
                    </button>
                </div>
                <PlayList playlist={playlist} />
            </section>
        </>
    )
}

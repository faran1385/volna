import React, { useEffect, useRef } from 'react'
import './PlayList.css'
// "https://dl.tiarin.ir/FRE/2022/1/Persian%20Pop%202%20(Tiarin%20Playlist)//01%20Rose%20Wine.mp3"
import { ReleaseCardPlaylistType } from '../ReleaseCard'
import { useDispatch, useSelector } from 'react-redux'
import { setPlayer, setPlaying } from '../../../../app/Player/Player'
import { AppState } from '../../../../app/store'
export const PlayList: React.FC<ReleaseCardPlaylistType> = ({ playlist }) => {
    return (
        <div className='play-list '>
            <ul className='play-list__ul me-2'>
                {
                    playlist.map((e, index) => {
                        return (
                            <li key={`playlist_items_${index + 1}`} className='play-list__item flex items-center justify-between pb-3 mb-3'>
                                <div className='play-list__items__left flex items-center'>
                                    <BtnPlay artist={e.artist} name={e.name} img={e.srcImg} href={e.herfAudio} />
                                    <div className='flex flex-col play-list__items__left__text '>
                                        <a href={e.hrefTrack} className='play-list__items__left__track  play-list__items__left__link capitalize'>
                                            {index + 1}. {e.name}
                                        </a>
                                        <a href={e.hrefArtist} className='play-list__items__left__arstist play-list__items__left__link   text-gary'>
                                            {e.artist}
                                        </a>
                                    </div>
                                </div>
                                <div className='play-list__items__right flex gap-2 sm:gap-4 items-center'>
                                    {/* add  */}
                                    <a href={e.herfAdd} className='play-list__items__right__btn play-list__items__right__btn--green flex justify-center items-center'>
                                        <svg className='play-list__items__right__btn__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path></svg>
                                    </a>
                                    {/* download  */}
                                    <a href={e.herfDownload} className='play-list__items__right__btn play-list__items__right__btn--purple flex justify-center items-center'>
                                        <svg className='play-list__items__right__btn__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path></svg>
                                    </a>
                                    {/* time  */}
                                    <Audio herf={e.herfAudio} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
interface BtnPlayType {
    img: string,
    name: string,
    href: string,
    artist: string
}

const BtnPlay: React.FC<BtnPlayType> = ({ artist, href, img, name }) => {
    const dispatch = useDispatch()
    const PlayerItems = useSelector((state: AppState) => state.player)
    const hadlerPlay = () => {
        dispatch(
            setPlaying({
                paused: !PlayerItems.paused
            })
        )
        if (PlayerItems.paused === false) {
            console.log(href)
            dispatch(setPlayer({
                href: href
                , img: img
                , name: name
                , singer: artist
            }))
        }
    }
    return (
        <button className='relative me-3 play-list__items__left__btn' onClick={() => hadlerPlay()}>
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute play-list__items__left__icon' viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
            <img loading='lazy' className='play-list__items__left__img ' src={img} alt="" />
        </button>
    )
}
const Audio = ({ herf } : {herf:string}) => {
    const AudioRef = useRef<HTMLAudioElement | null>(null)
    const SpanRef = useRef<HTMLAudioElement | null>(null)
    const AudioDuration = (e: any) => {
        if (e !== null && SpanRef && SpanRef.current) {
            const seconds = Math.floor(e.target.duration % 60);
            const minutes = Math.floor(e.target.duration / 60);
            SpanRef.current.innerHTML = `
            ${minutes}:${seconds}
            `
        }
    }
    return (
        <>
            <audio ref={AudioRef} onLoadedData={(e) => AudioDuration(e)} src={herf}></audio>
            <span ref={SpanRef} className='play-list__items__right__time'>0:00</span>
        </>
    )
}
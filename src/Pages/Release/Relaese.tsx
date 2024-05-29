import React from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import "./Release.css"
import { ReleaseCard } from '../../components/ui/ReleaseCard/ReleaseCard'
import { Shares } from '../../components/ui/Shares/Shares'
import { Comments } from '../../components/ui/Comments/Comments'
export const Relaese: React.FC = () => {
    return (
        <main className='pages pages--mobile'>
            <HeadPages title='Jason Aldean – Space Melody' Items={[{ text: "home", href: "/" }, { text: "releases", href: "./releases" }, { text: "release" }]} />
            <ReleaseCard
                srcImg='https://volna.volkovdesign.com/img/covers/cover3.jpg'
                numPlayed={19539}
                price={14}
                numTrack={10}
                playlist={
                    [
                        {
                            artist: "Jason Aldean",
                            name: 'Got What I Got',
                            herfAdd: '#',
                            herfDownload: '#',
                            hrefArtist: '#',
                            hrefTrack: '#',
                            srcImg: 'https://volna.volkovdesign.com/img/covers/cover.svg',
                            herfAudio: 'https://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3',
                        },
                        {
                            artist: "Jason Aldean",
                            name: 'Got What I Got',
                            herfAdd: '#',
                            herfDownload: '#',
                            hrefArtist: '#',
                            hrefTrack: '#',
                            srcImg: 'https://volna.volkovdesign.com/img/covers/cover.svg',
                            herfAudio: 'https://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3',
                        },
                        {
                            artist: "Jason Aldean",
                            name: 'Got What I Got',
                            herfAdd: '#',
                            herfDownload: '#',
                            hrefArtist: '#',
                            hrefTrack: '#',
                            srcImg: 'https://volna.volkovdesign.com/img/covers/cover.svg',
                            herfAudio: 'https://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3',
                        },
                        {
                            artist: "Jason Aldean",
                            name: 'Got What I Got',
                            herfAdd: '#',
                            herfDownload: '#',
                            hrefArtist: '#',
                            hrefTrack: '#',
                            srcImg: 'https://volna.volkovdesign.com/img/covers/cover.svg',
                            herfAudio: 'https://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3',
                        },
                        {
                            artist: "Jason Aldean",
                            name: 'Supalonely',
                            herfAdd: '#',
                            herfDownload: '#',
                            hrefArtist: '#',
                            hrefTrack: '#',
                            srcImg: 'https://volna.volkovdesign.com/img/covers/cover.svg',
                            herfAudio: 'https://dl.tiarin.ir/FRE/2022/1/Persian%20Pop%202%20(Tiarin%20Playlist)//02%20Behtar%20Az%20Mane.mp3',
                        },
                    ]
                }
            />
            <section className='px-8 mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className=' lg:col-start-1 lg:col-end-3'>
                    <section className='pb-12 mb-12 release-border'>
                        <h3 className='release__title capitalize mb-4'>About new album</h3>
                        <p className='text-gary'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have <a href="#" className='about-link'>suffered</a> alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className='text-gary pt-4'>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Shares classBox='px-0 py-4' />
                    </section>
                    <Comments 
                    name='release'
                    items={[
                        {
                            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                            date:'30.08.2021, 17:53',
                            name:'John Doe',
                            srcImg:"https://volna.volkovdesign.com/img/avatar.svg",
                            dislike:7,
                            like:12,
                            replay:-1
                        },
                        {
                            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                            date:'30.08.2021, 17:53',
                            name:'John Doe',
                            srcImg:"https://volna.volkovdesign.com/img/avatar.svg",
                            dislike:7,
                            like:12,
                            replay:0
                        },
                        {
                            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                            date:'30.08.2021, 17:53',
                            name:'John Doe',
                            srcImg:"https://volna.volkovdesign.com/img/avatar.svg",
                            dislike:7,
                            like:12,
                            replay:-1
                        },
                    ]} />
                </div>
                <div className='lg:col-start-3 lg:col-end-4'>
                    <h3 className='release__title capitalize mb-4'>Other releases</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4'>
                        <div className='releases__cards__card  flex flex-col items-center'>
                            <div className='releases__cards__card__header relative'>

                                <img loading='lazy' className='releases__cards__card__header__img absolute' src={'https://volna.volkovdesign.com/img/covers/cover1.jpg'} title='music play' />
                                <div className='releases__cards__card__header__text absolute lg:hidden bottom-5 sm:flex hidden gap-x-3 items-center '>
                                    <span className='flex items-center flex-row-reverse'>13 <svg className='releases__cards__card__header__text__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg> </span>
                                    <span className='flex items-center flex-row-reverse uppercase'>140K <svg className='releases__cards__card__header__text__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z"></path></svg> </span>
                                </div>
                                <a href={'#'} title={'play'} className='releases__cards__card__header__link flex justify-center items-center absolute '>
                                    <svg className='releases__cards__card__header__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
                                </a>
                            </div>
                            <div className='releases__cards__card__body mt-2 flex flex-col items-center text-ellipsis overflow-hidden w-full '>
                                <a href='#' className='releases__cards__card__body__name capitalize text-center'>Space Melody</a>
                                <span className='releases__cards__card__body__artist text-center'>
                                    <a href='#' className=' capitalize'>VIZE</a>
                                    &
                                    <a href='#' className=' capitalize'>Alan Walker</a>
                                    &
                                    <a href='#' className=' capitalize'>Leony</a>
                                </span>
                            </div>
                        </div>
                        <div className='releases__cards__card flex flex-col items-center'>
                            <div className='releases__cards__card__header relative'>

                                <img loading='lazy' className='releases__cards__card__header__img absolute' src={'https://volna.volkovdesign.com/img/covers/cover2.jpg'} title='music play' />
                                <div className='releases__cards__card__header__text absolute lg:hidden bottom-5 sm:flex hidden gap-x-3 items-center '>
                                    <span className='flex items-center flex-row-reverse'>13 <svg className='releases__cards__card__header__text__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg> </span>
                                    <span className='flex items-center flex-row-reverse uppercase'>140K <svg className='releases__cards__card__header__text__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z"></path></svg> </span>
                                </div>
                                <a href={'#'} title={'play'} className='releases__cards__card__header__link z-10 flex justify-center items-center absolute '>
                                    <svg className='releases__cards__card__header__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
                                </a>
                            </div>
                            <div className='releases__cards__card__body mt-2 flex flex-col items-center text-ellipsis overflow-hidden w-full '>
                                <a href='#' className='releases__cards__card__body__name capitalize text-center'>Said Sum</a>
                                <span className='releases__cards__card__body__artist text-center'>
                                    <a href='#' className=' capitalize'>Moneybagg</a>
                                </span>
                            </div>
                        </div>
                        <div className='releases__cards__card flex flex-col items-center'>
                            <div className='releases__cards__card__header relative'>

                                <img loading='lazy' className='releases__cards__card__header__img absolute' src={'https://volna.volkovdesign.com/img/covers/cover3.jpg'} title='music play' />
                                <div className='releases__cards__card__header__text absolute lg:hidden bottom-5 sm:flex hidden gap-x-3 items-center '>
                                    <span className='flex items-center flex-row-reverse'>13 <svg className='releases__cards__card__header__text__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg> </span>
                                    <span className='flex items-center flex-row-reverse uppercase'>140K <svg className='releases__cards__card__header__text__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z"></path></svg> </span>
                                </div>
                                <a href={'#'} title={'play'} className='releases__cards__card__header__link z-10 flex justify-center items-center absolute '>
                                    <svg className='releases__cards__card__header__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
                                </a>
                            </div>
                            <div className='releases__cards__card__body mt-2 flex flex-col items-center text-ellipsis overflow-hidden w-full '>
                                <a href='#' className='releases__cards__card__body__name capitalize text-center'>I Love My Country</a>
                                <span className='releases__cards__card__body__artist text-center'>
                                    <a href='#' className=' capitalize'>Florida Georgia</a>
                                </span>
                            </div>
                        </div>
                        <div className='releases__cards__card flex flex-col items-center'>
                            <div className='releases__cards__card__header relative'>

                                <img loading='lazy' className='releases__cards__card__header__img absolute' src={'https://volna.volkovdesign.com/img/covers/cover4.jpg'} title='music play' />
                                <div className='releases__cards__card__header__text absolute lg:hidden bottom-5 sm:flex hidden gap-x-3 items-center '>
                                    <span className='flex items-center flex-row-reverse'>13 <svg className='releases__cards__card__header__text__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path></svg> </span>
                                    <span className='flex items-center flex-row-reverse uppercase'>140K <svg className='releases__cards__card__header__text__icon ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z"></path></svg> </span>
                                </div>
                                <a href={'#'} title={'play'} className='releases__cards__card__header__link z-10 flex justify-center items-center absolute '>
                                    <svg className='releases__cards__card__header__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
                                </a>
                            </div>
                            <div className='releases__cards__card__body mt-2 flex flex-col items-center text-ellipsis overflow-hidden w-full '>
                                <a href='#' className='releases__cards__card__body__name capitalize text-center'>Toosie Slide</a>
                                <span className='releases__cards__card__body__artist text-center'>
                                    <a href='#' className=' capitalize'>Drake</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

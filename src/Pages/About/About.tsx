import React, { useState } from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import './About.css'
import { AboutCardHeader } from '../../components/ui/AboutCard/AboutCardHeader/AboutCardHeader'
export const About: React.FC = () => {
    const [HeaderCard, setHeaderCard] = useState(
        [
            {
                text: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
                title: "Create an account"
            },
            {
                text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first",
                title: "Choose your plant"
            },
            {
                text: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
                title: "Enjoy Volna music"
            },
        ]
    )
    const [SubCard, setSubCard] = useState(
        [
            {
                text: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
                title: "Instant conclusion",
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"></path></svg>,
                backgroundColor : "rgba(47, 128, 237, 0.15)",
                Color : "#2f80ed",
            },
            {
                text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
                title: "Choose your plan",
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path></svg>,
                backgroundColor : "rgba(235, 87, 87, 0.15)",
                Color : "#eb5757",
            },
            {
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
                title: "Create an account",
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,2H10A3,3,0,0,0,7,5v7a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V5A3,3,0,0,0,20,2Zm1,10a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1H20a1,1,0,0,1,1,1ZM17.5,8a1.49,1.49,0,0,0-1,.39,1.5,1.5,0,1,0,0,2.22A1.5,1.5,0,1,0,17.5,8ZM16,17a1,1,0,0,0-1,1v1a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V15H4a1,1,0,0,0,0-2H3V12a1,1,0,0,1,1-1A1,1,0,0,0,4,9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H14a3,3,0,0,0,3-3V18A1,1,0,0,0,16,17ZM6,18H7a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Z"></path></svg>,
                backgroundColor : "rgba(128, 81, 212, 0.15)",
                Color : "#8051d4",
            },
            {
                text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
                title: "Enjoy Blast music",
                icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path></svg>,
                backgroundColor : "",
                Color : "",
            },
        ]
    )
    return (
        <main className='contacts pages pages--mobile'>
            <HeadPages title='Online music HTML Template' Items={[{ text: "home", href: "/" }, { text: "about" }]} />
            <p className='text-gary px-8 mb-8'>
                Many desktop publishing packages and <a href="#" className='about-link'>web page</a> editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <p className='text-gary px-8 mb-8'>
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
            <ul className='grid grid-cols-1 lg:grid-cols-3 px-8 mb-8 gap-6'>
                {
                    HeaderCard.map((e, index) => {
                        return (
                            <li key={`header__abdout__cards__${index + 1}`}>
                                <AboutCardHeader index={index + 1} text={e.text} title={e.title} />
                            </li>
                        )
                    })
                }
            </ul>
            <div className='flex justify-center mb-16'>
                <a href="#" className='rounded-xl mt-3 me-5  md:me-6 flex items-center justify-center text-center item__button font-medium uppercase item__button--green item__button--toBlack'>
                    sign in
                </a>
            </div>
            <h3 className='about-title px-8 mb-5'>
                Subscribe features
            </h3>
            <p className='text-gary px-8 mb-5'>
                Many desktop publishing packages and <a href="#" className='about-link'>web page</a> editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 mb-8 gap-6'>
                {
                    SubCard.map((e,index)=>{
                        return(
                            <li  key={`sub__about__card__${index}`}>
                                <AboutCardHeader index={0} text={e.text} title={e.title} icon={e.icon} Color={e.Color} backgroundColor={e.backgroundColor}/>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

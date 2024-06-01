import React from 'react'
import './FooterUp.css'
import { FooterLeft } from './FooterLeft/FooterLeft.tsx'
import { FooterLinks } from './FooterLinks/FooterLinks.tsx'
export const FooterUP : React.FC = () => {
    return (
        <div className='footer-up flex  sm:flex-col-reverse xl:flex-row xl:justify-between flex-col-reverse sm:pb-12 pb-12'>
            <FooterLeft 
                moreText='Record Label & Internet Radio,
                Online music HTML Template.' 
                srcImg='https://volna.volkovdesign.com/img/logo.svg' 
                phone={'8 234 567-89-00'} 
                email='support@volna.template'
                hrefEamli='#'
                hrefPhone='#'
            />
            <div className='xl:w-8/12 sm:w-full sm:gap-y-10 sm:my-8 my-9 xl:my-0 gap-y-8 flex flex-wrap '>
                <FooterLinks
                    title='The Volna'
                    links={
                        [
                            {text:'About',href:'./about'},
                            {text:'My profile',href:'#'},
                            {text:'Pricing plans',href:'#'},
                            {text:'Contacts',href:'#'},
                        ]
                    }
                />
                <FooterLinks
                    title='Browse'
                    links={
                        [
                            {text:'Artists',href:'./artists'},
                            {text:'Releases',href:'./releases'},
                            {text:'Events',href:'./events'},
                            {text:'Podcasts',href:'./podcasts'},
                        ]
                    }
                />
                <FooterLinks
                    links={
                        [
                            {text:'News',href:'./news'},
                            {text:'Store',href:'./store'},
                            {text:'Music',href:'#'},
                            {text:'Video',href:'#'},
                        ]
                    }
                />
                <FooterLinks
                    title='help'
                    links={
                        [
                            {text:'Account & Billing',href:'#'},
                            {text:'Plans & Pricing',href:'#'},
                            {text:'Supported devices',href:'#'},
                            {text:'Accessibility',href:'#'},
                        ]
                    }
                />
            </div>
        </div>
    )
}

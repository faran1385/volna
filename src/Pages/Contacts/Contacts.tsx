import React from 'react'
import './Contacts.css'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { LinkIcons } from '../../components/ui/Footer/FooterDown/LinkIcons'
import { ContactForm } from '../../components/ui/ContactForm/ContactForm'
import { Supporters } from '../../components/ui/Supporters/Supporters'
export const Contacts: React.FC = () => {
    return (
        <main className='contacts pages pages--mobile'>
            <HeadPages title='contacts' Items={[{ text: "home", href: "/" }, { text: "contacts" }]} />
            <div className='contacts__body grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 py-8'>
                <ContactForm />
                <div className='contacts__body__into lg:col-start-3 lg:col-end-4'>
                    <h3 className='contacts__body__into__header'>into</h3>
                    <p className='contacts__body__into__text mt-5 mb-8'>It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    <div className='flex flex-col'>
                        <a href="#" className='contacts__body__into__links'><span>8 800 234-56-78</span></a>
                        <a href="#" className='contacts__body__into__links my-5'><span>support@volna.template</span></a>
                        <a href="#" className='contacts__body__into__links mb-6'><address>221B Baker St, Marylebone, London</address></a>
                    </div>
                    <div className='flex justify-center'>
                        <LinkIcons />
                    </div>
                </div>
            </div>
            <Supporters />
        </main>
    )
}

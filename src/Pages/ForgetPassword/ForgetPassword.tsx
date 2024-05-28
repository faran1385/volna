import React from 'react'
import { TitlePages } from '../../components/ui/HeadPages/TitlePages'
import { InputForm } from '../../components/ui/InputForm/InputForm'
import './ForgetPassword.css'
export const ForgetPassword: React.FC = () => {
    return (
        <main className='forget-password pages pages--mobile'>
            <section className='pt-7 px-8'>
                <TitlePages Items={[{ text: "home", href: "/" }, { text: 'Restore password' }]} />
            </section>
            <section className='pt-10 pb-24 flex justify-center'>
                <form className='forget-password__card card--border w-11/12 sm:w-8/12 lg:w-5/12 flex flex-col py-8 gap-y-5'>
                    <div className='flex justify-center'>
                        <img src="https://volna.volkovdesign.com/img/logo.svg" alt="" />
                    </div>
                    <InputForm placeholder='Email' />
                    <label className='forget-password__card__check relative ps-9 text-sm sm:text-base' htmlFor='privacy'>
                        <input className='hidden' type="checkbox" id="privacy" />
                        <span className='forget-password__checked__box absolute left-0 flex justify-center items-center'>
                            <svg className='forget-password__checked__box__tik' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                        </span>
                        I agree to the <a href="./privacy" className='about-link'>Privacy Policy</a>
                    </label>
                    <button type='submit' className='contact-form__submit w-full uppercase'>
                        sent
                    </button>
                    <span className='text-sm text-center text-xs sm:text-base'>We will send a password to your Email</span>
                </form>
            </section>
        </main>
    )
}

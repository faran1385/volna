import React from 'react'
import { InputForm } from '../InputForm/InputForm'
interface FormInputType {
    plaplaceholder: string,
    class?: string
}
interface FormType {
    inputs: FormInputType[]
    checkBox: {
        text?: string
        name: string
    },
    btnText: string,
    footer: React.ReactNode,
    orSign?: boolean
}
import './Form.css'
export const Form: React.FC<FormType> = ({ btnText, checkBox, footer, inputs, orSign }) => {
    return (
        <form className='form__card card--border w-11/12 sm:w-8/12 lg:w-5/12 flex flex-col py-8 gap-y-5'>
            <div className='flex justify-center'>
                <img src="https://volna.volkovdesign.com/img/logo.svg" alt="" />
            </div>
            <ul>
                {
                    inputs.map((e, index) => {
                        return (
                            <li key={index} className='my-3'>
                                <InputForm placeholder={e.plaplaceholder} classInput={e.class ? e.class : ''} />
                            </li>
                        )
                    })
                }
            </ul>
            <label className='form__card__check relative ps-9 text-sm sm:text-base text-gary' htmlFor={checkBox.name}>
                <input className='hidden' type="checkbox" id={checkBox.name} />
                <span className='form__checked__box absolute left-0 flex justify-center items-center'>
                    <svg className='form__checked__box__tik' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </span>
                {
                    checkBox.text ?
                        checkBox.text
                        :
                        <>
                            I agree to the <a href="./privacy" className='about-link'>Privacy Policy</a>
                        </>
                }
            </label>
            <button type='submit' className='contact-form__submit w-full uppercase'>
                {btnText}
            </button>
            {
                orSign ?
                    <>
                        <span className='text-center'>
                            or
                        </span>
                        <ul className='sign-or grid grid-cols-3 gap-3'>
                            <li className='sign-or__items'>
                                <a href="#" title='facebook' className='sign-or__items__link sign-or__items__link--fb w-full flex justify-center items-center'>
                                    <svg className='sign-or__items__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                                </a>
                            </li>
                            <li className='sign-or__items'>
                                <a href="#" title='tewtter' className='sign-or__items__link sign-or__items__link--tw w-full flex justify-center items-center'>
                                    <svg className='sign-or__items__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                                </a>
                            </li>
                            <li className='sign-or__items'>
                                <a href="#" title='google' className='sign-or__items__link sign-or__items__link--gl w-full flex justify-center items-center'>
                                    <svg className='sign-or__items__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                                </a>
                            </li>
                        </ul>
                    </>
                    :
                    null
            }
            {
                footer
            }
        </form>
    )
}

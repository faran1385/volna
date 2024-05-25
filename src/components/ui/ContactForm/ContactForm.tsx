import React from 'react'
import './ContactForm.css'
import { InputForm } from '../InputForm/InputForm'
export const ContactForm : React.FC = () => {
    return (
        <form className='contact-form grid grid-cols-2 col-start-1 col-end-3 py-6 px-6 gap-5'>
            <InputForm classInput='col-start-1 col-end-3 sm:col-span-1' placeholder='name'/>
            <InputForm classInput='col-start-1 col-end-3 sm:col-span-1' placeholder='eamil'/>
            <InputForm classInput='col-start-1 col-end-3' placeholder='subject'/>
            <InputForm classTextarea='col-start-1 col-end-3' hasTextarea placeholder='Type your message'/>
            <button className='contact-form__submit xl:w-40 w-full capitalize sm:col-span-1 col-start-1 col-end-3' type="submit">
                send
            </button>
        </form>
    )
}

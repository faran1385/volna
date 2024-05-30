import React from 'react'
import { TitlePages } from '../../components/ui/HeadPages/TitlePages'

import { Form } from '../../components/ui/Form/Form'
export const ForgetPassword: React.FC = () => {
    return (
        <main className='form pages pages--mobile'>
            <section className='pt-7 px-8'>
                <TitlePages Items={[{ text: "home", href: "/" }, { text: 'Restore password' }]} />
            </section>
            <section className='pt-10 pb-24 flex justify-center'>
                <Form
                    btnText='sent'
                    checkBox={
                        { name: 'privacy-1' }
                    }
                    inputs={[
                        { plaplaceholder: 'email' , class:'w-full' }
                    ]}
                    footer={
                        <>
                            <span className='text-center text-xs sm:text-base'>We will send a password to your Email</span>
                        </>
                    }

                />
            </section>
        </main>
    )
}

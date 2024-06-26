import React from 'react'
import './SignUp.css'
import { Form } from '../../components/ui/Form/Form'
import { TitlePages } from '../../components/ui/HeadPages/TitlePages'
export const SignUp: React.FC = () => {
    return (
        <main className='cart pages pages--mobile'>
            <section className='pt-7 px-8'>
                <TitlePages Items={[{ text: "home", href: "/" }, { text: 'sign up' }]} />
            </section>
            <section className='flex justify-center pt-10 pb-24 '>
                <Form
                    btnText='sign up'
                    checkBox={{ name: 'privecy' }}
                    inputs={
                        [
                            { plaplaceholder: 'email', class: 'w-full' },
                            { plaplaceholder: 'password', class: 'w-full' },
                        ]
                    }
                    footer={
                        <>
                            <span className='text-center text-xs sm:text-base pe-2'>Already have an account? <a href="./sign-in" className='capitalize about-link'>sing in</a></span>
                        </>
                    }
                    orSign
                />
            </section>
        </main>
    )
}

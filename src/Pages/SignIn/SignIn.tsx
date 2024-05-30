import React from 'react'
import { TitlePages } from '../../components/ui/HeadPages/TitlePages'
import { Form } from '../../components/ui/Form/Form'

export const SignIn: React.FC = () => {
    return (
        <main className='cart pages pages--mobile'>
            <section className='pt-7 px-8'>
                <TitlePages Items={[{ text: "home", href: "/" }, { text: 'sign in' }]} />
            </section>
            <section className='flex justify-center pt-10 pb-24 '>
                <Form
                    btnText='sign in'
                    checkBox={{ name: 'privecy',text:'Remember Me' }}
                    inputs={
                        [
                            { plaplaceholder: 'name', class: 'w-full' },
                            { plaplaceholder: 'email', class: 'w-full' },
                            { plaplaceholder: 'password', class: 'w-full' },
                        ]
                    }
                    footer={
                        <>
                            <span className='text-sm text-center text-xs sm:text-base pe-2'>Don't have an account?<a href="./sign-up" className='capitalize about-link'>sing up</a></span>
                            <a href="./forgetpassword" className='about-link text-center'>forget password</a>
                        </>
                    }
                    orSign
                />
            </section>
        </main>
    )
}

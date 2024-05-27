import React from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { Supporters } from '../../components/ui/Supporters/Supporters'

export const Cart: React.FC = () => {
    return (
        <main className='cart pages pages--mobile'>
            <HeadPages title='cart' Items={[{ text: "home", href: "/" }, { text: "cart" }]} />
            <Supporters/>
        </main>
    )
}

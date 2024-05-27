import React from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { Supporters } from '../../components/ui/Supporters/Supporters'
import './Cart.css'
import { CheckoutCart } from '../../components/ui/CheckoutCart/CheckoutCart'
export const Cart: React.FC = () => {
    return (
        <main className='cart pages pages--mobile'>
            <HeadPages title='cart' Items={[{ text: "home", href: "/" }, { text: "cart" }]} />
            <div className='grid grid-cols-1 xl:grid-cols-3 px-8'>
                <CheckoutCart/>
            </div>
            <Supporters/>
        </main>
    )
}

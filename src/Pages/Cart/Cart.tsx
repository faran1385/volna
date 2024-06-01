import React from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { Supporters } from '../../components/ui/Supporters/Supporters'
import './Cart.css'
import { CheckoutCart } from '../../components/ui/CheckoutCart/CheckoutCart'
import { ProductsCart } from '../../components/ui/ProductsCart/ProductsCart'
export const Cart: React.FC = () => {
    return (
        <main className='cart pages pages--mobile'>
            <HeadPages title='cart' Items={[{ text: "home", href: "/" }, { text: "cart" }]} />
            <div className='grid grid-cols-1 xl:grid-cols-3 px-8 gap-6'>
                <ProductsCart/>
                <CheckoutCart/>
            </div>
            <Supporters/>
        </main>
    )
}

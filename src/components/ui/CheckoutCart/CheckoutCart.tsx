import React from 'react'
import { InputForm } from '../InputForm/InputForm'
import './../../../Pages/About/About.css'
import './CheckoutCart.css'
export const CheckoutCart: React.FC = () => {
    return (
        <form className='chechout-cart xl:col-start-3 xl:col-span-4 card--border'>
            <h3 className='capitalize'>Checkout</h3>
            <div className='flex flex-col gap-y-4 py-4'>
                <InputForm placeholder='john deo' />
                <InputForm placeholder='JohnDeo@email.com' />
                <InputForm placeholder='+1 234 5667-89-00' />
            </div>
            <span className='text-gary text-sm'>Payment method:</span>
            <div className='flex flex-col gap-y-6 py-3 chechout-cart__radiobox'>
                <label className='capitalize chechout-cart__radiobox__radioitems relative cursor-pointer'>
                    <input className='hidden' type="radio" name='method' />
                    <span className='chechout-cart__radio absolute top-0 left-0 rounded-full '></span>
                    <span className='chechout-cart__text ps-7'>visa</span>
                </label>
                <label className='capitalize chechout-cart__radiobox__radioitems relative cursor-pointer'>
                    <input className='hidden' type="radio" name='method' />
                    <span className='chechout-cart__radio absolute top-0 left-0 rounded-full '></span>
                    <span className='chechout-cart__text ps-7'>Mastercard</span>
                </label>
                <label className='capitalize chechout-cart__radiobox__radioitems relative cursor-pointer'>
                    <input className='hidden' type="radio" name='method' />
                    <span className='chechout-cart__radio absolute top-0 left-0 rounded-full '></span>
                    <span className='chechout-cart__text ps-7'>Paypal</span>
                </label>
            </div>
            <p className='text-xs mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <button className='cart-btn' type='submit'>
                Complete
            </button>
        </form>
    )
}

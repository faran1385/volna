import React, { RefObject, useEffect, useRef, useState } from 'react'
interface TiketType {
    TiketRef: RefObject<HTMLDivElement> | null,
    price?: number | string,
    titleChange?: string
}
import './Tiket.css'
export const Tiket: React.FC<TiketType> = ({ TiketRef, price, titleChange }) => {
    const closeHandler = () => {
        TiketRef?.current?.classList.add("pointer-events-none")
        TiketRef?.current?.classList.add("opacity-0")
        TiketRef?.current?.querySelector(".tiket__card")?.classList.remove("tiket__card--active")
        document.body.style.overflow = "auto"
    }
    return (
        <div ref={TiketRef} className='tiket opacity-0 pointer-events-none transition-all duration-500 fixed z-50 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-gray-700 bg-opacity-45'>
            <form className='tiket__card transition-all duration-500'>
                <div className='tiket__card__header flex justify-between items-center mb-3'>
                    <h3 className='tiket__card__header__tilte capitalize'>
                        {
                            titleChange !== undefined ?
                                titleChange
                                :
                                'To buy tickets'
                        }
                    </h3>
                    <button type='button' className='tiket__card__header__close' onClick={closeHandler} title='close'>
                        <svg className='tiket__card__header__close__icon w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                    </button>
                </div>
                <div className={`tiket__card__body ${price !== undefined ? "flex flex-col gap-3" : ""}`}>
                    <span className='tiket__card__body__balance '>
                        Your balance: <b>$90.99</b>
                    </span>
                    {
                        price === undefined ?
                            <div className='tiket__card__body__type flex flex-col mt-3'>
                                <label className='tiket__card__body__type__labal' htmlFor="tiket_type">Choose ticket:</label>
                                <SelectItem />
                            </div>
                            :
                            <span className='tiket__card__body__balance '>
                                Your balance: <b>${price}</b>
                            </span>
                    }
                    <p className='tiket__card__body__more mt-4 sm:block hidden'>
                        You can spend money from your account on the renewal of the connected packages, or on the purchase of goods on our website.
                    </p>
                </div>
                <div className='tiket__card__footer mt-8'>
                    <button className='tiket__card__footer__submit uppercase w-full py-3' type='submit'>
                        buy
                    </button>
                </div>
            </form>
        </div>
    )
}

const SelectItem = () => {
    const SelectText = useRef<HTMLSpanElement>(null!)
    const handler = (e: any) => {
        SelectText.current.textContent = e.target.value
    }
    return (
        <div className='tiket-type mt-2 relative'>
            <select onChange={handler} className='tiket-type__select absolute top-0 left-0 right-0 bottom-0 opacity-0' name="" id="tiket_type" defaultValue='regular - $49' >
                <option value="regular - $49" >regular - $49</option>
                <option value="vip light - $99">vip light - $99</option>
                <option value="vip - $169">vip - $169</option>
            </select>
            <button className='tiket-type__btn w-full flex justify-between py-3 px-5' type='button'>
                <span ref={SelectText} className='capitalize'>regular - $49</span>
                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25a56a" ><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" /></svg>
            </button>

        </div>
    )
}
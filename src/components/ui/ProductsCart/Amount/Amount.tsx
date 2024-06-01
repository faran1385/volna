import React from 'react'
import './Amount.css'
interface AmountType {
    count : number
}
export const Amount: React.FC<AmountType> = ({count}) => {
    return (
        <form className='amount flex'>
            <button type='submit' className='amount__btn'>
                <svg xmlns="http://www.w3.org/2000/svg" className='amount__btn__icon' viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path></svg>
            </button>
            <input className='amount__input' type="text" value={count}/>
            <button type='submit' className='amount__btn'>
                <svg xmlns="http://www.w3.org/2000/svg" className='amount__btn__icon' viewBox="0 0 24 24"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path></svg>
            </button>
        </form>
    )
}

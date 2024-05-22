import React from 'react'

export const BtnGreen : React.FC<{children : string}> = ({children}) => {
    return (
        <div className='w-full flex justify-center'>
            <button className='rounded-xl mt-3 me-5  md:me-6 flex items-center justify-center text-center item__button font-medium uppercase item__button--green item__button--toBlack'>
                {children}
            </button>
        </div>
    )
}

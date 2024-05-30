import React from 'react'
interface BtnGreenType {
    children: string,
    classBox?: string,
    hasTagLink?: string

}
export const BtnGreen: React.FC<BtnGreenType> = ({ children, classBox, hasTagLink }) => {
    return (
        <div className={`w-full flex  ${classBox ? classBox : 'justify-center'}`}>
            {
                hasTagLink ?
                    <a href={hasTagLink} className="rounded-xl mt-3 me-5  md:me-6 flex items-center justify-center text-center item__button font-medium uppercase item__button--green item__button--toBlack">
                        {children}
                    </a>
                    :
                    <button className='rounded-xl mt-3 me-5  md:me-6 flex items-center justify-center text-center item__button font-medium uppercase item__button--green item__button--toBlack'>
                        {children}
                    </button>
            }
        </div>
    )
}

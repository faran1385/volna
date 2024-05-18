import React from 'react'
import './ProductItems.css'
interface ProductItemsType {
    name: string,
    price: number | string,
    srcImg: string,
    href: string,
    hasNew?: boolean
}
export const ProductItems: React.FC<ProductItemsType> = ({ name, price, srcImg, href, hasNew }) => {
    return (
        <div className={`products__items ${hasNew ? "products__items--active" : ''} overflow-hidden`}>
            <div className='products__items__header relative overflow-hidden'>
                <img src={srcImg} className='products__items__header__img' loading='lazy' title={`product ${name}`} />
                <a href={href} className='products__items__header__play flex justify-center items-center absolute z-10'>
                    <svg className='products__items__header__play__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path></svg>
                </a>
            </div>
            <div className='products__items__footer relative flex flex-col mt-4'>
                <a href={href} className='products__items__footer__name block w-full overflow-hidden capitalize'>{name}</a>
                <span className='products__items__footer__price'>${price}</span>
                <span className='products__items__footer__new absolute z-10 bottom-0 right-0 capitalize'>new</span>
            </div>
        </div>
    )
}

import React from 'react'
import './ProductsCartItems.css'
import { Amount } from '../Amount/Amount'
interface ProductsCartItemsType {
    srcImg : string,
    hrefProduct : string,
    textProduct:string,
    count:number,
    priceNow:number,
    priceDel:number
}
export const ProductsCartItems : React.FC<ProductsCartItemsType>= ({count,hrefProduct,priceDel,priceNow,srcImg,textProduct}) => {
    return (
        <>
            <td>
                <img src={srcImg} alt="" className='products-items__img' />
            </td>
            <td className='products-items__title'>
                <a href={hrefProduct} className='products-items__links'>
                    {textProduct}
                </a>
            </td>
            <td>
                <Amount count={count}/>
            </td>
            <td>
                <span className='products-items__price font-semibold text-gary'>${priceNow} {priceDel != 0 ? <del className='font-normal'>${priceDel}</del> : null}</span>
            </td>
            <td>
                <button className='products-items__cluse' title='clous'>
                    <svg className='products-items__cluse__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                </button>
            </td>
        </>
    )
}

import React, { useEffect, useRef } from 'react'
import './Radio.css'
import { RadioType } from '../Filter'
// interface RadioType {
//     items: string[],
//     boxId: string
// }
export const Radio: React.FC<RadioType> = ({ items, boxId }) => {
    const CardRadio = useRef<HTMLDivElement>(null)
    const BoxRadio = useRef<HTMLUListElement>(null)
    const RadioBackground = useRef<HTMLSpanElement>(null)
    const HandlerRadio = (id: string) => {
        if (BoxRadio && BoxRadio.current) {
            BoxRadio.current.querySelectorAll('label').forEach((e, index) => {
                if (e.htmlFor === id) {
                    if (RadioBackground.current && RadioBackground) {
                        RadioBackground.current.style.left = `${e.offsetLeft}px`
                        RadioBackground.current.style.width = `${e.offsetWidth}px`
                    }
                }
            })
        }
    }
    useEffect(() => {
        if (BoxRadio && BoxRadio.current) {
            BoxRadio.current.querySelectorAll('label').forEach((e, index) => {
                if (index === 0) {
                    if (RadioBackground.current && RadioBackground && CardRadio && CardRadio.current && BoxRadio && BoxRadio.current) {
                        RadioBackground.current.style.left = `${e.offsetLeft}px`
                        RadioBackground.current.style.width = `${e.offsetWidth}px`
                        CardRadio.current.style.width = `${BoxRadio.current.offsetWidth+8}px`
                    }
                }
            })
        }

    }, []);
    return (
        <div ref={CardRadio} className='radio relative flex items-center justify-between py-4 '>
            <span ref={RadioBackground} className='radio__background absolute'></span>
            <ul ref={BoxRadio} className='redio__box absolute left-0 flex'>
                {
                    items.map((e, index) => {
                        return (

                            <li key={`${boxId}-${index}`} className=''>
                                <input className='hidden' type="radio" id={`${boxId}-${e}`} />
                                <label onClick={() => HandlerRadio(`${boxId}-${e}`)} className='radio__text mx-2 px-3 capitalize' htmlFor={`${boxId}-${e}`}>{e}</label>
                            </li>
                        )
                    })
                }
                {/* <input className='hidden' type="radio" id="feat" />
                <label onClick={() => HandlerRadio("feat")} className='radio__text mx-2 px-3' htmlFor="feat">feat</label> */}
            </ul>
        </div>
    )
}

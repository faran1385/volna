import React, { useEffect, useRef, useState } from 'react'
import './Drop.css'
interface DropItemsType {
    text: string,
    hasActive?: boolean
}
interface DropType {
    items: DropItemsType[],
    boxId: string
}
export const Drop: React.FC<DropType> = ({ items, boxId }) => {

    const [Item, setItem] = useState('')
    const ListBox = useRef<HTMLUListElement>(null)
    const HandlerList = (text: string, id: number) => {
        setItem(text)
        if (ListBox && ListBox.current) {
            ListBox.current.querySelectorAll("li").forEach(e => {
                e.classList.remove("filter-drop__items--active")
                if (e.id === `${boxId}-${id}`) {
                    e.classList.add("filter-drop__items--active")
                }
            })
        }
    }
    useEffect(()=>{
        items.forEach(e => {
            if (e.hasActive) {
                setItem(e.text)
            }
        })
    },[])
    return (
        <div className='filter-drop py-1 relative'>
            <button className='filter-drop__select pe-5 flex relative px-2 mx-1 sm:mx-3 capitalize' type='button'>
                {Item}
                <svg className='filter-drop__select__icon absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#c0c0c0" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z" /></svg>
            </button>
            <ul ref={ListBox} className='filter-drop__box absolute ps-7' >
                {
                    items.map((event, index) => {
                        return (
                            <li key={`${boxId}-${index}`} className={`filter-drop__items ${event.hasActive ? `filter-drop__items--active` : ""}  py-3`} id={`${boxId}-${index}`}>
                                <button onClick={() => HandlerList(event.text, index)}>{event.text}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

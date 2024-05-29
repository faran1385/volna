import React from 'react'

import './Comments.css'
import { CommentsItem, CommentsItemType } from './CommentsItem/CommentsItem'
import { InputForm } from '../InputForm/InputForm'
interface CommentsType {
    name:string,
    items: CommentsItemType[]
}
export const Comments: React.FC<CommentsType> = ({ items,name }) => {
    return (
        <section className='comments'>
            <h3 className='release__title flex items-center capitalize mb-3'>
                comments
                <span className='comments__count flex justify-center items-center ms-3'>
                    {items.length}
                </span>
            </h3>
            <ul>
                {
                    items.map((e,index) => {
                        return (
                            <li key={`comment_${name}_${index+1}`}>
                                <CommentsItem
                                    text={e.text}
                                    date={e.date}
                                    name={e.name}
                                    dislike={e.dislike}
                                    like={e.like}
                                    srcImg={e.srcImg}
                                    replay={items[e.replay]}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <form className='card--border mb-7'>
                <InputForm placeholder='add comment' hasTextarea classTextarea='w-full'/>
                <button className='contact-form__submit w-full sm:w-44 mt-4 '>
                    send
                </button>
            </form>
        </section>
    )
}

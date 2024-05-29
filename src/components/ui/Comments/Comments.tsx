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
                        console.log(e.replay)
                        return (
                            <li key={`comment_${name}_${index+1}`}>
                                <CommentsItem
                                    text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                    date='30.08.2021, 17:53'
                                    name='John Doe'
                                    dislike={7}
                                    like={12}
                                    srcImg='https://volna.volkovdesign.com/img/avatar.svg'
                                    replay={e.replay === undefined || e.replay == false ? false : e.replay}
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

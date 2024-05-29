import React from 'react'
import './CommentsItem.css'
export interface CommentsItemType {
    text: string,
    name: string,
    date: string,
    like: number,
    dislike: number,
    srcImg: string,
    replay: string | number,
}
export const CommentsItem: React.FC<CommentsItemType> = ({ date, dislike, like, name, srcImg, text, replay }) => {
    return (
        <div className={`comments_item card--border p-3 sm:py-5 sm:px-5  my-4 ${replay ? 'ms-7 md:ms-14' : null}`}>
            <div className='comments_item__header comments_item--border flex items-center'>
                <img className='comments_item__header__img' src={srcImg} alt="" />
                <div className='flex flex-col ps-3'>
                    <span className='comments_item__header__name'>{name}</span>
                    <span className='comments_item__header__date text-gary'>{date}</span>
                </div>
            </div>
            <div className='comments_item__body comments_item--border'>
                {
                    replay ?
                        <p className='comments_item__body__replay p-4 mb-4'>
                            {replay.text}
                        </p>
                        :
                        null
                }
                <p className=' text-gary'>
                    {text}
                </p>
            </div>
            <div className='comments_item__footer flex sm:flex-row flex-col justify-between gap-y-3'>
                <div className='flex'>
                    <button className='comments_item__footer__like-btn flex gap-2'>
                        <svg className='comments_item__footer__like-btn__icon comments_item__footer__like-btn__icon--green' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19ZM16 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z"></path><path d="M13 16V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16Z"></path></svg>
                        {like}
                    </button>
                    <button className='comments_item__footer__like-btn flex gap-2'>
                        {dislike}
                        <svg className='comments_item__footer__like-btn__icon comments_item__footer__like-btn__icon--red' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19ZM16 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z"></path></svg>
                    </button>
                </div>
                <div className='flex gap-3'>
                    <button className='comments_item__footer__btn uppercase flex items-center'>
                        <svg className='comments_item__footer__like-btn__icon comments_item__footer__like-btn__icon--gray me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z"></path></svg>
                        reply
                    </button>
                    <button className='comments_item__footer__btn uppercase flex items-center'>
                        <svg className='comments_item__footer__like-btn__icon comments_item__footer__like-btn__icon--gray me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.3,10.75A1,1,0,1,0,9,9.25,3,3,0,1,1,7,4,3,3,0,0,1,9.23,5H8A1,1,0,0,0,8,7h3a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0h0a5,5,0,1,0,.3,7.75ZM19,6H15a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H9a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3h8.36l3,2.73A1,1,0,0,0,21,22a1.1,1.1,0,0,0,.4-.08A1,1,0,0,0,22,21V9A3,3,0,0,0,19,6Z"></path></svg>
                        QUOTE
                    </button>
                </div>
            </div>
        </div>
    )
}

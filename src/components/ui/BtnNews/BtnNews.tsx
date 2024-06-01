import React from 'react'
interface BtnNews {
    hasActive?: boolean,
    text: string,
    id: number
    , handler: (event: any) => void
}
export const BtnNews: React.FC<BtnNews> = ({ id, text, hasActive, handler }) => {
    return (
        <button onClick={() => handler(id)} className="flex w-fit Header-nav__controler__signin  main-link ">
            <span className={`main-link__icon ${hasActive ? "main-link__icon--active" : ""}`}>#</span>
            <span className={`main-link__text ${hasActive ? "main-link__text--active" : ""} capitalize`}>{text}</span>
        </button>
    )
}

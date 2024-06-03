import "./Order.css"
import React from "react";
import {subtitleType, textType} from "../../NotificationModal/NotificationModal.tsx";
import {useAppDispatch} from "../../../../../app/store.ts";
import {SET_NOTIFICATION} from "../../../../../app/Profile/NotificationModal/NotificationModal.ts";
import {useModalActions} from "../../../../logic/useModalActions/useModalActions.ts";

interface OrderProps {
    hasBorder: boolean,
    rank: number,
    imgSrc: string,
    name: string,
    date: string,
    quantity: number,
    totalPrice: number,
    status: 'in-way' | 'canceled' | 'delivered',
    texts: textType[],
    subtitles: subtitleType[],
    title: string
}

export const Order: React.FC<OrderProps> = (T) => {

    const {hasBorder, texts, subtitles, title, name, rank, status, date, totalPrice, quantity, imgSrc} = T

    const dispatch = useAppDispatch()

    const {openModal} = useModalActions()

    const rankClickHandler = () => {
        dispatch(SET_NOTIFICATION({
            title,
            type: 'rank',
            subtitles,
            texts,
        }))
        openModal('.notification-modal', '.notification-modal-parent', '.notification-modal__backdrop')
    }

    return <div
        style={{
            gridTemplateColumns: 'repeat(15, minmax(0, 1fr))',
            borderBottom: hasBorder ? "1px solid var(--border-color)" : ''
        }}
        className={"grid py-4 items-center"}>
        <div className={"col-start-1 col-end-2 flex items-center"}>
            <button onClick={rankClickHandler} className={"order__number"}>{rank}</button>
        </div>
        <div className={"col-start-2 col-end-3"}>
            <img alt={'music image'} src={imgSrc} className={"rounded-xl"}
                 loading={'lazy'}/>
        </div>
        <div className={"col-start-4 col-end-7"}>
            <a href="#" className={"order__name"}>
                {name}
            </a>
        </div>
        <div className={"col-start-7 col-end-10"}>
            <span className={"order__date"}>{date}</span>
        </div>
        <div className={"col-start-10 col-end-12"}>
            <span className={"order__quantity"}>{quantity}</span>
        </div>
        <div className={"col-start-12"} style={{gridColumnEnd: 14}}>
            <span className={"order__price"}>${totalPrice}</span>
        </div>
        <div style={{gridColumnStart: 14, gridColumnEnd: 16}}>
            <div className={`flex items-center order__status--${status}`}>
                {status === 'in-way' ? (
                    <>
                        <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z">
                            </path>
                        </svg>
                        <span className={"order__status__text ms-2"}>On the way</span>
                    </>
                ) : status === 'canceled' ? (
                    <>
                        <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z">
                            </path>
                        </svg>
                        <span className={"order__status__text ms-2"}>canceled</span>
                    </>
                ) : (
                    <>
                        <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z">
                            </path>
                        </svg>
                        <span className={"order__status__text ms-2"}>Delivered</span>
                    </>
                )}
            </div>
        </div>
    </div>
}
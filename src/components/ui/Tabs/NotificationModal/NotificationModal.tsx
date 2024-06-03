import React from "react";
import "./NotificationModal.css"
import {createPortal} from "react-dom";
import "../TabProfile/Modal/Modal.css"
import {useModalActions} from "../../../logic/useModalActions/useModalActions.ts";

interface NotificationModalProps {
    notification: notificationType
}

export type notificationType = {
    title: string,
    subtitles: subtitleType[],
    texts: textType[],
    type: "success" | "failed" | "info" | "gift" | 'rank'
}

export type textType = {
    text: string,
    additionalClass?: string,
}

export type subtitleType = {
    key: string,
    value: string,
    additionalClassForKey?: string,
    additionalClassForValue?: string
}

export const NotificationModal: React.FC<NotificationModalProps> = (T) => {
    const {closeModal, modalBlur} = useModalActions()
    const {notification} = T
    const {subtitles, texts, type, title} = notification
    return <>
        {createPortal(
            <div>
                <div className={'notification-modal__backdrop tab-modal__backdrop'}></div>
                <div aria-hidden="true"
                     onClick={(e) => modalBlur(e, '.notification-modal', '.notification-modal-parent', '.notification-modal__backdrop')}
                     className="fixed flex sm:0 px-8 tab-modal-parent notification-modal-parent inset-0 justify-center items-center w-full">
                    <div className="relative rounded-lg notification-modal tab-modal w-full">
                        <div className="relative p-8">
                            <div
                                className="flex items-center justify-between rounded-t mb-4">
                                <h3 className="notification-modal__title tab-modal__title">
                                    {title}
                                </h3>
                                <button type="button"
                                        className="flex items-center justify-end"
                                        data-modal-hide="default-modal">
                                    <svg
                                        onClick={() => closeModal('.notification-modal', '.notification-modal-parent', '.notification-modal__backdrop')}
                                        width={24} className={"notification-model__close tab-model__close"}
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className={"w-full flex"}>
                                <div className={"w-4/6"}>
                                    {subtitles.map((subtitle, i) => {
                                        return <div key={i} className={"mt-4 flex items-baseline"}>
                                    <span
                                        className={`tab-modal__balance-text ${subtitle.additionalClassForKey ? subtitle.additionalClassForKey : ""}`}>{subtitle.key}</span>
                                            <span
                                                className={`ms-2 ${subtitle.additionalClassForValue ? subtitle.additionalClassForValue : ""}`}>{subtitle.value}</span>
                                        </div>
                                    })}
                                    {texts.map((text, i) => {
                                        return <p style={{fontSize: '13px'}} key={i}
                                                  className={`pt-4 ${text.additionalClass ? text.additionalClass : ""} text-white tab-modal__balance-text font-light`}>
                                            {text.text}
                                        </p>
                                    })}
                                </div>
                                <div className={"w-2/5 flex items-end justify-end"}>
                                    <div className={"w-2/3"}>
                                        {type === "success" ? (
                                            <svg fill={"var(--green-color)"} xmlns="http://www.w3.org/2000/svg"
                                                 width={'90%'} className={"opacity-35"} viewBox="0 0 24 24">
                                                <path
                                                    d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z">
                                                </path>
                                            </svg>) : type === "failed" ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill={"#eb5757"} width={'90%'}
                                                 className={"opacity-35"}
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z"></path>
                                            </svg>
                                        ) : type === "info" ? (
                                            <svg width={'90%'} className={"opacity-35"}
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 fill={"var(--gray-color)"}
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path>
                                            </svg>
                                        ) : type === "gift" ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width={'90%'}
                                                 className={"opacity-35"}
                                                 fill={"#8051d4"}
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M18,7h-.35A3.45,3.45,0,0,0,18,5.5a3.49,3.49,0,0,0-6-2.44A3.49,3.49,0,0,0,6,5.5,3.45,3.45,0,0,0,6.35,7H6a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H5v6a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V13h1a1,1,0,0,0,1-1V10A3,3,0,0,0,18,7ZM11,20H8a1,1,0,0,1-1-1V13h4Zm0-9H5V10A1,1,0,0,1,6,9h5Zm0-4H9.5A1.5,1.5,0,1,1,11,5.5Zm2-1.5A1.5,1.5,0,1,1,14.5,7H13ZM17,19a1,1,0,0,1-1,1H13V13h4Zm2-8H13V9h5a1,1,0,0,1,1,1Z">
                                                </path>
                                            </svg>
                                        ) : (
                                            <svg className={"opacity-35"} width={'90%'} xmlns="http://www.w3.org/2000/svg"
                                                 fill={"var(--gray-color)"}
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        )}
    </>
}
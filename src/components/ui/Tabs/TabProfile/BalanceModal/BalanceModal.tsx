import "./balanceModal.css"
import {createPortal} from "react-dom";
import React from "react";
import "../Modal/Modal.css"
import {useModalActions} from "../../../../logic/useModalActions/useModalActions.ts";


export const BalanceModal: React.FC = () => {
    const {closeModal, modalBlur} = useModalActions()


    return <>
        {createPortal(
            <div>
                <div className={'tab-modal__backdrop balance-modal__backdrop'}></div>
                <div aria-hidden="true"
                     onClick={(e) => modalBlur(e, '.balance-modal', '.balance-modal-parent', '.balance-modal__backdrop')}
                     className={"fixed flex sm:0 px-8 tab-modal-parent balance-modal-parent inset-0 justify-center items-center w-full"}>
                    <div className="relative rounded-lg balance-modal  tab-modal w-full">
                        <div className="relative p-8">
                            <div
                                className="flex items-center justify-between rounded-t mb-4">
                                <h3 className="tab-modal__title">
                                    Replenishment
                                </h3>
                                <button type="button"
                                        className="flex items-center justify-end"
                                        data-modal-hide="default-modal">
                                    <svg
                                        onClick={() => closeModal('.balance-modal', '.balance-modal-parent', '.balance-modal__backdrop')}
                                        width={24} className={"tab-model__close"}
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z">
                                        </path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className={"mt-8 flex items-baseline"}>
                                <span className={"tab-modal__balance-text"}>Your balance:</span>
                                <span className={"ms-2 tab-modal__price"}>$90.99</span>
                            </div>
                            <div className={"mt-8"}>
                                <span className={"tab-modal__balance-text"}>Choose amount:</span>
                                <div className={"w-full relative mt-2"}>
                                    <select
                                        className={"flex w-full px-4 rounded-lg balance-modal__dropdown items-center justify-between"}>
                                        <option>49$</option>
                                        <option>99$</option>
                                        <option>169$</option>
                                    </select>
                                </div>
                            </div>
                            <p style={{fontSize: '13px'}}
                               className={"pt-4 text-white tab-modal__balance-text font-light"}>
                                You can spend money from your account on the renewal of the connected packages, or on
                                the purchase of goods on our website.
                            </p>
                            <div className={"mt-8"}>
                                <span className={"tab-modal__balance-text"}>Payment method:</span>
                                <ul>
                                    <li className={"flex mt-3 items-center"}>
                                        <input defaultChecked={true} id={"payment-visa"} type={'radio'} name={'Payment'}
                                               className={'balance-modal__ratio'}/>
                                        <label htmlFor={'payment-visa'}
                                               className={"balance-modal__ratio__label ms-3"}>Visa</label>
                                    </li>
                                    <li className={"flex mt-3 items-center"}>
                                        <input id={"payment-mastercard"} type={'radio'} name={'Payment'}
                                               className={'balance-modal__ratio'}/>
                                        <label htmlFor={'payment-mastercard'}
                                               className={"balance-modal__ratio__label ms-3"}>Mastercard</label>
                                    </li>
                                    <li className={"flex mt-3 items-center"}>
                                        <input id={"payment-paypal"} type={'radio'} name={'Payment'}
                                               className={'balance-modal__ratio'}/>
                                        <label htmlFor={'payment-paypal'}
                                               className={"balance-modal__ratio__label ms-3"}>Paypal</label>
                                    </li>
                                </ul>
                            </div>
                            <div className={"mt-8"}>
                                <button
                                    className={'balance-modal__button rounded-xl flex items-center justify-center w-full'}>proceed
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        )}

    </>
}
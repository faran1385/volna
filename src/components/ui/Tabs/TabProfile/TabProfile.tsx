import "./TabProfile.css"
import {Notification} from "./Notification/Notification.tsx";
import {Song} from "../../Songs/Song/Song.tsx";
import {BalanceModal} from "./BalanceModal/BalanceModal.tsx";
import {NotificationModal} from "../NotificationModal/NotificationModal.tsx";
import {useModalActions} from "../../../logic/useModalActions/useModalActions.ts";
import {useInputHandler} from "../../../logic/useInputHandler/useInputHandler.ts";
import {useAppSelector} from "../../../../app/store.ts";

export const TabProfile = () => {

    const {notification} = useAppSelector(state => state.notification)

    const {inputHandler} = useInputHandler()

    const {openModal} = useModalActions()

    return <>
        <div className={"mt-8"}>
            <div className={"grid sm:grid-cols-2  lg:grid-cols-4 gap-6"}>
                <div className={"p-4 tabs__profile__status rounded-xl"}>
                    <div className={"flex items-center"}>
                        <h1 className={"tabs__profile__status__title"}>My balance</h1>
                        <button
                            onClick={() => openModal('.balance-modal', '.balance-modal-parent', '.balance-modal__backdrop')}
                            className={"tabs__profile__status__modal-trigger ms-2 h-fit"}>Top
                            up
                        </button>
                    </div>
                    <div className={"flex justify-between items-center mt-4"}>
                        <span className={"tabs__profile__status__price"}>99.99$</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={"h-auto"} fill={"var(--green-color)"}
                             style={{width: "30px"}}
                             viewBox="0 0 24 24">
                            <path
                                d="M6,11a1,1,0,1,0,1,1A1,1,0,0,0,6,11Zm12,0a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm2-6H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className={"p-4 tabs__profile__status rounded-xl"}>
                    <div className={"flex items-center"}>
                        <h1 className={"tabs__profile__status__title"}>Premium plan</h1>
                    </div>
                    <div className={"flex justify-between items-center mt-4"}>
                        <div>
                            <span className={"tabs__profile__status__price"}>39.99$</span>
                            <span className={"tabs__profile__status__price__time"}>/month</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={"h-auto"} fill={"var(--green-color)"}
                             style={{width: "30px"}}
                             viewBox="0 0 24 24">
                            <path
                                d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className={"p-4 tabs__profile__status rounded-xl"}>
                    <div className={"flex items-center"}>
                        <h1 className={"tabs__profile__status__title"}>Minutes listened</h1>
                    </div>
                    <div className={"flex justify-between items-center mt-4"}>
                        <b className={"tabs__profile__status__listened-minutes"}>407 021</b>
                        <svg xmlns="http://www.w3.org/2000/svg" className={"h-auto"} fill={"var(--green-color)"}
                             style={{width: "30px"}}
                             viewBox="0 0 24 24">
                            <path
                                d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className={"p-4 tabs__profile__status rounded-xl"}>
                    <div className={"flex items-center"}>
                        <h1 className={"tabs__profile__status__title"}>Promo code</h1>
                    </div>
                    <div className={"flex justify-between w-full items-baseline mt-4"}>
                        <input type="text" className={"outline-0 bg-transparent"}
                               onInput={(e) => inputHandler(e)}
                               placeholder="__-__-__-__"
                               style={{width: "inherit"}}
                               onClick={(e) => (e.target as HTMLInputElement).setSelectionRange(0, 0)}
                               inputMode={"text"}/>
                        <a href={"#"} className={"tabs__profile__status__button"}>Send</a>
                    </div>
                </div>
            </div>
            <div className={"mt-12 gap-6 grid lg:grid-cols-2"}>
                <div className={"rounded-xl tabs__profile__container"}>
                    <div className={"h-16 tabs__profile__container__header px-4 flex justify-between items-center"}>
                        <div className={"flex items-center"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill={'var(--green-color)'}
                                 viewBox="0 0 24 24">
                                <path
                                    d="M19.05566,2h-14a3.00328,3.00328,0,0,0-3,3V19a3.00328,3.00328,0,0,0,3,3h14a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19.05566,2Zm-14,2h14a1.001,1.001,0,0,1,1,1v8H17.59082a1.99687,1.99687,0,0,0-1.66406.89062L14.52051,16H9.59082L8.18457,13.89062A1.99687,1.99687,0,0,0,6.52051,13H4.05566V5A1.001,1.001,0,0,1,5.05566,4Zm14,16h-14a1.001,1.001,0,0,1-1-1V15H6.52051l1.40625,2.10938A1.99687,1.99687,0,0,0,9.59082,18h4.92969a1.99687,1.99687,0,0,0,1.66406-.89062L17.59082,15h2.46484v4A1.001,1.001,0,0,1,19.05566,20Z">
                                </path>
                            </svg>
                            <span className={"ms-2 tabs__profile__container__header__title"}>Notifications</span>
                            <span
                                className={"w-4 h-4 ms-1 mb-1 flex items-center justify-center tabs__profile__container__header__badge"}>17</span>
                        </div>
                        <a href={"#"}>
                            <svg className={"tabs__profile__container__header__history"}
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={18} viewBox="0 0 24 24">
                                <path
                                    d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z">

                                </path>
                            </svg>
                        </a>
                    </div>
                    <div className={"px-4 py-4"}>
                        <div className={"overflow-y-auto"} style={{height: '350px'}}>
                            <Notification
                                texts={[{text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}]}
                                subtitles={[{
                                    key: "Total cost :",
                                    additionalClassForValue: 'tab-modal__price',
                                    value: "$18.00"
                                }, {
                                    key: "Payment method:",
                                    value: 'Paypal'
                                }]} hasBorder
                                link={"Payment #51"} time={4} type={"success"}
                                title={" was successful!"}/>
                            <Notification
                                texts={[{text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}]}
                                subtitles={[]} hasBorder
                                link={"Payment #51"} time={4} type={"failed"}
                                title={" was successful!"}/>
                            <Notification
                                texts={[{text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}]}
                                subtitles={[]} hasBorder
                                link={"Payment #51"} time={4} type={"info"}
                                title={" was successful!"}/>
                            <Notification
                                texts={[{text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}]}
                                subtitles={[]} hasBorder
                                link={"You have received a gift!"} time={4} type={"gift"}
                                title={""}/>
                            <Notification
                                texts={[{text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}]}
                                subtitles={[]} hasBorder
                                link={"You have received a gift!"} time={4} type={"gift"}
                                title={""}/>
                            <Notification
                                texts={[
                                    {text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
                                    {text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
                                ]}
                                subtitles={[]} hasBorder
                                link={"You have received a gift!"} time={4} type={"gift"}
                                title={""}/>
                        </div>
                    </div>
                </div>
                <div className={"rounded-xl tabs__profile__container"}>
                    <div className={"h-16 tabs__profile__container__header px-4 flex justify-between items-center"}>
                        <div className={"flex items-center"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill={'var(--green-color)'}
                                 viewBox="0 0 24 24">
                                <path
                                    d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z">
                                </path>
                            </svg>
                            <span className={"ms-2 tabs__profile__container__header__title"}>New items for you</span>
                        </div>
                        <div className={"flex items-center"}>
                            <a href={"#"}>
                                <svg className={"tabs__profile__container__header__history"}
                                     xmlns="http://www.w3.org/2000/svg"
                                     width={18} viewBox="0 0 24 24">
                                    <path
                                        d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z">

                                    </path>
                                </svg>
                            </a>
                            <a href={"#"} className={"ms-2 tabs__profile__container__header__view-all"}>
                                View All
                            </a>
                        </div>
                    </div>
                    <div className={"px-4"}>
                        <div style={{height: '384px'}}>
                            <Song hasPlusAndDownload hasBorder href={"#"}
                                  img={"http://volna.volkovdesign.com/img/covers/cover.svg"}
                                  singer={"Got What I Got"} isLive={100} name={"Jason Aldean"}/>
                            <Song hasPlusAndDownload hasBorder href={"#"}
                                  img={"http://volna.volkovdesign.com/img/covers/cover.svg"}
                                  singer={"Got What I Got"} isLive={100} name={"Jason Aldean"}/>
                            <Song hasPlusAndDownload hasBorder href={"#"}
                                  img={"http://volna.volkovdesign.com/img/covers/cover.svg"}
                                  singer={"Got What I Got"} isLive={100} name={"Jason Aldean"}/>
                            <Song hasPlusAndDownload hasBorder href={"#"}
                                  img={"http://volna.volkovdesign.com/img/covers/cover.svg"}
                                  singer={"Got What I Got"} isLive={100} name={"Jason Aldean"}/>
                            <Song hasPlusAndDownload hasBorder={false} href={"#"}
                                  img={"http://volna.volkovdesign.com/img/covers/cover.svg"}
                                  singer={"Got What I Got"} isLive={100} name={"Jason Aldean"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BalanceModal/>
        <NotificationModal notification={notification}/>
    </>
}
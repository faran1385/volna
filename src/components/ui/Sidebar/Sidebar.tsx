import { FC } from "react"
import { divRefType } from "../../../App"
import "./Sidebar.css"
import './../LinkMain/LinkMain.css'
export const Sidebar : FC<divRefType> = ({DivMenuRef}) => {
    return <>
        <aside ref={DivMenuRef} className={`sidebar transform-gpu xl:translate-x-0 -translate-x-full  `}>
            {/* sidebar header start*/}
            <header className="p-5 flex items-center ps-8 w-full sidebar__header">
                <img className="h-full sidebar__header__image" src="https://volna.volkovdesign.com/img/logo.svg" title="logo" />
            </header>
            {/* sidebar header end */}
            {/* sidebar navigation start */}
            <nav className="overflow-y-auto w-full ps-8 sidebar__nav pt-2">
                <ul>
                    <li className="my-5">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3 main-link__icon--active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"></path>
                            </svg>
                            <span className="main-link__text--active main-link__text">Home</span>
                        </a>
                    </li>
                    <li className="my-5">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"></path>
                            </svg>
                            <span className=" main-link__text">Artists</span>
                        </a>
                    </li>
                    <li className="my-5">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path>
                            </svg>
                            <span className=" main-link__text">Releases</span>
                        </a>
                    </li>
                    <li className="my-5">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"></path>
                            </svg>
                            <span className=" main-link__text">Events</span>
                        </a>
                    </li>
                    <li className="my-5">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12,15a4,4,0,0,0,4-4V5A4,4,0,0,0,8,5v6A4,4,0,0,0,12,15ZM10,5a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0Zm10,6a1,1,0,0,0-2,0A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8,8,0,0,0,7,7.93V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93A8,8,0,0,0,20,11Z"></path>
                            </svg>
                            <span className=" main-link__text">Podcasts</span>
                        </a>
                    </li>
                    <li className="my-5">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
                            </svg>
                            <span className=" main-link__text">Store</span>
                        </a>
                    </li>
                    <li className="my-5">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M16,14H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-4H10a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4-6H17V3a1,1,0,0,0-2,0V4H13V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H4A1,1,0,0,0,3,5V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V5A1,1,0,0,0,20,4ZM19,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V6H7V7A1,1,0,0,0,9,7V6h2V7a1,1,0,0,0,2,0V6h2V7a1,1,0,0,0,2,0V6h2Z"></path>
                            </svg>
                            <span className=" main-link__text">News</span>
                        </a>
                    </li>
                    <li className="my-5 block sm:hidden">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
                            </svg>
                            <span className=" main-link__text">Cart</span>
                        </a>
                    </li>
                    <li className="my-5 block sm:hidden">
                        <a href="#" className="flex w-fit main-link">
                            <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path>
                            </svg>
                            <span className=" main-link__text">Log in</span>
                        </a>
                    </li>
                    <li className="my-5 block sm:hidden">
                        <a href="#" className="flex w-fit main-link">
                            <div className="relative">
                                <span className="main-link__badge rounded-sm px-1 w-4 h-4 flex justify-center items-center absolute right-1.5">17</span>
                                <svg className="main-link__icon me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19.05566,2h-14a3.00328,3.00328,0,0,0-3,3V19a3.00328,3.00328,0,0,0,3,3h14a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19.05566,2Zm-14,2h14a1.001,1.001,0,0,1,1,1v8H17.59082a1.99687,1.99687,0,0,0-1.66406.89062L14.52051,16H9.59082L8.18457,13.89062A1.99687,1.99687,0,0,0,6.52051,13H4.05566V5A1.001,1.001,0,0,1,5.05566,4Zm14,16h-14a1.001,1.001,0,0,1-1-1V15H6.52051l1.40625,2.10938A1.99687,1.99687,0,0,0,9.59082,18h4.92969a1.99687,1.99687,0,0,0,1.66406-.89062L17.59082,15h2.46484v4A1.001,1.001,0,0,1,19.05566,20Z"></path>
                                </svg>
                            </div>
                            <span className="main-link__text">Inboxes</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* sidebar navigation end */}
        </aside>
    </>
}
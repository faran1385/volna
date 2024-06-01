import "./TabsHeader.css"
import gsap from "gsap"
import {useRef} from "react";

export const TabHeader = () => {
    const clickType = useRef<"from" | "to">("from")
    const clickHandler = (type: "from" | "to") => {
        if (type === "to") {
            gsap.to(".mobile-icons", {
                top: (i) => {
                    if (i == 0) {
                        return -60
                    } else if (i === 1) {
                        return -30
                    } else if (i === 2) {
                        return 30
                    } else {
                        return 60
                    }
                },
                left: (i) => {
                    if (i == 0) {
                        return 0
                    } else if (i === 1) {
                        return -45
                    } else if (i === 2) {
                        return -45
                    } else {
                        return 0
                    }
                },
                ease: "back.out",
                stagger: .2,
                opacity: 1,
                pointerEvents: "auto",
                onStart: () => {
                    gsap.set(".mobile-burger-icon", {
                        pointerEvents: "none"
                    })
                },
                onComplete: () => {
                    gsap.set(".mobile-burger-icon", {
                        pointerEvents: "auto"
                    })
                },
            })
        } else {
            gsap.to(".mobile-icons", {
                top: 0,
                left: 0,
                ease: "back.out",
                stagger: {
                    from: "end",
                    each: .2
                },
                opacity: 0,
                pointerEvents: "none",
                onStart: () => {
                    gsap.set(".mobile-burger-icon", {
                        pointerEvents: "none"
                    })
                },
                onComplete: () => {
                    gsap.set(".mobile-burger-icon", {
                        pointerEvents: "auto"
                    })
                },
            })
        }
        clickType.current = type
    }

    return <div
        className={"tabs__header rounded-xl  flex justify-between items-center px-6"}>
        <div className={"flex h-full"}>
            <div className={"flex items-center"}>
                <div className={"flex"}>
                    <img src="https://volna.volkovdesign.com/img/avatar.svg" className={"rounded-lg"}
                         alt="your picture"/>
                    <div className={"ms-3"}>
                        <h3 className={"tabs__header__name"}>John Doe</h3>
                        <p className={"tabs__header__id"}>Volna ID: 11104</p>
                    </div>
                </div>
                <nav className={"ms-12 h-full hidden sm:block"}>
                    <ul className={"flex h-full"}>
                        <li className={"mx-4 tabs__header__list__link tabs__header__list__link--activate flex items-center "}>
                            <a href={"#"} className={"lg:block hidden"}>Profile</a>
                            <a href={"#"} className={"lg:hidden block"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                                     className="tabs__header__list__icon tabs__header__list__icon--active bi bi-person-fill"
                                     viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                            </a>
                        </li>
                        <li className={"mx-4 tabs__header__list__link flex items-center "}>
                            <a href={"#"} className={"lg:block hidden"}>Orders</a>
                            <a href={"#"} className={"lg:hidden block"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                                     className="tabs__header__list__icon bi bi-sort-up" viewBox="0 0 16 16">
                                    <path
                                        d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
                                </svg>
                            </a>
                        </li>
                        <li className={"mx-4 tabs__header__list__link flex items-center "}>
                            <a href={"#"} className={"lg:block hidden"}>Pricing plan</a>
                            <a href={"#"} className={"lg:hidden block"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                                     className="tabs__header__list__icon bi bi-sticky-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
                                </svg>
                            </a>
                        </li>
                        <li className={"mx-4 tabs__header__list__link flex items-center "}>
                            <a href={"#"} className={"lg:block hidden"}>Settings</a>
                            <a href={"#"} className={"lg:hidden block"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                                     className="tabs__header__list__icon bi bi-gear-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className={"flex justify-end lg:justify-start "}>
            <a href={"#"} className={"tabs__header__signOut items-center sm:flex hidden"}>
                <span className={"me-3 tabs__header__signOut__text md:block hidden"}>Sign out</span>
                <svg fill={"var(--gray-color)"} className={"w-6 tabs__header__signOut__svg"}
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path
                        d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z">

                    </path>
                </svg>
            </a>
            <a href={"#"} className={"relative"}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     onClick={() => clickHandler(clickType.current === "from" ? "to" : "from")}
                     width={24}
                     fill="var(--gray-color)"
                     className="bi bi-list mobile-burger-icon sm:hidden block" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                     className="absolute pointer-events-none opacity-0 mobile-icons tabs__header__list__icon tabs__header__list__icon--active bi bi-person-fill"
                     viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                     className="pointer-events-none opacity-0 absolute mobile-icons tabs__header__list__icon bi bi-sort-up"
                     viewBox="0 0 16 16">
                    <path
                        d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                     className="pointer-events-none opacity-0 absolute mobile-icons tabs__header__list__icon bi bi-gear-fill"
                     viewBox="0 0 16 16">
                    <path
                        d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24}
                     className="pointer-events-none opacity-0 absolute mobile-icons tabs__header__list__icon bi bi-gear-fill"
                     viewBox="0 0 16 16">
                    <path
                        d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
            </a>
        </div>
    </div>
}
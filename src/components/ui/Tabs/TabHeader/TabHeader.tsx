import "./TabsHeader.css"

export const TabHeader = () => {

    return <div className={"tabs__header rounded-xl flex justify-between items-center px-6"}>
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
                <nav className={"ms-12 h-full"}>
                    <ul className={"flex h-full"}>
                        <li className={"mx-4 tabs__header__list__link tabs__header__list__link--activate flex items-center "}>
                            <a href={"#"}>Profile</a>
                        </li>
                        <li className={"mx-4 tabs__header__list__link flex items-center "}>
                            <a href={"#"}>Orders</a>
                        </li>
                        <li className={"mx-4 tabs__header__list__link flex items-center "}>
                            <a href={"#"}>Pricing plan</a>
                        </li>
                        <li className={"mx-4 tabs__header__list__link flex items-center "}>
                            <a href={"#"}>Settings</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div>
            <a href={"#"} className={"flex tabs__header__signOut items-center"}>
                <span className={"me-3 tabs__header__signOut__text"}>Sign out</span>
                <svg fill={"var(--gray-color)"} className={"w-6 tabs__header__signOut__svg"}
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path
                        d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z">

                    </path>
                </svg>
            </a>
        </div>
    </div>
}
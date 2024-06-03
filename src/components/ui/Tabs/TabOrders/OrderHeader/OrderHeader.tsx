import "./OrderHeader.css"

export const OrderHeader = () => {
    return <div
        style={{gridTemplateColumns: 'repeat(15, minmax(0, 1fr))', borderBottom: "1px solid var(--border-color)"}}
        className={"grid py-5 items-center"}>
        <div className={"col-start-1 col-end-2 flex items-center"}>
            <span className={"order__title--number"}>№</span>
        </div>
        <div className={"col-start-2 col-end-3"}>
            <a href={"#"} className={"order__title flex items-center"}>Product
                <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z">
                    </path>
                </svg>
            </a>
        </div>
        <div className={"col-start-4 col-end-7"}>
            <a href="#" className={"flex order__title items-center order__title--active"}>Title
                <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                    </path>
                </svg>
            </a>
        </div>
        <div className={"col-start-7 col-end-10"}>
            <a href="#" className={"flex order__title items-center order__title--active"}>Date
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18}>
                    <path
                        d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                    </path>
                </svg>
            </a>
        </div>
        <div className={"col-start-10 col-end-12"}>
            <a href={"#"} className={"order__title flex items-center"}>Quantity
                <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z">
                    </path>
                </svg>
            </a>
        </div>
        <div className={"col-start-12"} style={{gridColumnEnd: 14}}>
            <a href={"#"} className={"order__title flex items-center"}>Total
                <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z">
                    </path>
                </svg>
            </a>
        </div>
        <div className={""} style={{gridColumnStart: 14, gridColumnEnd: 16}}>
            <a href={"#"} className={"order__title flex items-center"}>Status
                <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
}
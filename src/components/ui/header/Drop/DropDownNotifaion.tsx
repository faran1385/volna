import './DropDownNotifation.css'
export const DropDownNotifation = () => {
    return (
        <>
            <li className=' flex flex-col w-auto'>
                <p className='Header-nav__controler__links--dropdown__body__text relative flex items-center'>
                <svg className='Header-nav__controler__links--dropdown__body__icon' style={{ fill: "var(--green-color)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path></svg>
                    <a href="#" className='Header-nav__controler__links--dropdown__body__link me-2'>Payment #51</a>
                    was successful!
                </p>
                <span className='Header-nav__controler__links--dropdown__body__time'>
                    1 hour ago
                </span>
            </li>
            <li className=' flex flex-col w-auto'>
                <p className='Header-nav__controler__links--dropdown__body__text relative flex items-center'>
                <svg className='Header-nav__controler__links--dropdown__body__icon' style={{ fill: "red" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29Zm3.36-3.36A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM17.66,17.66A8,8,0,1,1,20,12,7.95,7.95,0,0,1,17.66,17.66Z"></path></svg>
                    <a href="#" className='Header-nav__controler__links--dropdown__body__link me-2'>Payment #50</a>
                    failed!
                </p>
                <span className='Header-nav__controler__links--dropdown__body__time'>
                    2 hour ago
                </span>
            </li>
            <li className=' flex flex-col w-auto'>
                <p className='Header-nav__controler__links--dropdown__body__text relative flex items-center'>
                <svg className='Header-nav__controler__links--dropdown__body__icon' style={{ fill: "var(--gray-color)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                    <a href="#" className='Header-nav__controler__links--dropdown__body__link me-2'>Example</a>
                    of notification.
                </p>
                <span className='Header-nav__controler__links--dropdown__body__time'>
                    3 hour ago
                </span>
            </li>
            <li className=' flex flex-col w-auto'>
                <p className='Header-nav__controler__links--dropdown__body__text relative flex items-center'>
                <svg className='Header-nav__controler__links--dropdown__body__icon' style={{ fill: "purple" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,7h-.35A3.45,3.45,0,0,0,18,5.5a3.49,3.49,0,0,0-6-2.44A3.49,3.49,0,0,0,6,5.5,3.45,3.45,0,0,0,6.35,7H6a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H5v6a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V13h1a1,1,0,0,0,1-1V10A3,3,0,0,0,18,7ZM11,20H8a1,1,0,0,1-1-1V13h4Zm0-9H5V10A1,1,0,0,1,6,9h5Zm0-4H9.5A1.5,1.5,0,1,1,11,5.5Zm2-1.5A1.5,1.5,0,1,1,14.5,7H13ZM17,19a1,1,0,0,1-1,1H13V13h4Zm2-8H13V9h5a1,1,0,0,1,1,1Z"></path></svg>
                    <a href="#" className='Header-nav__controler__links--dropdown__body__link me-2'>You have received</a>
                    a gift!
                </p>
                <span className='Header-nav__controler__links--dropdown__body__time'>
                    1 hour ago
                </span>
            </li>
        </>
    )
}
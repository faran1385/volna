export const ChangePassword = () => {
    return <form className={"settings__form rounded-xl p-4"}>
        <p>Change password</p>
        <div className={"grid lg:mt-8 lg:gap-8 lg:grid-cols-2"}>
            <div className={"lg:mt-0 mt-4"}>
                <label htmlFor={"profile-old-password"} className={'input__label lg:ps-4'}>Old password</label>
                <input className={'input mt-3 w-full rounded-lg ps-4'} id={'profile-old-password'}/>
            </div>
            <div className={'lg:mt-0 mt-4'}>
                <label htmlFor={"profile-new-password"} className={'input__label lg:ps-4'}>New password</label>
                <input className={'input mt-3 w-full rounded-lg ps-4'}
                       id={'profile-new-password'}/>
            </div>
        </div>
        <div className={"grid lg:mt-4 lg:gap-8 lg:grid-cols-2"}>
            <div className={"lg:mt-0 mt-4"}>
                <label htmlFor={"profile-confirm-password"} className={'input__label lg:ps-4'}>Confirm new
                    password</label>
                <input className={'input mt-3 w-full rounded-lg ps-4'}
                       id={'profile-confirm-password'}/>
            </div>
            <div className={'lg:mt-0 mt-4'}>
                <label htmlFor={"profile-select"} className={'input__label lg:ps-4'}>Select</label>
                <select id={'profile-select'} className={'input mt-3 w-full rounded-lg ps-4 dropdown'}>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                </select>
            </div>
        </div>
        <div className={'mt-6 sm:block grid '}>
            <button className={'settings__form__button rounded-xl flex justify-center items-center'}>Save</button>
        </div>
    </form>
}
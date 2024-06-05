export const ProfileDetail = () => {
    return <form className={"settings__form rounded-xl p-4"}>
        <p>Profile details</p>
        <div className={"grid lg:mt-8 lg:gap-8 lg:grid-cols-2"}>
            <div className={"mt-4 lg:mt-0"}>
                <label htmlFor={"profile-login"} className={'input__label  lg:ps-4'}>Login</label>
                <input placeholder={'Login'} className={'input mt-3 w-full rounded-lg ps-4'} id={'profile-login'}/>
            </div>
            <div className={"mt-4 lg:mt-0"}>
                <label htmlFor={"profile-email"} className={'input__label  lg:ps-4'}>Email</label>
                <input placeholder={'email@example.com'} className={'input mt-3 w-full rounded-lg ps-4'}
                       id={'profile-email'}/>
            </div>
        </div>
        <div className={"grid lg:mt-4 lg:gap-8 lg:grid-cols-2"}>
            <div className={"mt-4 lg:mt-0"}>
                <label htmlFor={"profile-first-name"} className={'input__label  lg:ps-4'}>First name</label>
                <input placeholder={'John'} className={'input mt-3 w-full rounded-lg ps-4'}
                       id={'profile-first-name'}/>
            </div>
            <div className={"mt-4 lg:mt-0"}>
                <label htmlFor={"profile-last-name"} className={'input__label  lg:ps-4'}>Last name</label>
                <input placeholder={'Doe'} className={'input mt-3 w-full rounded-lg ps-4'}
                       id={'profile-last-name'}/>
            </div>
        </div>
        <div className={'mt-6 sm:block grid'}>
            <button className={'settings__form__button rounded-xl flex justify-center items-center'}>Save</button>
        </div>
    </form>
}
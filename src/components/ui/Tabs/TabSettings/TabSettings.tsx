import "./TabSettings.css"
import {ProfileDetail} from "./ProfileDetail/ProfileDetail.tsx";
import {ChangePassword} from "./ChnagePassword/ChangePassword.tsx";

export const TabSettings = () => {
    return <div className={"mt-8 gap-6 grid md:grid-cols-2"}>
        <ProfileDetail/>
        <ChangePassword/>
    </div>
}
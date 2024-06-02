import "./Tabs.css"
import {TabHeader} from "./TabHeader/TabHeader.tsx";
import {TabProfile} from "./TabProfile/TabProfile.tsx";

export const Tabs = () => {
    return <div className={"w-full px-8 relative z-50"}>
        <TabHeader/>
        <TabProfile/>
    </div>
}
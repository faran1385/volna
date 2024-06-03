import "./Tabs.css"
import {TabHeader} from "./TabHeader/TabHeader.tsx";
import {TabSettings} from "./TabSettings/TabSettings.tsx";
import {TabProfile} from "./TabProfile/TabProfile.tsx";
import {TabOrders} from "./TabOrders/TabOrders.tsx";
import {TabPlan} from "./TabPlan/TabPlan.tsx";

export const Tabs = () => {

    return <div className={"w-full px-8 relative"}>
        <TabHeader/>
        <div className={"h-full relative overflow-hidden w-full min-h-[25rem]"}>
            <TabProfile/>
            <TabOrders/>
            <TabPlan/>
            <TabSettings/>
        </div>
    </div>
}
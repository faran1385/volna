import "./Tabs.css"
import {TabHeader} from "./TabHeader/TabHeader.tsx";
import {TabSettings} from "./TabSettings/TabSettings.tsx";
import {TabProfile} from "./TabProfile/TabProfile.tsx";
import {TabOrders} from "./TabOrders/TabOrders.tsx";
import {TabPlan} from "./TabPlan/TabPlan.tsx";

export const Tabs = () => {

    return <div className={"w-full px-8 relative"}>
        <TabHeader/>
        <TabProfile/>
        <TabOrders/>
        <TabPlan/>
        <TabSettings/>
    </div>
}
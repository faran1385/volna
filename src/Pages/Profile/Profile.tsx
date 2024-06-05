import {HeadPages} from "../../components/ui/HeadPages/HeadPages.tsx";
import {Tabs} from "../../components/ui/Tabs/Tabs.tsx";

export const Profile = () => {
    return <main className={"pages pages--mobile xl:sticky pb-4"}>
        <HeadPages title='Profile' Items={[{text: "home", href: "/"}, {text: "Profile"}]}/>
        <Tabs/>
    </main>
}
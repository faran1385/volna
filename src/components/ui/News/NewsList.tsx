import { Title } from "../Title/Title.tsx"
import { Report } from "./Report/Resport.tsx"

export const NewsList = () => {
    return <>
        <div className="px-8">
            <Title title="News" textLink="See all" href="#" />
            <div className="my-5 gap-8 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                <Report title="Foo Fighters share new live version of ‘No Son Of Mine’" hasBackstage category="Music" timePassed={8} comments={68} img="https://volna.volkovdesign.com/img/posts/1.jpg" />
                <Report title="Tom Grennan ‘breaks the internet’ as fans overload servers during virtual gig" hasBackstage={false} category="Music" timePassed={3} comments={18} img="https://volna.volkovdesign.com/img/posts/2.jpg" />
                <Report title="Why do the Golden Globes always get it so wrong?" hasBackstage={false} category="Features" timePassed={9} comments={54} img="https://volna.volkovdesign.com/img/posts/3.jpg"/>
            </div>
        </div>
    </>
}
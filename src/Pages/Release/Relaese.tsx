import React from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import "./Release.css"
export const Relaese: React.FC = () => {
    return (
        <main className='pages pages--mobile'>
            <HeadPages title='Jason Aldean – Space Melody' Items={[{ text: "home", href: "/" }, { text: "releases" ,href:"./releases"},{text:"release"}]} />
        </main>
    )
}

import React from 'react'
import './News.css'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
export const News :React.FC = () => {
    return (
        <main className='pages pages--mobile'>
            <HeadPages title='news' Items={[{text:"home",href:"/"},{text:"news"}]}/>
            
        </main>
    )
}

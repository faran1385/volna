import React from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'

export const Releases  : React.FC = () => {
    return (
        <main className='pages pages--mobile'>
            <HeadPages title='releases' Items={[{text:"home",href:"/"}, {text:"releases"}]}/>
        </main>
    )
}

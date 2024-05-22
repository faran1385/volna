import React from 'react'
import './../ResponsivePages.css'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import { Filter } from '../../components/ui/Filter/Filter'
export const Artists = () => {
    return (
        <main className='pages pages--mobile'>
            <HeadPages title='artists' Items={[{text:"home", href:"/"},{text:"artists",href:""}]}/>
            <Filter placeholder={"search..."}/>
        </main>
    )
}

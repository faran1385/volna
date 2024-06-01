import React from 'react'
import './../ResponsivePages.css'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import {Filter } from '../../components/ui/Filter/Filter'
import { ProductItems } from '../../components/ui/Products/ProductItems/ProductItems'
import { BtnGreen } from '../../components/ui/BtnGreen/BtnGreen'
export const Products: React.FC = () => {
    return (
        <main className='pages pages--mobile xl:sticky pb-16'>
            <HeadPages title='store' Items={[{ text: "home", href: "/" }, { text: "store" }]} />
            <Filter
                placeholder={"search..."}
                DropItems={
                    [
                        {
                            boxId: "artists_list__drop", items:
                                [
                                    { text: "All artists", hasActive: true },
                                    { text: "Legacy artists" },
                                    { text: "Active artists" }
                                ]
                        },
                        {
                            boxId: "genres_list__drop", items:
                                [
                                    { text: "All genres", hasActive: true },
                                    { text: "Alternative" },
                                    { text: "Blues" },
                                    { text: "Classical" },
                                    { text: "Country" },
                                    { text: "Electronic" },
                                    { text: "Hip-Hop/Rap" },
                                    { text: "Indie" },
                                    { text: "Jazz" },
                                    { text: "Latino" },
                                    { text: "R&B/Soul" },
                                    { text: "Rock" },
                                ]
                        }
                    ]
                }
                RadioItems={{
                    items: [
                        "Featured",
                        "popular",
                        "newest",
                    ],
                    boxId: "checked_list__radio"
                }}
            />
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-6'>
                <ProductItems
                    hasNew
                    href='#'
                    srcImg='https://volna.volkovdesign.com/img/store/item1.jpg'
                    name='Vinyl Player'
                    price={'1 099'}
                />

                <ProductItems
                    href='#'
                    srcImg='https://volna.volkovdesign.com/img/store/item2.jpg'
                    name='Microphone R4'
                    price={'1 099'}
                />

                <ProductItems
                    hasNew
                    href='#'
                    srcImg='https://volna.volkovdesign.com/img/store/item3.jpg'
                    name='Music Blank'
                    price={'1 099'}
                />

                <ProductItems
                    href='#'
                    srcImg='https://volna.volkovdesign.com/img/store/item4.jpg'
                    name='Headphones ZR-991'
                    price={'1 099'}
                />

                <ProductItems
                    href='#'
                    srcImg='https://volna.volkovdesign.com/img/store/item5.jpg'
                    name='Piano'
                    price={'1 099'}
                />

                <ProductItems
                    href='#'
                    srcImg='https://volna.volkovdesign.com/img/store/item6.jpg'
                    name='Guitar'
                    price={'1 099'}
                />

                <ProductItems
                    href='#'
                    srcImg='https://volna.volkovdesign.com/img/store/item7.jpg'
                    name='Microphone R4s'
                    price={'1 099'}
                />

                <ProductItems
                    href='#'
                    srcImg='https://volna.volkovdesign.com/img/store/item8.jpg'
                    name='Microphone R4s'
                    price={'1 099'}
                />
            </div>
            <BtnGreen>
                load more
            </BtnGreen>
        </main>
    )
}

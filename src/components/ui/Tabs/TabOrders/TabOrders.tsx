import "./TabOrders.css"
import {Order} from "./Order/Order.tsx";
import {OrderHeader} from "./OrderHeader/OrderHeader.tsx";

export const TabOrders = () => {
    return <div className={"mt-8 tab px-8 rounded-xl overflow-x-auto"}
                style={{border: "1px solid var(--border-color)"}}>
        <OrderHeader/>
        <Order
            title={'Receipt'}
            subtitles={[{
                key: "Total cost:",
                value: "$290.99",
                additionalClassForValue: 'tab-modal__price'
            }, {
                key: 'Payment method:',
                value: 'Paypal'
            }]}

            texts={[{
                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            }]}
            rank={631}
            imgSrc={'https://volna.volkovdesign.com/img/store/item3.jpg'}
            name={'music blank'}
            date={'Aug 21, 2021'}
            quantity={17}
            totalPrice={67.83}
            hasBorder={true}
            status={'delivered'}
        />
        <Order
            title={'Receipt'}
            subtitles={[{
                key: "Total cost:",
                value: "$290.99",
                additionalClassForValue: 'tab-modal__price'
            }, {
                key: 'Payment method:',
                value: 'Paypal'
            }]}

            texts={[{
                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            }]}
            rank={632}
            imgSrc={'https://volna.volkovdesign.com/img/store/item3.jpg'}
            name={'music blank'}
            date={'Aug 21, 2021'}
            quantity={17}
            totalPrice={67.83}
            hasBorder={true}
            status={'canceled'}
        />
        <Order
            title={'Receipt'}
            subtitles={[{
                key: "Total cost:",
                value: "$290.99",
                additionalClassForValue: 'tab-modal__price'
            }, {
                key: 'Payment method:',
                value: 'Paypal'
            }]}

            texts={[{
                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            }]}
            rank={708}
            imgSrc={'https://volna.volkovdesign.com/img/store/item4.jpg'}
            name={'Headphones ZR-991'}
            date={'Aug 14, 2021'}
            quantity={1}
            totalPrice={199}
            hasBorder={true}
            status={'in-way'}
        />
        <Order
            title={'Receipt'}
            subtitles={[{
                key: "Total cost:",
                value: "$290.99",
                additionalClassForValue: 'tab-modal__price'
            }, {
                key: 'Payment method:',
                value: 'Paypal'
            }]}

            texts={[{
                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            }]}
            rank={750}
            imgSrc={'https://volna.volkovdesign.com/img/store/item1.jpg'}
            name={'Vinyl Player'}
            date={'Aug 5, 2021'}
            quantity={1}
            totalPrice={11899}
            hasBorder={false}
            status={'delivered'}
        />
    </div>
}
import {AboutCardPlan} from "../../AboutCard/AboutCardPlan/AboutCardPlan.tsx";

const cards = [
    {
        title: "free"
        , items: [
            {
                text: "Volna Originals",
                hasActive: true
            },
            {
                text: "Switch plans or cancel anytime",
                hasActive: true
            },
            {
                text: "Stream 65+ top Live",
                hasActive: false
            },
            {
                text: "Music channels",
                hasActive: false
            },
        ],
        price: 0,
        color: "green"
    },
    {
        title: "Starter"
        , items: [
            {
                text: "Volna Originals",
                hasActive: true
            },
            {
                text: "Switch plans or cancel anytime",
                hasActive: true
            },
            {
                text: "Stream 65+ top Live",
                hasActive: true
            },
            {
                text: "Music channels",
                hasActive: false
            },
        ],
        price: 14.99,
        color: "red"
    },
    {
        title: "Premium"
        , items: [
            {
                text: "Volna Originals",
                hasActive: true
            },
            {
                text: "Switch plans or cancel anytime",
                hasActive: true
            },
            {
                text: "Stream 65+ top Live",
                hasActive: true
            },
            {
                text: "Music channels",
                hasActive: true
            },
        ],
        price: 39.99,
        color: "purple"
    },
]

export const TabPlan = () => {
    return <div className='grid grid-cols-1 tab lg:grid-cols-3 mt-8 gap-6'>
        {
            cards.map((card, i) => {
                return <AboutCardPlan key={i} {...card}/>
            })
        }
    </div>
}
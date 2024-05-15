

type preView = {
    count: number,
    total: number
}

export const useHandleOnSlideChange = () => {

    const onSlideChangeHandler = (sliderSelector: string, buttonsSelector: string, preView: undefined | preView) => {
        const sliderNavItems = document.querySelectorAll(buttonsSelector)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const swiper = document.querySelector(sliderSelector) as any

        let activeIndex = (swiper.swiper.realIndex as number);

        if (preView) {
            activeIndex = Math.max(Math.floor(activeIndex / (preView.total / preView.count)), 0);
        }

        sliderNavItems.forEach((button, i) => {
            if (activeIndex === i) {
                button.classList.add("button--active")
            } else if (button.classList.contains("button--active")) {
                button.classList.remove("button--active")
            }
        })
    }

    return { onSlideChangeHandler }
}
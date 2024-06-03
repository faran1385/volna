import {gsap} from "gsap";

export const useModalActions = () => {
    // opens modal
    const openModal = (modal: string, parent: string, backdrop: string) => {
        gsap.timeline().to(backdrop, {
            opacity: 1,
            duration: .7,
            zIndex: 41
        }).to(parent, {
            opacity: 1,
            duration: .7,
            zIndex: 50
        }, '<').to(modal, {
            scale: 1,
            duration: .7,
            onComplete: () => {
                gsap.set(document.body, {
                    overflowY: "hidden"
                })
            }
        }, '<')
    }

    //closes modal
    const closeModal = (modal: string, parent: string, backdrop: string) => {
        gsap.timeline().to(backdrop, {
            opacity: 0,
            duration: .7,
            zIndex: -1
        }).to(parent, {
            opacity: 0,
            duration: .7,
            zIndex: -1
        }, '<').to(modal, {
            scale: .8,
            duration: .7,
            onComplete: () => {
                gsap.set(document.body, {
                    overflowY: "auto"
                })
            }
        }, '<')
    }

    //calls close by on blur on modal
    const modalBlur = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, modal: string, parent: string, backdrop: string) => {
        const modalParent = document.querySelector(parent) as HTMLDivElement
        if (e.target === modalParent) {
            closeModal(modal, parent, backdrop)
        }
    }
    return {modalBlur, closeModal, openModal}
}
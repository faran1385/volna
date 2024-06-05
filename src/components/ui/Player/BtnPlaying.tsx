import {useAppDispatch, useAppSelector} from "../../../app/store"
import {SET_PLAYING} from "../../../app/Player/Player"
import {FC, RefObject} from "react"

export const BtnPlaying: FC<{ audio: RefObject<HTMLAudioElement> }> = () => {
    const dispatch = useAppDispatch()
    const PlayerItems = useAppSelector((state) => state.player)

    const playHandler = () => {
        dispatch(SET_PLAYING(!PlayerItems.isPlaying))
    }

    return (
        <button onClick={playHandler} className="mx-2">
            {
                PlayerItems.isPlaying ?
                    <svg className="player__control" role="presentation" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path
                            d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"></path>
                    </svg>
                    :
                    <svg className="player__control" role="presentation" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path
                            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path>
                    </svg>
            }
        </button>
    )
}
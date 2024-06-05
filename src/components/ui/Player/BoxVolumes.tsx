import { Tooltip } from "@mui/material";
import React, { FC, RefObject, useState } from "react";

export const BoxVolumes: FC<{ audio: RefObject<HTMLAudioElement> }> = ({ audio }) => {
    const [volumes, setVolumes] = useState(false)
    const oninputSlider = (e: React.FormEvent<HTMLInputElement>) => {
        (e.target as HTMLInputElement).style.background = `linear-gradient(90deg,#25a56a ${(e.target as HTMLInputElement).value}%,#999999 ${(e.target as HTMLInputElement).value}%)`;
        if (audio && audio.current) {
            audio.current.volume = Number((e.target as HTMLInputElement).value) / 100
            if(audio.current.volume === 0){
                setVolumes(true)
            }else{
                setVolumes(false)
            }
        }
    }

    return (
        <div className="flex items-center">
            <button className="me-2">
                {volumes ?
                    <Tooltip title={"Unmute"} slotProps={{ popper: { modifiers: [{ name: "offset", options: { offset: [0, -4] } }] } }} arrow>
                        <svg className="player__control" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.91,12l1.8-1.79a1,1,0,0,0-1.42-1.42l-1.79,1.8-1.79-1.8a1,1,0,0,0-1.42,1.42L17.09,12l-1.8,1.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.79-1.8,1.79,1.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                        </svg>
                    </Tooltip>
                    :
                    <Tooltip title={"Mute"} slotProps={{ popper: { modifiers: [{ name: "offset", options: { offset: [0, -4] } }] } }} arrow>
                        <svg className="player__control" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.66,6.34a1,1,0,0,0-1.42,1.42,6,6,0,0,1-.38,8.84,1,1,0,0,0,.64,1.76,1,1,0,0,0,.64-.23,8,8,0,0,0,.52-11.79ZM16.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,16,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,18,12,4.06,4.06,0,0,0,16.83,9.17Z"></path>
                        </svg>
                    </Tooltip>
                }
            </button>
            <input className="w-20 player__volume" defaultValue={80} onInput={(e) => oninputSlider(e)} type="range" min="0" max="100" step="0.01" />
        </div>
    )
}

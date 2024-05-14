import "./Player.css"
import { ProcessInput } from "./ProcessInput";
import Tooltip from '@mui/material/Tooltip';
import { useRef } from "react";
export const Player = () => {

    const oninputSlider = (e: React.FormEvent<HTMLInputElement>) => {
        (e.target as HTMLInputElement).style.background = `linear-gradient(90deg,#25a56a ${(e.target as HTMLInputElement).value}%,#999999 ${(e.target as HTMLInputElement).value}%)`;
    }

    const player = useRef<null | HTMLDivElement>(null)
    const playerTrgger = useRef<null | HTMLButtonElement>(null)

    const triggerPlayer = () => {
        (player.current as HTMLDivElement).classList.toggle("translate-y-full");

        (playerTrgger.current as HTMLButtonElement).classList.toggle("player__tigger-translate")
    }

    return <>
        <div ref={player}
            className={`player ease-in transition-all duration-500 xl:translate-y-0 left-0 translate-y-full  transform-gpu ps-4 xl:ps-6 fixed bottom-0 p-4 flex flex-col justify-center`}>
            <div className="w-full flex justify-center" style={{ height: "100px" }}>
                <img src="https://volna.volkovdesign.com/img/covers/cover.svg" className="rounded-xl" />
            </div>
            <div className="flex px-2.5 justify-center flex-wrap pt-2">
                <b className="player__title break-all	">Epic Cinematic</b>
                <span className="text-fade">&nbsp; – &nbsp;</span>
                <span className="text-fade break-all">AudioPizza</span>
            </div>
            <div className="flex pt-2 justify-center items-center">
                <button className="mx-2">
                    <svg className="player__control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.28,3.43a3.23,3.23,0,0,0-3.29,0L8,8.84V6A3,3,0,0,0,2,6V18a3,3,0,0,0,6,0V15.16l9,5.37a3.28,3.28,0,0,0,1.68.47,3.24,3.24,0,0,0,1.61-.43,3.38,3.38,0,0,0,1.72-3V6.42A3.38,3.38,0,0,0,20.28,3.43ZM6,18a1,1,0,0,1-2,0V6A1,1,0,0,1,6,6Zm14-.42a1.4,1.4,0,0,1-.71,1.25,1.23,1.23,0,0,1-1.28,0L8.68,13.23a1.45,1.45,0,0,1,0-2.46L18,5.19A1.23,1.23,0,0,1,18.67,5a1.29,1.29,0,0,1,.62.17A1.4,1.4,0,0,1,20,6.42Z"></path>
                    </svg>
                </button>
                <button className="mx-2">
                    <svg className="player__control hidden" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"></path>
                    </svg>
                    <svg className="player__control" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path>
                    </svg>
                </button>
                <button className="mx-2">
                    <svg className="player__control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19,3a3,3,0,0,0-3,3V8.84L7,3.47a3.21,3.21,0,0,0-3.29,0A3.38,3.38,0,0,0,2,6.42V17.58a3.38,3.38,0,0,0,1.72,3A3.24,3.24,0,0,0,5.33,21,3.28,3.28,0,0,0,7,20.53l9-5.37V18a3,3,0,0,0,6,0V6A3,3,0,0,0,19,3ZM15.32,13.23,6,18.81a1.23,1.23,0,0,1-1.28,0A1.4,1.4,0,0,1,4,17.58V6.42a1.4,1.4,0,0,1,.71-1.25A1.29,1.29,0,0,1,5.33,5,1.23,1.23,0,0,1,6,5.19l9.33,5.58a1.45,1.45,0,0,1,0,2.46ZM20,18a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Z"></path>
                    </svg>
                </button>
            </div>
            <div className="pt-2 flex justify-center">
                <div className="flex items-center w-4/5">
                    <ProcessInput />
                    <span className="ms-3 text-fade text-sm">-01:50</span>
                </div>
            </div>
            <div className=" pt-3 flex justify-center">
                <div className="flex items-center justify-between w-4/5">
                    <div className="flex items-center">
                        <button className="me-2">
                            <Tooltip title={"Unmute"} slotProps={{ popper: { modifiers: [{ name: "offset", options: { offset: [0, -4] } }] } }} arrow>
                                <svg className="player__control hidden" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.91,12l1.8-1.79a1,1,0,0,0-1.42-1.42l-1.79,1.8-1.79-1.8a1,1,0,0,0-1.42,1.42L17.09,12l-1.8,1.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.79-1.8,1.79,1.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                                </svg>
                            </Tooltip>
                            <Tooltip title={"Mute"} slotProps={{ popper: { modifiers: [{ name: "offset", options: { offset: [0, -4] } }] } }} arrow>
                                <svg className="player__control" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.66,6.34a1,1,0,0,0-1.42,1.42,6,6,0,0,1-.38,8.84,1,1,0,0,0,.64,1.76,1,1,0,0,0,.64-.23,8,8,0,0,0,.52-11.79ZM16.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,16,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,18,12,4.06,4.06,0,0,0,16.83,9.17Z"></path>
                                </svg>
                            </Tooltip>
                        </button>
                        <input className="w-20 player__volume" defaultValue={80} onInput={(e) => oninputSlider(e)} type="range" min="0" max="100" step="0.01" />
                    </div>
                    <Tooltip title={"Playlist"} slotProps={{ popper: { modifiers: [{ name: "offset", options: { offset: [0, -4] } }] } }} arrow>
                        <a href="#">
                            <svg className="player__control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M15,13H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-4H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
                            </svg>
                        </a>
                    </Tooltip>
                </div>
            </div>
        </div>
        <div style={{ zIndex: 11 }} className="fixed w-full flex justify-center bottom-0 xl:hidden">
            <button ref={playerTrgger} onClick={triggerPlayer} className="flex player__trigger rounded-t-xl py-2 px-4">
                <svg className="w-6 h-6" fill="#25a56a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path>
                </svg>
                <span className="ms-2">Player</span>
            </button>
        </div>
    </>
}
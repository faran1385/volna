import { ContextPaly } from "../../../App";
import {useSelector,useDispatch} from 'react-redux'
import "./Player.css"
import { ProcessInput } from "./ProcessInput";
import Tooltip from '@mui/material/Tooltip';
import { FC, RefObject, useContext, useEffect, useRef, useState } from "react";
import { AppState } from "../../../app/store";
import { BtnPlaying } from "./BtnPlaying";
import { BoxVolums } from "./BoxVolums";
import { setPlayer } from "../../../app/Player/Player";
export const Player = () => {
    // const ContextPlaying = useContext(ContextPaly)
    const audio = useRef<HTMLAudioElement>(null);
    const player = useRef<null | HTMLDivElement>(null)
    const playerTrgger = useRef<null | HTMLButtonElement>(null)
    const dispatch = useDispatch()
    const PlayerItems = useSelector((state: AppState) => state.player)
    const triggerPlayer = () => {
        (player.current as HTMLDivElement).classList.toggle("translate-y-full");
        (playerTrgger.current as HTMLButtonElement).classList.toggle("player__tigger-translate")
    }

    return <>
        <div ref={player}
            className={`player xl:translate-y-0 left-0 translate-y-full  transform-gpu ps-4 xl:ps-6 fixed bottom-0 p-4 flex flex-col justify-center`}>
            <div className=" object-cover w-full flex justify-center" style={{ height: "100px" }}>
                <img loading="lazy" src={PlayerItems.img} className="rounded-xl player__img" />
            </div>
            <div className="flex px-2.5 justify-center flex-wrap pt-2">
                <b className="player__title break-all	">{PlayerItems.name}</b>
                <span className="text-fade">&nbsp; – &nbsp;</span>
                <span className="text-fade break-all">{PlayerItems.singer}</span>
            </div>
            <div className="flex pt-2 justify-center items-center">
                <button className="mx-2">
                    <svg className="player__control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20.28,3.43a3.23,3.23,0,0,0-3.29,0L8,8.84V6A3,3,0,0,0,2,6V18a3,3,0,0,0,6,0V15.16l9,5.37a3.28,3.28,0,0,0,1.68.47,3.24,3.24,0,0,0,1.61-.43,3.38,3.38,0,0,0,1.72-3V6.42A3.38,3.38,0,0,0,20.28,3.43ZM6,18a1,1,0,0,1-2,0V6A1,1,0,0,1,6,6Zm14-.42a1.4,1.4,0,0,1-.71,1.25,1.23,1.23,0,0,1-1.28,0L8.68,13.23a1.45,1.45,0,0,1,0-2.46L18,5.19A1.23,1.23,0,0,1,18.67,5a1.29,1.29,0,0,1,.62.17A1.4,1.4,0,0,1,20,6.42Z"></path>
                    </svg>
                </button>
                <BtnPlaying audio={audio} />
                <button className="mx-2">
                    <svg className="player__control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19,3a3,3,0,0,0-3,3V8.84L7,3.47a3.21,3.21,0,0,0-3.29,0A3.38,3.38,0,0,0,2,6.42V17.58a3.38,3.38,0,0,0,1.72,3A3.24,3.24,0,0,0,5.33,21,3.28,3.28,0,0,0,7,20.53l9-5.37V18a3,3,0,0,0,6,0V6A3,3,0,0,0,19,3ZM15.32,13.23,6,18.81a1.23,1.23,0,0,1-1.28,0A1.4,1.4,0,0,1,4,17.58V6.42a1.4,1.4,0,0,1,.71-1.25A1.29,1.29,0,0,1,5.33,5,1.23,1.23,0,0,1,6,5.19l9.33,5.58a1.45,1.45,0,0,1,0,2.46ZM20,18a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Z"></path>
                    </svg>
                </button>
            </div>
            <div className="pt-2 flex justify-center">
                <div className="flex items-center w-4/5">
                    <ProcessInput audio={audio} href={PlayerItems.href} />
                </div>
            </div>
            <div className=" pt-3 flex justify-center">
                <div className="flex items-center justify-between w-4/5">
                    <BoxVolums audio={audio} />
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



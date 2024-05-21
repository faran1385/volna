import { duration } from "@mui/material";
import "./Player.css"
import Tooltip from '@mui/material/Tooltip';
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { AppState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer, setPlaying } from "../../../app/Player/Player";
interface ProcessInputType {
    audio: RefObject<HTMLAudioElement> | null,
    href: string | undefined
}
export const ProcessInput = ({ audio, href }: ProcessInputType) => {
    const dispatch = useDispatch()
    const PlayerItems = useSelector((state: AppState) => state.player)
    const [processTooltipText, setProcessTooltipText] = useState('00:00');
    const [timer, setTimer] = useState<{ sec: string | number, min: string | number }>({ sec: 0, min: 0 });
    const [direction, setDirection] = useState<{ sec: string | number, min: string | number }>({ sec: 0, min: 0 });
    const [isOpen, setOpen] = useState(false);
    const oninputSlider = (e: React.FormEvent<HTMLInputElement>) => {
        (e.target as HTMLInputElement).style.background = `linear-gradient(90deg,#25a56a ${(e.target as HTMLInputElement).value}%,#999999 ${(e.target as HTMLInputElement).value}%)`;
        if (
            audio && audio.current
        ) {
            let changing = Number((e.target as HTMLInputElement).value) * audio.current?.duration / 100;
            audio.current.currentTime = changing
        }
    }

    const tooltipPositionRef = useRef<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const isMouseDown = useRef(false);
    const popperRef = useRef(null);
    const processInput = useRef<any>(null);

    const currentTime = useRef(0);
    const hasMouse = useRef(false);
    // to handle the tooltip in largscreens
    const handleMouseMove = (event: React.MouseEvent) => {

        if (popperRef.current != null && audio && audio.current) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (popperRef.current as any).update();
            //calculating the time
            const totalDuration = audio.current.duration;
            const target = (event.target as HTMLInputElement);
            const targetWidth = target.clientWidth;
            const targetOffsetLeft = target.offsetLeft;
            const mouseCurrentPosition = event.clientX;
            const percentage = (mouseCurrentPosition - targetOffsetLeft) / targetWidth;
            tooltipPositionRef.current = { x: event.clientX, y: event.clientY }
            if (tooltipPositionRef.current.x - (14 * (1 - percentage)) + 7 > targetWidth + targetOffsetLeft) {
                tooltipPositionRef.current.x = targetWidth + targetOffsetLeft - 7
            } else if (tooltipPositionRef.current.x - (14 * (1 - percentage)) + 7 < targetOffsetLeft) {
                tooltipPositionRef.current.x = targetOffsetLeft + 7
            }
            currentTime.current = Math.ceil(totalDuration * percentage - (14 * (1 - percentage)) + 7);

            if (currentTime.current > totalDuration) {
                currentTime.current = totalDuration;
            } else if (currentTime.current < 0) {
                currentTime.current = 0;
            }
            const minutes = Math.floor(currentTime.current / 60);
            const seconds = (currentTime.current % 60).toFixed(0);
            setProcessTooltipText(() => `${minutes}:${Number.parseInt(seconds) < 10 ? '0' : ''}${seconds}`);
        }
    };
    // to handle the tooltip in mobiles
    const handleOnInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {

        if (popperRef.current != null) {

            //calculating the time
            const totalDuration = 100;
            const target = (e.target as HTMLInputElement);
            const targetValue = Number(target.value) / 100;

            const targetWidth = target.clientWidth;
            const targetOffsetLeft = target.offsetLeft;
            const mouseCurrentPosition = targetWidth * targetValue + targetOffsetLeft - (14 * targetValue) + 7;

            if (!hasMouse.current) {
                currentTime.current = Math.ceil(totalDuration * targetValue);
            }

            const minutes = Math.floor(currentTime.current / 60);
            const seconds = (currentTime.current % 60).toFixed(0);
            setProcessTooltipText(() => `${minutes}:${Number.parseInt(seconds) < 10 ? '0' : ''}${seconds}`);
            tooltipPositionRef.current = { x: mouseCurrentPosition, y: tooltipPositionRef.current.y };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (popperRef.current as any).update();
        }
    }, [])
    useEffect(() => {
        const handleEvent = (e: any) => {
            if (e.srcElement && !e.srcElement.classList.contains("player__process")) {
                setOpen(false)
                isMouseDown.current = false
            }
        }
        window.addEventListener("pointerdown", handleEvent)
        if (audio && audio.current) {
            const minutes = Math.abs(Math.floor(audio.current.duration / 60));
            const seconds = Math.floor((audio.current.currentTime % 60) - (audio.current.duration % 60));
            const secToNumber = Math.abs(seconds) < 10 ? "0" + Math.abs(seconds) : Math.abs(seconds)
            setTimer({ sec: secToNumber, min: minutes });
        }
        // dispatch(
        //     setPlayer(
        //         {
        //             img:"https://volna.volkovdesign.com/img/covers/cover.svg",
        //             href:"http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3",
        //             name:"Epic Cinematic",
        //             singer:"AudioPizza",
        //         }
        //     )
        // )
        return () => {
            window.removeEventListener("pointerdown", handleEvent)
        }
    }, [])
    useEffect(() => {
        if (audio && audio.current) {
            if (PlayerItems.paused) {
                audio.current.play()
            } else {
                audio.current.pause()
            }
        }
    }, [PlayerItems.paused]);
    return <>
        <audio ref={audio} onLoadedData={() => {
            if (audio && audio.current) {
                const minutes = Math.floor(audio.current.currentTime / 60) - Math.floor(audio.current.duration / 60);
                const seconds = Math.floor((audio.current.currentTime % 60) - (audio.current.duration % 60));
                // const secondsToNumber  = Number(Math.abs(seconds) < 10 ? "0" + Math.abs(seconds) : Math.abs(seconds))
                setDirection({ sec: Math.abs(seconds), min: Math.abs(minutes) })
            }
        }}
            onEnded={() => {
                dispatch(
                    setPlaying({
                        paused: !PlayerItems.paused
                    })
                )
                if (audio && audio.current) {
                    audio.current.currentTime = 0
                }
            }}
            onTimeUpdate={() => {
                if (audio && audio.current && processInput && processInput.current) {
                    console.log(audio.current.currentTime % 3600 / 60)
                    const minutes = Math.ceil(audio.current.currentTime / 60 - audio.current.duration / 60);
                    const seconds =
                        audio.current.duration % 60 - audio.current.currentTime % 60 > 0 ?
                            Math.floor((audio.current.currentTime % 60) - (audio.current.duration % 60))
                            :
                            Math.floor((audio.current.currentTime % 60) - audio.current.duration % 60 - 60);
                    // const secondsToNumber  Math.abs(seconds) : Math.abs(seconds)
                    setTimer({ sec: Math.abs(seconds), min: Math.abs(minutes) })
                    setDirection({ sec: 0, min: 0 })
                    currentTime.current = audio.current.currentTime
                    processInput.current.value = currentTime.current / audio.current.duration * 100
                    processInput.current.style.background = `linear-gradient(90deg,#25a56a ${currentTime.current / audio.current.duration * 100}%,#999999 ${currentTime.current / audio.current.duration * 100}%)`;
                }
            }} src={href}></audio>
        <Tooltip
            title={processTooltipText}
            placement="top"
            arrow
            open={isOpen}
            style={{ zIndex: 100000000 }}
            onClose={() => setOpen(false)}
            PopperProps={{
                popperRef,
                anchorEl: {
                    getBoundingClientRect: () => {
                        return new DOMRect(
                            tooltipPositionRef.current.x,
                            processInput.current!.getBoundingClientRect().y,
                            0,
                            0,
                        );
                    },
                },
            }}
        >
            <input ref={processInput} onMouseUp={() => isMouseDown.current = false} onMouseMove={(e) => {
                hasMouse.current = true;
                handleMouseMove(e);
            }} onPointerMove={() => setOpen(true)} className="player__process flex flex-grow" defaultValue={0} onInput={(e) => {
                oninputSlider(e);
                if ('ontouchstart' in window) {
                    handleOnInput(e)
                }
            }} type="range" min="0" max="100" step="0.01" />
        </Tooltip>
        <span className="ms-3 text-fade text-sm">-{direction.sec === 0 ? `${timer.min < "10" ? "0" + timer.min : timer.min}:${timer.sec < "10" ? "0" + timer.sec : timer.sec}` : `${direction.min < "10" ? "0" + direction.min : timer.min}:${direction.sec < "10" ? "0" + direction.sec : direction.sec}`}</span>
    </>
}
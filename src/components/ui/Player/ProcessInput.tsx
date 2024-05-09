import "./Player.css"
import Tooltip from '@mui/material/Tooltip';
import { useCallback, useEffect, useRef, useState } from "react";
export const ProcessInput = () => {

    const [processTooltipText, setProcessTooltipText] = useState('00:00');
    const [isOpen, setOpen] = useState(false);

    const oninputSlider = (e: React.FormEvent<HTMLInputElement>) => {
        (e.target as HTMLInputElement).style.background = `linear-gradient(90deg,#25a56a ${(e.target as HTMLInputElement).value}%,#999999 ${(e.target as HTMLInputElement).value}%)`;
    }

    const tooltipPositionRef = useRef<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const isMouseDown = useRef(false);
    const popperRef = useRef(null);
    const processInput = useRef<HTMLInputElement>(null);
    // to handle the tooltip in largscreens
    const handleMouseMove = (event: React.MouseEvent) => {

        if (popperRef.current != null) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (popperRef.current as any).update();
            //calculating the time
            const totalDuration = 110;
            const target = (event.target as HTMLInputElement);
            const targetWidth = target.clientWidth;
            const targetOffsetLeft = target.offsetLeft;
            const mouseCurrentPosition = event.clientX;
            const percentage = (mouseCurrentPosition - targetOffsetLeft) / targetWidth;
            const mousePercentage = (mouseCurrentPosition - targetOffsetLeft - (14 * (1 - percentage)) + 7) / targetWidth;
            tooltipPositionRef.current = { x: mousePercentage >= 1 ? targetOffsetLeft + targetWidth - 7 : mousePercentage <= 0 ? targetOffsetLeft + 7 : event.clientX, y: event.clientY }
            const currentTime = Math.max(Math.min(totalDuration * percentage - (14 * (1 - percentage)) + 7, totalDuration), 0);
            const minutes = Math.floor(currentTime / 60);
            const seconds = (currentTime % 60).toFixed(0);
            setProcessTooltipText(() => `${minutes}:${Number.parseInt(seconds) < 10 ? '0' : ''}${seconds}`);
        }
    };
    // to handle the tooltip in mobiles
    const handleOnInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {

        if (popperRef.current != null) {

            //calculating the time
            const totalDuration = 110;
            const target = (e.target as HTMLInputElement);
            const targetValue = Number(target.value) / 100;

            const targetWidth = target.clientWidth;
            const targetOffsetLeft = target.offsetLeft;
            const mouseCurrentPosition = targetWidth * targetValue + targetOffsetLeft - (14 * targetValue) + 7;
            const currentTime = totalDuration * targetValue;
            const minutes = Math.floor(currentTime / 60);
            const seconds = (currentTime % 60).toFixed(0);
            setProcessTooltipText(() => `${minutes}:${Number.parseInt(seconds) < 10 ? '0' : ''}${seconds}`);
            tooltipPositionRef.current = { x: mouseCurrentPosition, y: tooltipPositionRef.current.y };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (popperRef.current as any).update();
        }

    }, [])


    useEffect(() => {
        const handleEvent = (e) => {
            if (e.srcElement && !e.srcElement.classList.contains("player__process")) {
                setOpen(false)
                isMouseDown.current = false
            }

        }
        window.addEventListener("pointerdown", handleEvent)

        return () => {
            window.removeEventListener("pointerdown", handleEvent)
        }
    }, [])


    return <>
        <Tooltip
            title={processTooltipText}
            placement="top"
            arrow
            open={isOpen}
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
            <input onMouseUp={(e) => {
                isMouseDown.current = false
                handleMouseMove(e);
            }} onMouseMove={handleMouseMove} onDrag={() => handleOnInput(e)} onPointerMove={() => setOpen(true)} ref={processInput} className="player__process flex flex-grow" defaultValue={0} onInput={(e) => {
                oninputSlider(e);
                if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                    handleOnInput(e);
                }
            }} type="range" min="0" max="100" step="0.01" />
        </Tooltip>
    </>
}
import React, {useRef} from "react";

export const useInputHandler = () => {

    const maskedValue = useRef('__-__-__-__')


    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        // initializing
        const input = e.target as HTMLInputElement;
        const digits = input.value.replace(/\D/g, '');
        let caretPos = input.selectionStart as number;

        if (digits.length <= 8 && !isNaN(+((e.nativeEvent as any).data))) {

            //checking if adding or removing on - char to set caret position correctly
            let isOnDash = false;

            //converting to array
            const maskedArray = maskedValue.current.split('')
            if ((e.nativeEvent as any).inputType === "insertText") {
                //replacing _ with data
                if (maskedArray[(input.selectionStart as number) - 1] === "-") {
                    isOnDash = true
                    maskedArray[(input.selectionStart as number)] = (e.nativeEvent as any).data
                } else {
                    maskedArray[(input.selectionStart as number) - 1] = (e.nativeEvent as any).data
                }
            } else if ((e.nativeEvent as any).inputType === "deleteContentBackward") {
                //replacing data with _
                if (maskedArray[(input.selectionStart as number)] === "-") {
                    maskedArray[(input.selectionStart as number) - 1] = '_'
                    isOnDash = true
                } else {
                    maskedArray[(input.selectionStart as number)] = '_'
                }
            }
            // positioning based on inputType and isOnDash
            if ((e.nativeEvent as any).inputType === "insertText" && isOnDash) {
                caretPos += 1;
            } else if ((e.nativeEvent as any).inputType === "deleteContentBackward" && isOnDash) {
                caretPos -= 1;
            }

            //set values
            input.value = maskedArray.join('');
            maskedValue.current = maskedArray.join('');
        } else {
            caretPos -= 1;
            input.value = maskedValue.current;
        }

        input.setSelectionRange(caretPos, caretPos)
    }

    return {inputHandler}
}
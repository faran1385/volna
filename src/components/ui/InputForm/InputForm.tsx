import React from 'react'
import './InputForm.css'
interface InputFormType {
    hasTextarea ?: boolean,
    classInput?:string,
    classTextarea?:string,
    placeholder : string,
}
export const InputForm: React.FC<InputFormType> = ({placeholder,hasTextarea,classInput,classTextarea }) => {
    if(!hasTextarea){
        return (
            <input className={`input-form px-5 outline-none ${classInput}`} type="text" placeholder={placeholder}/>
        )
    }else{
        return (
            <textarea className={`input-form outline-none py-4 px-5 ${classTextarea}`} placeholder={placeholder}></textarea>
        )
    }
}

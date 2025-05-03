import React from 'react'
import { buttonProps } from '../types'
const animationStyle = "transition-all ease-in-out duration-200"
const commonStyle = "px-4 py-1.5 border-1 border-rounded rounded-full text-md capitalize"
const Button: React.FC<buttonProps> = ({ name, style, children }) => {
    return (
        <>
            <button className={`${commonStyle} ${animationStyle} ${style}`}>{name} {children}</button>
        </>
    )
}

export default Button
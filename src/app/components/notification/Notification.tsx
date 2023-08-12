import React from 'react'
import { useState } from 'react';

const hideStyle = { opacity: 0, transform: 'translateY(0px) translateX(-50%)' }
const showStyle = { opacity: 1, transform: 'translateY(5px) translateX(-50%)' }

interface Props {
    visible?: boolean
    text: string
}

export const Notification = ({ visible, text }: Props) => {
    return (
        <div
            style={visible ? showStyle : hideStyle}
            className={`pointer-events-none fixed left-1/2 top-2 transition-all py-3 px-8 rounded-full drop-shadow-2xl bg-gray-100 border-2 border-gray-200`}>
            {text}
        </div>
    )
}

export default Notification

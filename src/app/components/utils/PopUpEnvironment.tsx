'use client'
import React, { useRef } from "react"
import useOutsideAlerter from "../subscription/utils/outsideAlerter";

interface PopUpEnvironment {
    children?: React.ReactElement
}

const PopUpEnvironment = ({ children }: PopUpEnvironment) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div
            style={{ backgroundColor: 'rgba(0,1,0,.3)' }}
            className='fixed flex justify-center items-center w-full h-full left-0 top-0 z-20'>
            <div
                className="w-fit"
                ref={wrapperRef}>
                {children}
            </div>
        </div>
    )
}

export default PopUpEnvironment
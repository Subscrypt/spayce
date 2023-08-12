"use client"
import React from "react"
import logo from '../../public/img/logo.json'
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export default function Loading() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-40 h-40">
                <Lottie animationData={logo} autoplay={true} loop={true} />
            </div>
        </div>
    )
}
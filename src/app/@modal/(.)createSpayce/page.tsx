'use client'
import React, { useState, useRef, useEffect } from "react"
import PopUpEnvironment from "../../components/utils/PopUpEnvironment"
import SubscriptionItem from "../../components/createSubscription/subscriptionItem"
import logoWhite from '../../../../public/img/logo_white.json'
import Lottie, { LottieRefCurrentProps } from "lottie-react";

const handleCreateSpayce = () => {

}

const fetchProviders = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/plans')
    const providers = res.json();
    return providers;
}

export default async function Page() {
    const [chosen, setChosen] = useState(0);
    const [providers, setProviders] = useState({ a: 'a' });
    useEffect(() => {
        const getProviders = async () => {
            const provs = await fetchProviders();
            setProviders(provs);
        }
        getProviders();
        console.log('gay')
    })

    const lottieRef: React.MutableRefObject<LottieRefCurrentProps | null> = useRef(null);
    useEffect(() => {
        if (chosen !== 0) {
            lottieRef.current?.play();
        }
    })
    return (
        <PopUpEnvironment>
            <div className="flex flex-col items-center sm:w-[600px] w-[300px] gap-8 p-8 bg-white rounded-2xl">
                <div className="font-bold text-3xl">
                    New Spayce is Waiting for You
                </div>
                <div className="pb-4">
                    <div className="pb-2 text-center font-semibold">
                        Choose your plan
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center flex-wrap">
                        <SubscriptionItem id={1} name="Spotify" description="Family Plan" logo="kek" onClick={(id: number) => { setChosen(id) }} />
                        <SubscriptionItem id={2} name="Spotify" description="Family Plan" logo="kek" onClick={(id: number) => { setChosen(id) }} />
                        <SubscriptionItem id={3} name="Spotify" description="Family Plan" logo="kek" onClick={(id: number) => { setChosen(id) }} />
                        <SubscriptionItem id={4} name="Spotify" description="Family Plan" logo="kek" onClick={(id: number) => { setChosen(id) }} />
                        <SubscriptionItem id={5} name="Spotify" description="Family Plan" logo="kek" onClick={(id: number) => { setChosen(id) }} />
                        <SubscriptionItem id={6} name="Spotify" description="Family Plan" logo="kek" onClick={(id: number) => { setChosen(id) }} />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div>{JSON.stringify(providers)}</div>
                    <div className={`${chosen === 0 ? 'opacity-0' : 'opacity-60'} w-full text-center uppercase text-sm font-semibold`}>Spotify Family Plan is for 5 members</div>
                    <button className={`${chosen === 0 ? 'opacity-30' : 'opacity-100'} flex flex-row gap-1 items-center justify-center transition-opacity p-4 bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white rounded-xl`}>

                        <div
                            onClick={handleCreateSpayce}
                            style={{ transform: chosen === 0 ? 'translateX(-16px)' : 'translateX(0px)' }}
                            className="flex flex-row gap-1 items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.5,0,0,1)]">
                            <div
                                style={{ opacity: chosen === 0 ? 0 : 1 }}
                                className="w-6 overflow-hidden h-6 transition-all duration-1000"><Lottie lottieRef={lottieRef} animationData={logoWhite} autoplay={false} loop={false} />
                            </div>
                            Create Spayce
                        </div>
                    </button>
                </div>
            </div>
        </PopUpEnvironment>
    )
}
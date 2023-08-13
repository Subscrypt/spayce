'use client'
import React, { useState, useRef, useEffect } from "react"
import PopUpEnvironment from "../../components/utils/PopUpEnvironment"
import SubscriptionItem from "../../components/createSubscription/subscriptionItem"
import logoWhite from '../../../../public/img/logo_white.json'
import logo from '../../../../public/img/logo.json'
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useAccountAbstraction } from "../../store/safe/accountAbstractionContext";
import { User, Subscription } from "../../types";
import { useRouter } from "next/navigation"


interface CompanyProvider {
    id: number
    name: string
    address: string
    icon: string
}

interface ProviderElement {
    id: number
    name: string
    providerId: number
    max_users: number
    provider: CompanyProvider
}

const fetchProviders = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/plans')
    const providers = res.json();
    return providers;
}

interface FetchData {
    planId: number;
    userId: number;
}

const fetchUser = async (address: string) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/' + address)
    const user = await res.json();
    return user;
}

const fetchCreateSpayce = async (data: FetchData) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/subscriptions", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const spayce = res.json();
    return spayce;
}

export default function Page() {
    const router = useRouter();
    const { loginWeb3Auth, logoutWeb3Auth, ownerAddress, isAuthenticated, safeSelected, chainId } = useAccountAbstraction()
    const [chosen, setChosen] = useState(0);
    const [subChosen, setSubChosen] = useState(1);
    const [providers, setProviders] = useState<ProviderElement[] | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (providers === null) {
            const getProviders = async () => {
                setLoading(true);
                const provs = await fetchProviders();
                setProviders(provs);
            }
            getProviders()
        } else {
            setLoading(false)
        };
    })

    const lottieRef: React.MutableRefObject<LottieRefCurrentProps | null> = useRef(null);
    useEffect(() => {
        if (chosen !== 0) {
            lottieRef.current?.play();
        }
    })

    const handleCreateSpayce = async () => {
        const user: User = await fetchUser(ownerAddress as string);
        const data = {
            planId: chosen,
            userId: user.id,
        }
        const newSpayce: Subscription = await fetchCreateSpayce(data);
        return router.push('/subscriptions/' + newSpayce.id)
    }

    return (
        <PopUpEnvironment>
            <div className="flex flex-col items-center sm:w-[600px] w-[300px] gap-8 p-8 bg-white rounded-2xl">
                <div className="font-bold text-3xl">
                    New Spayce is Waiting for You
                </div>
                {loading ? <div className="w-20 h-20"><Lottie animationData={logo} autoplay={true} loop={true} /></div>
                    :
                    <div className="pb-4">
                        <div className="pb-2 text-center font-semibold">
                            Choose your plan
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center flex-wrap">
                            {providers ? providers.map((elem, key) => (
                                <SubscriptionItem id={elem.id} key={key} name={elem.provider.name} description={elem.name} logo={elem.provider.icon} onClick={(id: number) => { setChosen(id); setSubChosen(id) }} />
                            )) : null}

                        </div>
                    </div>
                }
                <div className="flex flex-col gap-2">
                    <div className={`${chosen === 0 ? 'opacity-0' : 'opacity-60'} w-full text-center uppercase text-sm font-semibold`}>{providers ? providers[subChosen - 1].provider.name + ' ' + providers[subChosen - 1].name + " is for " + providers[subChosen - 1].max_users + " members" : null}</div>
                    <button
                        onClick={handleCreateSpayce}
                        className={`${chosen === 0 ? 'opacity-30' : 'opacity-100'} flex flex-row gap-1 items-center justify-center transition-opacity p-4 bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white rounded-xl`}>
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
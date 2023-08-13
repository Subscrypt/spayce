'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SubscriptionInfo } from '@/app/types';

import useOutsideAlerter from './utils/outsideAlerter';
import PriceElem from '../PriceElem'
import FullSubscriber from './subscribers/FullSubscriber'
import { usePathname } from 'next/navigation';
import Notification from '../notification/Notification';
import SubsBilling from './subsBilling/SubsBilling'
import PopUpEnvironment from '../utils/PopUpEnvironment'
import { Subscription, User } from "../../types";
import path from 'path';
import { useAccountAbstraction } from '@/app/store/safe/accountAbstractionContext';


const fetchSubsData = async (path: string) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    const cards = await res.json();
    return cards
}

const fetchUser = async (address: string) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/' + address)
    const user = await res.json();
    return user;
}

const fetchJoin = async (address: string, id: number) => {
    const res = await fetch((process.env.NEXT_PUBLIC_API_URL + '/users/' + address + '/subscriptions/' + id + '/apply'), {
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
        body: JSON.stringify({}), // body data type must match "Content-Type" header
    })
    const join = await res.json()
    return join
}

const fetchLeave = async (address: string, id: number) => {
    const res = await fetch((process.env.NEXT_PUBLIC_API_URL + '/users/' + address + '/subscriptions/' + id + '/leave'), {
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
        body: JSON.stringify({}), // body data type must match "Content-Type" header
    })
    const join = await res.json()
    return join
}

const PopUp = () => {
    const { loginWeb3Auth, logoutWeb3Auth, ownerAddress, isAuthenticated, safeSelected, chainId } = useAccountAbstraction()
    const [subs, setSubs] = useState<Subscription | null>(null);
    const [user, setUser] = useState<User | null>(null)
    const pathName = usePathname();
    const handleLinkCopy = () => {
        const link = 'https://spayce.us' + pathName;
        navigator.clipboard.writeText(link)
        setVisible(true);
        setTimeout(() => setVisible(false), 1500)
    }

    const [visible, setVisible] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getSubs = async (path: string) => {
            if ((subs === null || user === null) && ownerAddress !== '') {
                setLoading(true);
                const newSubs = await fetchSubsData(path as string);
                const newUser = await fetchUser(ownerAddress as string);
                setUser(newUser)
                setSubs(newSubs);
            }
            setLoading(false);
        }
        getSubs(pathName ? pathName : '');
    })
    console.log(subs)
    console.log(user)

    const handleJoin = async () => {
        const newJoin = await fetchJoin(ownerAddress as string, subs?.id as number)
        setSubs(null)
        setUser(null)
    }

    const handleLeave = async () => {
        const newLeave = await fetchJoin(ownerAddress as string, subs?.id as number)
        setSubs(null)
        setUser(null)
    }

    return (
        <PopUpEnvironment>
            <div
                className='bg-white flex flex-col rounded-2xl p-3 gap-2'>
                <div className="flex flex-row items-start justify-between gap-3 mb-2">
                    <div className="flex flex-row items-center justify-between gap-3 mb-2">
                        <img className="h-20 w-20 bg-slate-600 rounded-xl" src={subs && subs.plan.provider && subs.plan.provider.icon ? subs.plan.provider.icon : ''} />
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-2xl">{subs && subs.plan.provider ? subs.plan.provider.name : ''}</span>
                            <span className="opacity-50">{subs && subs.plan.provider ? subs.plan.name : ''}</span>
                        </div>
                    </div>
                    <button onClick={handleLinkCopy} className='py-3 text-xs px-4 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 font-semibold text-white rounded-xl'>Share Link</button>
                </div>
                <div className="flex flex-row sm:w-fit items-center justify-between px-2 mb-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-start gap-8">
                            <PriceElem head={`Started`} info={subs?.createdAt ? subs?.createdAt.toString().slice(0, 10) : 'null'} />
                            <PriceElem head={`Next Renewal`} info={subs?.plan.renewalDate ? subs?.plan.renewalDate.toString().slice(0, 10) : "null"} />
                            {/* <PriceElem head={`Ends`} info={`14.13.12`} /> */}
                        </div>
                        <div className="flex flex-row gap-8">
                            <PriceElem head={`Overall`} info={`${subs?.plan.price}`} coin={`ETH`} />
                            <PriceElem head={`Individual`} info={`${subs?.plan.price && subs?.members.filter(e => e.id !== -1).length !== 0 ? subs?.plan.price / (subs?.members.filter(e => e.id !== -1).length) : subs?.plan.price}`} coin={`ETH`} />
                            {subs?.plan.max_users ? <PriceElem head={`Lowest Possible`} info={`${subs && subs.plan.max_users ? subs.plan.price / subs.plan.max_users : ''}`} coin={`ETH`} /> : null}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col'>
                        <div className='w-full flex flex-col items-start text-xs uppercase font-semibold mb-1'><span className='ml-2 opacity-50'>Subscribers</span></div>
                        <div className='grid grid-cols-2 gap-1 justify-between p-1 bg-gray-100 rounded-xl'>
                            {subs?.members.map((elem, key) => <><FullSubscriber key={key} user={elem?.user?.name ? elem.user.name : elem.user.address} message={elem.accepted ? elem.accepted : false} /></>)}
                        </div>
                    </div>
                    <div className='flex flex-col mb-6'>
                        <div className='w-full flex flex-col items-start text-xs uppercase font-semibold mb-1'><span className='ml-2 opacity-50'>Billing history</span></div>
                        <div className='flex flex-col border-gray-100 h-32 overflow-scroll gap-1 p-1 bg-gray-100 rounded-xl'>
                            {subs ? subs.payments.map((el, ke) =>
                                <SubsBilling key={ke} user={el.user?.name ? el.user.name : el.user?.address as string} date={el.createdAt.toString().slice(0, 10)} price={el.amount} />)
                                : ''}
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-1 justify-between w-full text-sm'>
                    {isAuthenticated && subs?.members.filter(e => e.user.id === user?.id).length !== 0 ? <button onClick={handleLeave} className='p-4 bg-red-100 hover:bg-red-200 active:bg-red-300 font-semibold rounded-xl'>Leave Subscription</button> : null}
                    {isAuthenticated && subs?.members.filter(e => e.user.id === user?.id).length === 0 ? <button onClick={handleJoin} className='p-4 bg-green-400 hover:bg-green-500 active:bg-green-600 font-semibold text-white rounded-xl'>Join Subscription</button> : null}
                    {!isAuthenticated ? <button className='p-4 bg-green-400 hover:bg-green-500 active:bg-green-600 font-semibold text-white rounded-xl'>Log In to Join</button> : null}
                    {isAuthenticated && subs?.members.filter(e => e.user.id === user?.id).length !== 0 && !subs?.members.filter(e => e.user.id === user?.id)[0].accepted ? <button className='p-4 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 font-semibold text-white rounded-xl'>Approve Contract</button> : null}
                </div>
                <Notification visible={visible} text="Link Copied" />
            </div>
        </PopUpEnvironment>
    )
}



export default PopUp
'use client'
import React, { useRef } from 'react'
import { SubscriptionInfo } from '../../types';

import useOutsideAlerter from '../../components/subscription/utils/outsideAlerter';
import PriceElem from '../../components/PriceElem'
import FullSubscriber from '../../components/subscription/subscribers/FullSubscriber'

interface PageProps {
    params: SubscriptionInfo,
}


const Home = ({ params }: PageProps) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div
            ref={wrapperRef}
            className='bg-white flex flex-col rounded-2xl gap-2'>
            <div className="flex flex-row items-start justify-between gap-3 mb-2">
                <div className="flex flex-row items-center justify-between gap-3 mb-2">
                    <img className="h-20 w-20 bg-slate-600 rounded-xl" src={params.icon} />
                    <div className="flex flex-col items-start">
                        <span className="font-bold text-2xl">{params.name}Netflix</span>
                        <span className="opacity-50">{params.description}Family plan</span>
                    </div>
                </div>
                <button className='py-3 text-xs px-4 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 font-semibold text-white rounded-xl'>Share Link</button>
            </div>
            <div className="flex flex-row sm:w-fit items-center justify-between gap-8">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-start gap-1">
                        <PriceElem head={`Started`} info={`14.13.12`} />
                        <PriceElem head={`Next Renewal`} info={`14.13.12`} />
                        <PriceElem head={`Ends`} info={`14.13.12`} />
                    </div>
                    <div className="flex flex-row gap-1">
                        <PriceElem head={`Overall`} info={`${params.price}`} coin={`${params.coin}`} />
                        <PriceElem head={`Individual`} info={`${params.price}`} coin={`${params.coin}`} />
                        <PriceElem head={`Lowest Possible`} info={`${params.price}`} coin={`${params.coin}`} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='grid grid-cols-2 gap-1 justify-between p-1 bg-gray-100 rounded-xl'>
                    <FullSubscriber /> <FullSubscriber user='Andrey Ezhov' /> <FullSubscriber user='Andrey Ezhov' message='Kek' avatar='s' />
                </div>
            </div>
            <div className='flex flex-col mb-10'>
                <div className='w-full flex flex-col items-end text-xs uppercase font-semibold mb-1'><span className='ml-3 opacity-50'>Billing history</span></div>
                <div className='grid grid-cols-1 border-2 border-gray-100 h-40 overflow-scroll gap-1 justify-between p-1 bg-gray-100 rounded-xl'>
                    <FullSubscriber />
                    <FullSubscriber />
                    <FullSubscriber />
                    <FullSubscriber />
                    <FullSubscriber />
                </div>
            </div>
            <div className='flex flex-row gap-1 justify-between w-full text-sm'>
                <button className='p-4 bg-red-100 hover:bg-red-200 active:bg-red-300 font-semibold rounded-xl'>Leave Subscription</button>
                <button className='p-4 bg-green-400 hover:bg-green-500 active:bg-green-600 font-semibold text-white rounded-xl'>Join Subscription</button>
                <button className='p-4 bg-green-400 hover:bg-green-500 active:bg-green-600 font-semibold text-white rounded-xl'>Log In to Join</button>
                <button className='p-4 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 font-semibold text-white rounded-xl'>Approve Contract</button>
            </div>
        </div>
    )
}

interface PopUpEnvironment {
    children?: React.ReactElement
}

const PopUpEnvironment = ({ children }: PopUpEnvironment) => {
    return (
        <div
            style={{ backgroundColor: 'rgba(0,1,0,.3)' }}
            className='fixed flex justify-center items-center w-full h-full left-0 top-0 z-20'>
            {children}
        </div>
    )
}

export default Home
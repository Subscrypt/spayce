'use client'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SubscriptionInfo } from '@/app/types';

import useOutsideAlerter from './utils/outsideAlerter';
import PriceElem from '../PriceElem'
import FullSubscriber from './subscribers/FullSubscriber'
import { usePathname } from 'next/navigation';
import Notification from '../notification/Notification';
import SubsBilling from './subsBilling/SubsBilling'
import PopUpEnvironment from '../utils/PopUpEnvironment'



const PopUp = ({
    icon,
    name,
    description,
    price,
    coin,
    status,
    renewalDate,
}: SubscriptionInfo) => {
    const pathName = usePathname();
    const handleLinkCopy = () => {
        const link = 'https://subscrypt.vercel.com' + pathName;
        navigator.clipboard.writeText(link)
        setVisible(true);
        setTimeout(() => setVisible(false), 1500)
    }

    const [visible, setVisible] = useState(false);

    return (
        <PopUpEnvironment>
            <div
                className='bg-white flex flex-col rounded-2xl p-3 gap-2'>
                <div className="flex flex-row items-start justify-between gap-3 mb-2">
                    <div className="flex flex-row items-center justify-between gap-3 mb-2">
                        <img className="h-20 w-20 bg-slate-600 rounded-xl" src={icon} />
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-2xl">{name}Netflix</span>
                            <span className="opacity-50">{description}Family plan</span>
                        </div>
                    </div>
                    <button onClick={handleLinkCopy} className='py-3 text-xs px-4 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 font-semibold text-white rounded-xl'>Share Link</button>
                </div>
                <div className="flex flex-row sm:w-fit items-center justify-between px-2 mb-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-start gap-8">
                            <PriceElem head={`Started`} info={`14.13.12`} />
                            <PriceElem head={`Next Renewal`} info={`14.13.12`} />
                            <PriceElem head={`Ends`} info={`14.13.12`} />
                        </div>
                        <div className="flex flex-row gap-8">
                            <PriceElem head={`Overall`} info={`${price}`} coin={`${coin}`} />
                            <PriceElem head={`Individual`} info={`${price}`} coin={`${coin}`} />
                            <PriceElem head={`Lowest Possible`} info={`${price}`} coin={`${coin}`} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col'>
                        <div className='w-full flex flex-col items-start text-xs uppercase font-semibold mb-1'><span className='ml-2 opacity-50'>Subscribers</span></div>
                        <div className='grid grid-cols-2 gap-1 justify-between p-1 bg-gray-100 rounded-xl'>
                            <FullSubscriber user='Andrey Ezhov' /> <FullSubscriber user='Andrey Ezhov' message='Kek' avatar='s' /> <FullSubscriber /> <FullSubscriber /> <FullSubscriber />
                        </div>
                    </div>
                    <div className='flex flex-col mb-6'>
                        <div className='w-full flex flex-col items-start text-xs uppercase font-semibold mb-1'><span className='ml-2 opacity-50'>Billing history</span></div>
                        <div className='grid grid-cols-1 border-2 border-gray-100 h-32 overflow-scroll gap-1 justify-between p-1 bg-gray-100 rounded-xl'>
                            <SubsBilling date='01.01.01' price={0.21} />
                            <SubsBilling date='01.01.01' price={0.21} />
                            <SubsBilling date='01.01.01' price={0.21} />
                            <SubsBilling date='01.01.01' price={0.21} />
                            <SubsBilling date='01.01.01' price={0.21} />
                            <SubsBilling date='01.01.01' price={0.21} />
                            <SubsBilling date='01.01.01' price={0.21} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-1 justify-between w-full text-sm'>
                    <button className='p-4 bg-red-100 hover:bg-red-200 active:bg-red-300 font-semibold rounded-xl'>Leave Subscription</button>
                    <button className='p-4 bg-green-400 hover:bg-green-500 active:bg-green-600 font-semibold text-white rounded-xl'>Join Subscription</button>
                    <button className='p-4 bg-green-400 hover:bg-green-500 active:bg-green-600 font-semibold text-white rounded-xl'>Log In to Join</button>
                    <button className='p-4 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 font-semibold text-white rounded-xl'>Approve Contract</button>
                </div>
                <Notification visible={visible} text="Link Copied" />
            </div>
        </PopUpEnvironment>
    )
}



export default PopUp
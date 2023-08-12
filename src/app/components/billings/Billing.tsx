import React from 'react'
import { SubscriptionInfo } from '@/app/types'


const Billing = ({
    icon,
    name,
    description,
    price,
    coin,
    status,
    renewalDate,
}: SubscriptionInfo) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className="text-left p-px flex sm:flex-row flex-col gap-3 justify-between sm:items-center text-sm border-2 border-transparent px-2">
                <div className="flex flex-row gap-3 items-center">
                    <img className="h-6 w-6 bg-slate-600 rounded-full" src={icon} />
                    <div className="w-20 flex flex-col items-start">
                        <span className="font-semibold">{name}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="opacity-50">{description}</span>
                    </div>
                </div>
                <div className="flex flex-row sm:w-fit items-center justify-between gap-8">
                    <div className="flex flex-row gap-3">
                        <div className="w-20 pr-3 flex flex-col items-start">
                            <span>{renewalDate}</span>
                        </div>
                        <div className="w-16 flex flex-col">
                            <div className={`font-semibold`}>
                                <div className="w-full flex flex-row justify-start items-end">
                                    <span className="pr-1">{price}</span>
                                    <span className="uppercase text-[10px]">{coin}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-px bg-gray-100' />
        </div>
    )
}

export default Billing
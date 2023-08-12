import React from 'react'
import { Currency } from '../../../types'

interface Props {
    date: string;
    price: number;
    coin?: Currency;
}

const SubsBilling = ({ price, coin, date }: Props) => {
    return (
        <div className='font-semibold  text-sm flex flex-row p-2 justify-between rounded-md bg-white h-fit'>
            <div className={`flex flex-row`}>
                <div className="w-full flex flex-row justify-start items-end">
                    <span className="pr-1">{price}</span>
                    <span className="uppercase text-[10px]">{coin ? coin : "ETH"}</span>
                </div>
            </div>
            <div className={`flex flex-row`}>
                <div className={`opacity-50`}>
                    <span className="pr-1 font-regular">Date</span>
                </div>
                <div className="w-full flex flex-row justify-start items-end">
                    <span className="pr-1">{date}</span>
                </div>
            </div>
        </div>
    )
}

export default SubsBilling
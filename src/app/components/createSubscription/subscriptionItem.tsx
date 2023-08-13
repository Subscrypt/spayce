import React from 'react'

interface SubscriptionItem {
    id: number
    name: string
    description: string
    logo: string
    onClick: any
}

const SubscriptionItem = ({ id, name, description, logo, onClick }: SubscriptionItem) => {
    return (
        <button onClick={() => onClick(id)} className="flex flex-row gap-2 w-fit pr-4 rounded-xl items-center bg-gray-100 hover:bg-green-400 active:text-white active:bg-green-600 focus:bg-green-500 focus:text-white transition-colors">
            <img src={logo} className="w-[52px] h-[52px] opacity-100 rounded-xl bg-gray-800" />
            <div className="flex flex-col items-start">
                <div className="font-bold text-left">{name}</div>
                <div className="opacity-75 text-sm text-left">{description}</div>
            </div>
        </button>
    )
}

export default SubscriptionItem
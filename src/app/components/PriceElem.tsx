import React from 'react'

interface Props {
    head: string;
    info: string;
    coin?: string;
}

const PriceElem = ({ head, info, coin }: Props) => {
    return (
        <div className={`font-medium rounded-xl bg-white`}>
            <div className={`opacity-50 text-xs items-center`}>
                <span className="pr-1">{head}</span>
            </div>
            <div className="w-full flex flex-row justify-start items-end">
                <span className="pr-1 text-xl font-bold">{info}</span>
                {coin ? <span className="uppercase text-[10px] translate-y-[-9px]">{coin}</span> : null}
            </div>

        </div>
    )
}

export default PriceElem
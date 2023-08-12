"use client";
import React, { useEffect } from "react";
import { Currency, SubscriptionStatus } from "../../types";
import { useState } from "react";
import Options from "./Options";
import Button from "../Button";
import Subscriber from "./subscribers/Subscriber"
import { useRouter } from "next/navigation";
import { SubscriptionInfo } from "../../types";
import { renderSwitch } from './utils/renderSwitch'

const Subscription = ({
  icon,
  name,
  description,
  price,
  coin,
  status,
  renewalDate,
}: SubscriptionInfo) => {
  const [pop, setPop] = useState(false);

  // const renderPopup = () => {
  //   if (pop) {
  //     return (
  //       <div className="fixed z-10 -translate-x-[50%] ml-[22px] -translate-y-2 w-fit">
  //         <Options onBlur={() => ""}>
  //           {" "}
  //           <Button
  //             onClick={() => setPop(false)}
  //             text="tefaffafafafafafafafaxt"
  //             hasIcon={false}
  //           />
  //           <Button onClick={() => setPop(false)} text="text" hasIcon={false} />
  //           <Button onClick={() => setPop(false)} text="text" hasIcon={false} />
  //         </Options>
  //       </div>
  //     );
  //   }
  // };

  const pageRouter = useRouter();

  return (
    <button onClick={() => pageRouter.push('/subscription/1dada')} className="text-left p-2 flex sm:flex-row flex-col gap-3 justify-between sm:items-center rounded-2xl bg-gray-50 text-sm border-2 border-transparent hover:border-gray-200 active:bg-gray-100 active:border-gray-300">
      <div className="flex flex-row gap-3 items-center">
        <img className="h-11 w-11 bg-slate-600 rounded-xl" src={icon} />
        <div className="flex flex-col items-start">
          <span className="font-semibold">{name}</span>
          <span className="opacity-50">{description}</span>
        </div>
      </div>
      <div className="flex flex-row sm:w-fit items-center justify-between gap-8">
        <div className="flex flex-row h-fit">
          <Subscriber user="Andrey Ezhov" message="Payment pending..." />
          <Subscriber user="Ivan Kumets" message="Payment failed" hasWarning={true} />
          <Subscriber user="Maxim Fedin" message="Paid" avatar="k" />
          <Subscriber user="Safe.Global" message="Paid" avatar="a" />
          <Subscriber />
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-20 pr-3 flex flex-col items-start">
            <span className="opacity-50">{renderSwitch(status)}</span>
            <span>{renewalDate}</span>
          </div>
          <div className="w-16 flex flex-col">
            <div className={`font-semibold`}>
              <div className={`opacity-50 flex flex-row gap-3 items-center`}>
                <span className="pr-1">Price</span>
              </div>
              <div className="w-full flex flex-row justify-start items-end">
                <span className="pr-1">{price}</span>
                <span className="uppercase text-[10px]">{coin}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Subscription;

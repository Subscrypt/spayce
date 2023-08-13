"use client";
import React, { useEffect } from "react";
import { Currency, SubscriptionStatus } from "../../types";
import { useState } from "react";
import Options from "./Options";
import Button from "../Button";
import Subscriber from "./subscribers/Subscriber"
import { useRouter } from "next/navigation";
import { Subscription } from "../../types";
import { renderSwitch } from './utils/renderSwitch'

const Subscription = ({
  id, address, plan, planId, members, createdAt
}: Subscription) => {
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
    <button onClick={() => pageRouter.push(`/subscriptions/${id}`)} className="text-left p-2 flex sm:flex-row flex-col gap-3 justify-between sm:items-center rounded-2xl bg-gray-50 text-sm border-2 border-transparent hover:border-gray-200 active:bg-gray-100 active:border-gray-300">
      <div className="flex flex-row gap-3 items-center">
        <img className="h-11 w-11 bg-slate-600 rounded-xl" src={plan && plan.provider && plan.provider.icon ? plan.provider.icon : ''} />
        <div className="flex flex-col items-start">
          <span className="font-semibold">{plan && plan.provider ? plan.provider.name : ''}</span>
          <span className="opacity-50">{plan && plan.provider ? plan.name : ''}</span>
        </div>
      </div>
      <div className="flex flex-row sm:w-fit items-center justify-between gap-8">
        <div className="flex flex-row h-fit">
          <>
            {members ? members.map((elem, key) =>
              <Subscriber key={key} user={elem.user.name ? elem.user.name : elem.user.address} />
            )
              :
              null}
          </>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-24 pr-3 flex flex-col items-start">
            <span className="opacity-50">{'Renews on'}</span>
            <span>{plan?.renewalDate.toString().slice(0, 10)}</span>
          </div>
          <div className="w-16 flex flex-col">
            <div className={`font-semibold`}>
              <div className={`opacity-50 flex flex-row gap-3 items-center`}>
                <span className="pr-1">Price</span>
              </div>
              <div className="w-full flex flex-row justify-start items-end">
                <span className="pr-1">{plan?.price}</span>
                <span className="uppercase text-[10px]">{'ETH'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Subscription;

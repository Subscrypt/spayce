'use client'
import React from "react";
import CurrencySwitcher from "./components/currency/CurrencySwitcher";
import Subscription from "./components/subscription/Subscription";
import { useAccountAbstraction } from "./store/safe/accountAbstractionContext";
import Landing from "./components/landing/Landing"

export default function Home() {
  const { isAuthenticated } = useAccountAbstraction()
  return (
    <main className="w-full h-full bg-white flex flex-col gap-6">
      {isAuthenticated ?
        <>
          <div className="flex sm:flex-row flex-col-reverse flex-reverse w-full pt-3 justify-between px-3 sm:items-center items-start">
            <h2 className="font-bold text-3xl">Active Subscriptions</h2>
          </div>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-1">
            <Subscription
              name="Netflix"
              description="Family Subscription"
              price={1049}
              coin="ETH"
              renewalDate="19.01.2024"
              status="active"
            />
          </div>
        </>

        :

        <Landing />}

    </main>
  );
}

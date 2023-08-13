'use client'
import React, { useEffect, useState } from "react";
import CurrencySwitcher from "./components/currency/CurrencySwitcher";
import Subscription from "./components/subscription/Subscription";
import { Subscription as Subs } from "./types";
import { useAccountAbstraction } from "./store/safe/accountAbstractionContext";
import Landing from "./components/landing/Landing"
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import logo from '../../public/img/logo.json'

const fetchPublicSpayces = async (address: string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/' + address + '/subscriptions');
  const cards = await res.json();
  return cards
}

const fetchUser = async (address: string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/' + address)
  const user = await res.json();
  return user;
}

export default function Home() {
  const { loginWeb3Auth, logoutWeb3Auth, ownerAddress, isAuthenticated, safeSelected, chainId } = useAccountAbstraction()
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<Subs[] | null>(null);
  useEffect(() => {
    const getCards = async () => {
      if (cards === null && isAuthenticated) {
        setLoading(true);
        const newCards = await fetchPublicSpayces(ownerAddress as string);
        const newUser = await fetchUser(ownerAddress as string);
        setCards(newCards);
      }
      setLoading(false);
    }
    getCards();
    console.log(cards)
  })
  return (
    <main className="w-full h-full bg-white flex flex-col gap-6">
      {isAuthenticated ?
        <>
          <div className="flex sm:flex-row flex-col-reverse flex-reverse w-full pt-3 justify-between px-3 sm:items-center items-start">
            <h2 className="font-bold text-3xl">Active Subscriptions</h2>
          </div>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-1">
            {cards ?
              cards.map((elem, key) =>
                <Subscription
                  payments={elem.payments}
                  key={key}
                  id={elem.id}
                  address={elem.address}
                  plan={elem.plan}
                  planId={elem.planId}
                  members={elem.members}
                  createdAt={elem.createdAt}
                />
              )
              : <div className="h-40 w-40"><Lottie animationData={logo} autoplay={true} loop={true} /></div>}
          </div>
        </>

        :

        <Landing />}

    </main>
  );
}

'use client'
import React, { useEffect, useState } from "react";
import Subscription from "../components/subscription/Subscription";
import { Subscription as Subs } from "../types";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import logo from '../../../public/img/logo.json'

const fetchPublicSpayces = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/subscriptions');
  const cards = await res.json();
  return cards
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<Subs[] | null>(null);
  useEffect(() => {
    const getCards = async () => {
      if (cards === null) {
        setLoading(true);
        const newCards = await fetchPublicSpayces();
        setCards(newCards);
      }
      setLoading(false);
    }
    getCards();
    console.log(cards)
  })


  return (
    <main className="w-full h-full bg-white flex flex-col gap-6">
      <div className="flex flex-row w-full pt-3 justify-between px-3 items-center">
        <h2 className="font-bold text-3xl">Available Subscriptions</h2>
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
        {/* <Subscription
          id={1}
          address={''}
          plan={'elem.plan'}
          planId={1}
          members={[]}
          created_at={'elem.created_at'}
        /> */}
      </div>
    </main>
  );
}

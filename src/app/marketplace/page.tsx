import React from "react";
import Subscription from "../components/subscription/Subscription";

export default function Home() {
  return (
    <main className="w-full h-full bg-white flex flex-col gap-6">
      <div className="flex flex-row w-full pt-3 justify-between px-3 items-center">
        <h2 className="font-bold text-3xl">Available Subscriptions</h2>
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
        <Subscription
          name="Spotify"
          description="Family Subscription"
          price={1049}
          coin="ETH"
          renewalDate="19.01.2024"
          status="active"
        />
        <Subscription
          name="Figma"
          description="Team Enterprise"
          price={1049}
          coin="ETH"
          renewalDate="19.01.2024"
          status="active"
        />
      </div>
    </main>
  );
}

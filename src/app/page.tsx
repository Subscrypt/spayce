import CurrencySwitcher from "./components/currency/CurrencySwitcher";
import Subscription from "./components/subscription/Subscription";

export default function Home() {
  return (
    <main className="w-full bg-white flex flex-col gap-6">
      <div className="flex flex-row w-full pt-3 justify-between px-3 items-center">
        <h2 className="font-bold text-3xl">Active Subscriptions</h2>{" "}
        <CurrencySwitcher />
      </div>
      <div className="grid grid-cols-2 gap-1">
        <Subscription
          name="Name"
          description="Descpription"
          price={1049}
          coin="ETH"
          renewalDate="19.01.2024"
          status="active"
        />
        <Subscription
          name="Name"
          description="Descpription"
          price={1049}
          coin="ETH"
          renewalDate="19.01.2024"
          status="active"
        />
        <Subscription
          name="Name"
          description="Descpription"
          price={1049}
          coin="ETH"
          renewalDate="19.01.2024"
          status="active"
        />
        <Subscription
          name="Name"
          description="Descpription"
          price={1049}
          coin="ETH"
          renewalDate="19.01.2024"
          status="active"
        />
      </div>
    </main>
  );
}

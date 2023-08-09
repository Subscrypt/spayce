import CurrencySwitcher from "./components/currency/CurrencySwitcher";
import Subscription from "./components/subscription/Subscription";

export default function Home() {
  return (
    <main className="w-full bg-white flex flex-col gap-6">
      <div className="flex sm:flex-row flex-col-reverse flex-reverse w-full pt-3 justify-between px-3 sm:items-center items-start">
        <h2 className="font-bold text-3xl">Active Subscriptions</h2>{" "}
        <CurrencySwitcher />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-1">
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

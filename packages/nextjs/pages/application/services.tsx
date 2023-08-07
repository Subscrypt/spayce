import CurrencySwitcher from "../../components/appComponents/currency/CurrencySwitcher";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <div className="flex flex-row w-full pt-3 justify-between px-3 items-center">
        <h2 className="font-bold text-3xl">Services</h2>
        <CurrencySwitcher />
      </div>
      <div></div>
    </main>
  );
}

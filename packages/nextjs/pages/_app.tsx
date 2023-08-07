import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useDarkMode } from "usehooks-ts";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import LeftMenu from "~~/components/appComponents/LeftMenu";
import AppHeader from "~~/components/appComponents/appHeader/appHeader";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  const pathName = usePathname();
  const [debug, setDebug] = useState(() => {
    if (pathName?.includes("/application")) {
      return false;
    } else {
      return true;
    }
  });

  const handleDebugSwitch = () => {
    setDebug(!debug);
    {
      !debug ? router.push("/") : router.push("application");
    }
  };

  const debugModeStyling = {
    debug: "bg-gray-200 stroke-white stroke-2 hover:bg-gray-700 active:bg-gray-800",
    app: "bg-red-600 stroke-white stroke-2 hover:bg-red-700 active:bg-red-800",
  };

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <WagmiConfig config={wagmiConfig}>
      <NextNProgress />
      <RainbowKitProvider
        chains={appChains.chains}
        avatar={BlockieAvatar}
        theme={isDarkTheme ? darkTheme() : lightTheme()}
      >
        <div className="">
          {debug ? <Header /> : ""}
          <button
            className={`fixed z-20 left-4 top-20 px-4 h-8 rounded-full ${
              debug ? debugModeStyling.app : debugModeStyling.debug
            }`}
            onClick={handleDebugSwitch}
          >
            {debug ? "Go App" : "Go Debug"}
          </button>
          {debug ? (
            <main className="">
              <Component {...pageProps} />
            </main>
          ) : (
            ""
          )}
          {!debug ? (
            <div className={` text-gray-900 bg-gray-50 px-40 py-2 flex flex-col gap-1 h-screen`}>
              <AppHeader />
              <div className="w-full flex flex-row gap-1 h-full">
                <LeftMenu />
                <div className="bg-white rounded-2xl w-full overflow-hidden p-5">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {debug ? <Footer /> : ""}
        </div>
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;

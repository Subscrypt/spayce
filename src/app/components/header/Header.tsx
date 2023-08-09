"use client"
import React, { useState, useEffect, useContext } from "react";
import { useAccountAbstraction } from "@/app/store/safe/accountAbstractionContext";
import Lottie from "lottie-react";
import logo from "../../../../public/img/logo.json"
import { usePathname, useSearchParams } from 'next/navigation';

const NavigationEvents = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])

  return null
}

const LogoAnimation = () => {
  const [loop, useLoop] = useState(false);
  const defaultOptions = {
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json', // the path to the animation json
    animationData: logo,
  };
  const loadingOptions = {
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'data.json', // the path to the animation json
    animationData: logo,
  };
  return (
    <>
      <Lottie animationData={logo} loop={false} height={38} width={34} />
    </>);
}



const Header = () => {

  const [visible, setVisible] = useState(false);
  const renderNotification = (text: string) => {
    setVisible(true);
    setTimeout(() => setVisible(false), 1500)
  }
  const hideStyle = { opacity: 0, transform: 'translateY(0px) translateX(-50%)' }
  const showStyle = { opacity: 1, transform: 'translateY(5px) translateX(-50%)' }

  const copyTextNotif = () => renderNotification("Text Copied!")


  const { loginWeb3Auth, logoutWeb3Auth, ownerAddress, isAuthenticated, safeSelected, chainId } = useAccountAbstraction()

  return (

    <div className="w-full rounded-2xl h-16 bg-white flex justify-between items-center text-gray-950 pr-2 pl-3">
      <div
        style={visible ? showStyle : hideStyle}
        className={`pointer-events-none fixed left-1/2 transition-all py-3 px-8 rounded-full drop-shadow-2xl bg-gray-100 border-2 border-gray-200`}>
        Address Copied!
      </div>
      <div className="flex gap-2 items-center tracking-tight font-semibold text-2xl tracking-wide">
        <LogoAnimation />
        Subscrypto
      </div>
      <div className="flex gap-1">
        {isAuthenticated ?
          <>
            <button className="py-3 px-6 rounded-xl transition-colors bg-gray-300 hover:bg-gray-400 active:bg-gray-500" onClick={logoutWeb3Auth}>Log Out</button>
            <button className="py-3 px-2 sm:w-40 w-20 truncate rounded-xl transition-colors bg-gray-100 hover:bg-gray-200 active:bg-gray-300" onClick={copyTextNotif}>{ownerAddress}</button>
          </> :
          <button className="py-3 px-6 rounded-xl transition-colors bg-green-400 hover:bg-green-500 active:bg-green-600" onClick={loginWeb3Auth}>Log In</button>}
      </div>

    </div>
  );
};

export default Header

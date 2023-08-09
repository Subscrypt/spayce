import React, { useEffect, useState } from "react";

import { Web3AuthConfig, Web3AuthModalPack } from '@safe-global/auth-kit'
import { Web3AuthOptions } from '@web3auth/modal'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { CHAIN_NAMESPACES, CustomChainConfig, WALLET_ADAPTERS } from "@web3auth/base";
import { EthereumPrivKeyProviderConfig, EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { useAccountAbstraction } from "~~/store/accountAbstractionContext";



// https://web3auth.io/docs/sdk/pnp/web/modal/initialize#arguments
const options: Web3AuthOptions = {
  clientId: 'BH_NXbL09urfyHo5qNl10pSE4RnUbQE3eL6HD_Fp0ZfY6NCZ8b2b-wSPK-juDUg8n-iA5IjoOdrsqCz8XdYukGA', // https://dashboard.web3auth.io/
  web3AuthNetwork: 'testnet',
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x13881',
    // https://chainlist.org/
    rpcTarget: 'https://endpoints.omniatech.io/v1/matic/mumbai/public'
  },
  uiConfig: {
    theme: 'light',
    loginMethodsOrder: ['google', 'facebook']
  }
}

// https://web3auth.io/docs/sdk/pnp/web/modal/initialize#configuring-adapters
const modalConfig = {
  [WALLET_ADAPTERS.TORUS_EVM]: {
    label: 'torus',
    showOnModal: false
  },
  [WALLET_ADAPTERS.METAMASK]: {
    label: 'metamask',
    showOnDesktop: true,
    showOnMobile: false
  }
}

// https://web3auth.io/docs/sdk/pnp/web/modal/whitelabel#whitelabeling-while-modal-initialization



const web3AuthConfig: Web3AuthConfig = {
  txServiceUrl: 'https://safe-transaction-goerli.safe.global'
}

let scopeWeb3AuthModalPack: Web3AuthModalPack;

// Instantiate and initialize the pack

const chainConfig: CustomChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x13881",
  rpcTarget: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
  displayName: 'SomeNetwork',
  blockExplorer: 'string',
  ticker: "ETH",
  tickerName: 'Etherium'
};

const ethChainConfig: EthereumPrivKeyProviderConfig = {
  chainConfig: chainConfig,
}

const privateKeyProvider = new EthereumPrivateKeyProvider({ config: ethChainConfig });



const AppHeader = () => {
  // const initializeWeb3AuthModalPack = async () => {
  //   const openloginAdapter = new OpenloginAdapter({
  //     loginSettings: {
  //       mfaLevel: 'mandatory'
  //     },
  //     adapterSettings: {
  //       uxMode: 'popup',
  //       whiteLabel: {
  //         name: 'Safe'
  //       }
  //     },
  //     privateKeyProvider
  //   })


  //   const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig);
  //   await web3AuthModalPack.init({ options, adapters: [openloginAdapter], modalConfig });
  //   // Get the provider
  //   web3AuthModalPack.getProvider()
  //   return scopeWeb3AuthModalPack = web3AuthModalPack;

  // }
  // initializeWeb3AuthModalPack();

  // const handleSignIn = async () => {
  //   const authKitSignData = await scopeWeb3AuthModalPack.signIn()
  //   console.log(authKitSignData);
  // }


  const handleSignOut = async () => {
    const authKitSignData = await scopeWeb3AuthModalPack.signOut()
    console.log(authKitSignData);
  }



  const { ownerAddress, loginWeb3Auth, logoutWeb3Auth, isAuthenticated, safeSelected, chainId } = useAccountAbstraction()
  return (
    <div className="w-full rounded-2xl h-16 bg-white flex justify-between items-center text-gray-950 p-2 pl-5">
      <div className="uppercase font-semibold text-xl tracking-wide">Subscrypto</div>
      <div className="flex flex-row gap-1">
        {!isAuthenticated ?
          <button className="flex justify-center items-center p-3 rounded-xl uppercase text-sm font-semibold bg-green-400 transition-colors hover:bg-green-500 active:bg-green-600" onClick={loginWeb3Auth}>Log In</button> :
          <>{ownerAddress}<button className="flex justify-center items-center p-3 rounded-xl uppercase text-sm font-semibold bg-gray-100 transition-colors hover:bg-gray-200 active:bg-gray-300" onClick={logoutWeb3Auth}>Sign Out</button></>}


      </div>
    </div>
  );
};

export default AppHeader;

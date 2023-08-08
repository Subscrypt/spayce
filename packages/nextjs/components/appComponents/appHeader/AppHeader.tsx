import React from "react";

import { Web3AuthModalPack, Web3AuthConfig } from '@safe-global/auth-kit'
import { Web3AuthOptions } from '@web3auth/modal'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";



// https://web3auth.io/docs/sdk/pnp/web/modal/initialize#arguments
const options: Web3AuthOptions = {
  clientId: 'BH_NXbL09urfyHo5qNl10pSE4RnUbQE3eL6HD_Fp0ZfY6NCZ8b2b-wSPK-juDUg8n-iA5IjoOdrsqCz8XdYukGA', // https://dashboard.web3auth.io/
  web3AuthNetwork: 'testnet',
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x13881',
    // https://chainlist.org/
    rpcTarget: 'https://rpc.ankr.com/eth_goerli'
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
const openloginAdapter = new OpenloginAdapter({
  loginSettings: {
    mfaLevel: 'mandatory'
  },
  adapterSettings: {
    uxMode: 'popup',
    whiteLabel: {
      name: 'Safe'
    }
  }
})


const web3AuthConfig: Web3AuthConfig = {
  txServiceUrl: 'https://safe-transaction-goerli.safe.global'
}
 
let scopeWeb3AuthModalPack: Web3AuthModalPack;

// Instantiate and initialize the pack
const initializeWeb3AuthModalPack = async () => {
  const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig);
  // await web3AuthModalPack.init({ options, adapters: [openloginAdapter], modalConfig });
  
  // Allow to login and get the derived EOA
  await web3AuthModalPack.signIn()
  
  // Logout
  await web3AuthModalPack.signOut()
  
  // Get the provider
  web3AuthModalPack.getProvider()
  return scopeWeb3AuthModalPack = web3AuthModalPack;
  
}
initializeWeb3AuthModalPack();

const handleSignIn = async () => {
  const authKitSignData = await scopeWeb3AuthModalPack.signIn()
  console.log(authKitSignData);
}

const AppHeader = () => {
  return (
    <div className="w-full rounded-2xl h-16 bg-white flex justify-between items-center text-gray-950 p-2 pl-5">
      <div className="uppercase font-semibold text-xl tracking-wide">Subscrypto</div>
      <button className="flex justify-center items-center p-8 bg-green-500" onClick={handleSignIn}>Log In</button>
    </div>
  );
};

export default AppHeader;

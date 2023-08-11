import { ethers } from 'ethers'
import { EthersAdapter, SafeFactory, SafeAccountConfig } from '@safe-global/protocol-kit'
import SafeApiKit from '@safe-global/api-kit'

// https://chainlist.org/?search=goerli&testnets=true
const RPC_URL = 'https://eth-goerli.public.blastapi.io' // make import in the future
const provider = new ethers.providers.JsonRpcProvider(RPC_URL)
const txServiceUrl = 'https://safe-transaction-goerli.safe.global'

const SafeProtocol = async () => {
    // Initialize signers
    const owner1Signer = new ethers.Wallet(process.env.OWNER_1_PRIVATE_KEY!, provider)

    const ethAdapterOwner1 = new EthersAdapter({
        ethers,
        signerOrProvider: owner1Signer
    })

    ethAdapterOwner1.getBalance;

    const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner1 })

    const safeService = new SafeApiKit({ txServiceUrl, ethAdapter: ethAdapterOwner1 })

    const safeAccountConfig: SafeAccountConfig = {
        owners: [
            await owner1Signer.getAddress(),
        ],
        threshold: 2,
        // ... (Optional params)
    }

    /* This Safe is tied to owner 1 because the factory was initialized with
    an adapter that had owner 1 as the signer. */
    const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig })

    const safeAddress = await safeSdkOwner1.getAddress()

    console.log('Your Safe has been deployed:')
    console.log(`https://goerli.etherscan.io/address/${safeAddress}`)
    console.log(`https://app.safe.global/gor:${safeAddress}`)

}



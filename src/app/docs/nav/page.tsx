'use client'
import { Button, Heading, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Layout from '../../components/crud/Layout'



import { proposeTx, proposeTxWallet } from "../../utils/safe/api-kit/propose-transaction";
import { OperationType, SafeTransactionDataPartial } from '@safe-global/safe-core-sdk-types'
import { useAccountAbstraction } from '@/app/store/safe/accountAbstractionContext'




async function proposeAndSign(provider) {
  
  const config = {
    RPC_URL: process.env.NEXT_PUBLIC_BASE_RPC_URL || "",
    SIGNER_ADDRESS_PRIVATE_KEY: process.env.DEPLOYER_ADDRESS_PRIVATE_KEY || "",
    SAFE_ADDRESS: process.env.NEXT_PUBLIC_SAFE_ADDRESS || "",
    TX_SERVICE_URL: process.env.NEXT_PUBLIC_BASE_SAFE_TX_SERVICE_URL || ""
  }
  const safeTransactionData: SafeTransactionDataPartial = {
    to: process.env.NEXT_PUBLIC_OWNER_1_ADDRESS || "",
    value: '1', // 1 wei
    data: '0x',
    operation: OperationType.Call
  }

  const safeAddress = await proposeTxWallet(config, safeTransactionData, provider)
}


const Home = () => {
  const { loginWeb3Auth, logoutWeb3Auth, ownerAddress, isAuthenticated, safeSelected, chainId, web3Provider } = useAccountAbstraction()
  const { push } = useRouter()

  const onCustomUserHandler = async () => {
    const txt = await fetch('/api/users/custom').then((res) => res.text())
    alert(txt)
  }

  return (
    <Layout title="Home">
      <VStack spacing={6} flex={1}>
        <Heading>Subscrypt Crud</Heading>
        <VStack spacing={4} w="100%" px={7}>
          <Button colorScheme="blue" onClick={() => push('/users')}>
            Users
          </Button>
          <Button colorScheme="red" onClick={onCustomUserHandler}>
            Custom user handler
          </Button>
          <Button colorScheme="green" onClick={() => push('/docs')}>
            Swagger doc
          </Button>
          <Button colorScheme="gray" onClick={() => proposeAndSign(web3Provider)}>
            Propose & Sign Tx
          </Button>
        </VStack>
      </VStack>
    </Layout>
  )
}

export default Home

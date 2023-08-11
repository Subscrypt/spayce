'use client'
import { Button, Heading, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Layout from '../../components/crud/Layout'

const Home = () => {
  const { push } = useRouter()

  const onCustomUserHandler = async () => {
    const txt = await fetch('/newApi/users/custom').then((res) => res.text())
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
        </VStack>
      </VStack>
    </Layout>
  )
}

export default Home

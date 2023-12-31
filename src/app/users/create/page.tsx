'use client'
import { Heading, useToast, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import React from 'react'
import Layout from '../../components/crud/Layout'
import UserForm, { IFormValues } from '../../components/crud/users/UserForm'

const UserCreate: NextPage = () => {
  const toast = useToast()
  const { replace } = useRouter()

  const onSubmit = async (values: IFormValues) => {
    try {
      await fetch(`/api/users`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      toast({
        status: 'success',
        description: 'User successfully created',
        duration: 2000,
      })
      replace('/users')
    } catch (e) {
      toast({
        status: 'error',
        description: 'Failed to create user',
        duration: 2000,
      })
    }
  }

  return (
    <Layout title="User create" backRoute="/users">
      <VStack spacing={4} width="100%">
        <Heading>User create</Heading>
        <UserForm onSubmit={onSubmit} />
      </VStack>
    </Layout>
  )
}

export default UserCreate

'use client'
import {Heading, useToast, VStack} from '@chakra-ui/react'
import {TPaginationResult} from '@premieroctet/next-crud'
import {User} from '@prisma/client'
import {usePathname, useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {InfiniteData, useQueryClient} from 'react-query'
import Layout from '../../components/crud/Layout'
import UserForm, {IFormValues} from '../../components/crud/users/UserForm'


async function getUser(userId: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`).then(
      (res) => res.json())
}

// Promise<NextPage<IProps>>
export default function UserCreate() {

  const path = usePathname();
  const userId = path?.split('/')[path.split('/').length - 1];
  const toast = useToast()
  const { replace } = useRouter()
  const queryClient = useQueryClient()
  const mockUser: User = { id: -1, name: '', address: ''}
  const [user, setUser] = useState(mockUser);
  useEffect(() => {
    async function fetchUser() {
      try {
        const fetchedUser = await getUser(userId as string);
        setUser(fetchedUser);
      } catch (error) {
        // Handle the error appropriately, such as displaying a toast message
        toast({
          title: 'An error occurred.',
          description: 'Unable to fetch the user.',
          status: 'error',
        });
      }
    }

    if (userId) {
      fetchUser();
    }
  }, [userId, toast]);
  const onSubmit = async (values: IFormValues) => {
    const user = await getUser(userId as string)
    try {
      const userData = await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
      toast({
        status: 'success',
        description: 'User successfully updated',
        duration: 2000,
      })
      replace('/users')
      queryClient.setQueryData<
        InfiniteData<TPaginationResult<User>> | undefined
      >('users', (data) => {
        const page = data?.pages.find((page) =>
          page.data.some((userElem) => userElem.id === user.id)
        )
        if (page) {
          const elemIdx = page.data.findIndex((data) => data.id === user.id)
          page.data[elemIdx] = userData
        }

        return data
      })
    } catch (e) {
      toast({
        status: 'error',
        description: 'Failed to update user',
        duration: 2000,
      })
    }
  }

  return (
    <Layout title={user.name!} backRoute="/users">
      <VStack spacing={4} width="100%">
        <Heading>User edition</Heading>
        <UserForm
          initialValues={{ name: user.name }}
          onSubmit={onSubmit}
        />
      </VStack>
    </Layout>
  )
}






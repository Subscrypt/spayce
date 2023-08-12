import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'
import { User } from '@prisma/client'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export interface IFormValues extends Pick<User, 'name'> { }

interface IProps {
  initialValues?: IFormValues
  onSubmit: (values: IFormValues) => Promise<void>
}

const schema = yup.object<IFormValues>({
  name: yup.string().required('Username required'),
})

const UserForm = ({ initialValues, onSubmit }: IProps) => {
  const { register, formState, handleSubmit } = useForm<IFormValues>({
    defaultValues: initialValues,
    resolver: yupResolver(schema as IFormValues | any),
    mode: 'onChange',
  })

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={4}
      width="100%"
    >
      <FormControl
        id="name"
        isInvalid={!!formState.errors.name?.message}
      >
        <FormLabel>Username</FormLabel>
        <Input {...register('name', { required: true })} />
        <FormErrorMessage>
          {formState.errors.name?.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        type="submit"
        colorScheme="blue"
        isLoading={formState.isSubmitting}
        disabled={!formState.isValid}
      >
        Submit
      </Button>
    </VStack>
  )
}

export default UserForm

'use client'
import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const QueryProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider resetCSS>
                {children}
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default QueryProvider
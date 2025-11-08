"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export default function ReactQueryProvider({ children }) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

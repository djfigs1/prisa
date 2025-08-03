'use client'
import Dashboard from '@/components/dashboard/Dashboard'
import { Provider } from '@/components/Provider'
import { Button, Card } from '@chakra-ui/react'
import React, { use } from 'react'

type pageProps = { params: Promise<{ id: string }> }

const page: React.FC<pageProps> = ({ params }) => {
  const { id } = use(params)

  return (
    <Provider>
      <Dashboard dashboardId={id} />
    </Provider>
  )
}

export default page

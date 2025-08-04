'use client'
import Dashboard from '@/components/dashboard/Dashboard'
import React, { use } from 'react'

type PageProps = { params: Promise<{ id: string }> }

const Page: React.FC<PageProps> = ({ params }) => {
  const { id } = use(params)

  return <Dashboard dashboardId={id} />
}

export default Page

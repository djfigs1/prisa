'use client'
import Routine from '@/components/routine/Routine'
import PageLayout from '@/components/ui/PageLayout'
import React, { use } from 'react'

type PageProps = {
  params: Promise<{
    id: string
  }>
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { id } = use(params)
  return (
    <PageLayout>
      <Routine routineId={id} />
    </PageLayout>
  )
}

export default Page

'use client'
import RoutineInterface from '@/components/routine/RoutineInterface'
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
      <RoutineInterface routineId={id} />
    </PageLayout>
  )
}

export default Page

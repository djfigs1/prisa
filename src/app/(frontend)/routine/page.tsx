import RoutinePicker from '@/components/routine/picker/RoutinePicker'
import PageLayout from '@/components/ui/PageLayout'
import React from 'react'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <PageLayout>
      <RoutinePicker />
    </PageLayout>
  )
}

export default Page
